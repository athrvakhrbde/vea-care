import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Document, NodeIO } from "@gltf-transform/core";
import * as THREE from "three";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const texturePath = path.join(root, "public/models/textures/vea-diabetic-foot-cream.png");
const outputPath = path.join(root, "public/models/vea-diabetic-foot-cream.glb");

function addGeometryMesh(doc, buffer, geometry, material, name) {
  geometry.computeVertexNormals();

  const position = doc
    .createAccessor(`${name}-position`)
    .setType("VEC3")
    .setArray(new Float32Array(geometry.attributes.position.array))
    .setBuffer(buffer);

  const normal = doc
    .createAccessor(`${name}-normal`)
    .setType("VEC3")
    .setArray(new Float32Array(geometry.attributes.normal.array))
    .setBuffer(buffer);

  const primitive = doc
    .createPrimitive(`${name}-primitive`)
    .setAttribute("POSITION", position)
    .setAttribute("NORMAL", normal)
    .setMaterial(material);

  if (geometry.index) {
    const indices = doc
      .createAccessor(`${name}-indices`)
      .setType("SCALAR")
      .setArray(new Uint16Array(geometry.index.array))
      .setBuffer(buffer);
    primitive.setIndices(indices);
  }

  const mesh = doc.createMesh(name).addPrimitive(primitive);
  return doc.createNode(name).setMesh(mesh);
}

async function main() {
  const png = await fs.readFile(texturePath);

  const doc = new Document();
  const buffer = doc.createBuffer("buffer");

  const labelTexture = doc
    .createTexture("label-texture")
    .setImage(png)
    .setMimeType("image/png");

  const bodyMaterial = doc
    .createMaterial("body-material")
    .setBaseColorFactor([0.953, 0.953, 0.945, 1])
    .setRoughnessFactor(0.48)
    .setMetallicFactor(0.04);

  const labelMaterial = doc
    .createMaterial("label-material")
    .setBaseColorTexture(labelTexture)
    .setAlphaMode("MASK")
    .setAlphaCutoff(0.06)
    .setDoubleSided(true)
    .setRoughnessFactor(0.4)
    .setMetallicFactor(0.02);

  const scene = doc.createScene("scene");
  const rootNode = doc.createNode("tube-root");
  scene.addChild(rootNode);

  const bodyHeight = 2.35;

  const body = addGeometryMesh(
    doc,
    buffer,
    new THREE.CylinderGeometry(0.36, 0.245, bodyHeight, 64, 1, false),
    bodyMaterial,
    "body",
  );
  rootNode.addChild(body);

  const shoulder = addGeometryMesh(
    doc,
    buffer,
    new THREE.CylinderGeometry(0.36, 0.36, 0.1, 64, 1, false),
    bodyMaterial,
    "shoulder",
  );
  shoulder.setTranslation([0, bodyHeight / 2 + 0.05, 0]);
  rootNode.addChild(shoulder);

  const crimp = addGeometryMesh(
    doc,
    buffer,
    new THREE.CylinderGeometry(0.34, 0.34, 0.07, 64, 1, false),
    bodyMaterial,
    "crimp",
  );
  crimp.setTranslation([0, bodyHeight / 2 + 0.135, 0]);
  rootNode.addChild(crimp);

  const cap = addGeometryMesh(
    doc,
    buffer,
    new THREE.CylinderGeometry(0.245, 0.245, 0.14, 48, 1, false),
    bodyMaterial,
    "cap",
  );
  cap.setTranslation([0, -bodyHeight / 2 - 0.07, 0]);
  rootNode.addChild(cap);

  const aspect = 561 / 1024;
  const labelHeight = bodyHeight * 0.88;
  const labelWidth = labelHeight * aspect;
  const label = addGeometryMesh(
    doc,
    buffer,
    new THREE.PlaneGeometry(labelWidth, labelHeight),
    labelMaterial,
    "label",
  );
  label.setTranslation([0, 0.04, 0.365]);
  rootNode.addChild(label);

  const io = new NodeIO();
  await io.write(outputPath, doc);
  console.log(`Generated ${outputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
