#!/usr/bin/env node
/**
 * Sync live product price/availability from Shopify via CLI store auth.
 * Requires: Node 22+, `npm run shopify:auth` already completed.
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const STORE = "xshhuw-wx.myshopify.com";
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PRODUCTS_FILE = path.join(ROOT, "src/lib/data/products.ts");

const QUERY = `query {
  products(first: 20) {
    edges {
      node {
        handle
        status
        variants(first: 5) {
          edges {
            node {
              id
              price
              compareAtPrice
              availableForSale
            }
          }
        }
      }
    }
  }
}`;

function runShopify() {
  const out = execFileSync(
    "shopify",
    ["store", "execute", "--store", STORE, "--json", "--query", QUERY],
    { encoding: "utf8", env: process.env },
  );
  const start = out.indexOf("{");
  if (start < 0) throw new Error(`No JSON from shopify CLI:\n${out}`);
  return JSON.parse(out.slice(start));
}

function money(amount) {
  if (amount == null || amount === "") return null;
  return Math.round(Number(amount));
}

function variantNumericId(gid) {
  const m = String(gid).match(/ProductVariant\/(\d+)/);
  return m ? m[1] : null;
}

const handleToSlug = {
  "varicose-veins-relief-cream-50-g": "varicose-veins-relief-cream",
  "vea-care-diabetic-foot-cream-50-g": "diabetic-foot-cream",
};

const data = runShopify();
let source = fs.readFileSync(PRODUCTS_FILE, "utf8");

for (const edge of data.products?.edges ?? []) {
  const product = edge.node;
  const slug = handleToSlug[product.handle];
  if (!slug) {
    console.log(`skip unknown handle: ${product.handle}`);
    continue;
  }
  const variant = product.variants.edges[0]?.node;
  if (!variant) continue;

  const price = money(variant.price);
  const compare = money(variant.compareAtPrice);
  const inStock = Boolean(variant.availableForSale);
  const variantId = variantNumericId(variant.id);

  const slugMarker = `slug: "${slug}"`;
  const idx = source.indexOf(slugMarker);
  if (idx < 0) {
    console.warn(`slug not found in products.ts: ${slug}`);
    continue;
  }

  const chunkStart = source.lastIndexOf("{", idx);
  let chunkEnd = source.indexOf("\n  },\n  {", idx);
  if (chunkEnd < 0) chunkEnd = source.indexOf("\n  },\n];", idx);
  if (chunkEnd < 0) chunkEnd = source.length;
  let chunk = source.slice(chunkStart, chunkEnd);

  if (price != null) chunk = chunk.replace(/price: \d+/, `price: ${price}`);
  if (compare != null) {
    chunk = chunk.replace(/compareAtPrice: \d+/, `compareAtPrice: ${compare}`);
  }
  chunk = chunk.replace(/inStock: (true|false)/, `inStock: ${inStock}`);
  if (variantId) {
    chunk = chunk.replace(
      /shopifyVariantId: "[^"]+"/,
      `shopifyVariantId: "${variantId}"`,
    );
  }
  chunk = chunk.replace(
    /shopifyHandle: "[^"]+"/,
    `shopifyHandle: "${product.handle}"`,
  );

  source = source.slice(0, chunkStart) + chunk + source.slice(chunkEnd);
  console.log(
    `synced ${slug}: ₹${price} compare=${compare ?? "—"} inStock=${inStock} variant=${variantId}`,
  );
}

fs.writeFileSync(PRODUCTS_FILE, source);
console.log("updated", PRODUCTS_FILE);
