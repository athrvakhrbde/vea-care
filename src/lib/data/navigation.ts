export const TRACK_ORDER_URL = "https://www.shiprocket.in/shipment-tracking/";

export const navLinks = [
  {
    label: "Shop",
    href: "/shop",
    children: [
      { label: "Varicose Veins Cream", href: "/shop/varicose-veins-relief-cream" },
      { label: "Diabetic Foot Cream", href: "/shop/diabetic-foot-cream" },
    ],
  },
  { label: "Why VEA", href: "/why-vea" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = {
  shop: [
    { label: "Varicose Veins Relief Cream", href: "/shop/varicose-veins-relief-cream" },
    { label: "Diabetic Foot Cream", href: "/shop/diabetic-foot-cream" },
  ],
  about: [
    { label: "About Us", href: "/about" },
    { label: "Blogs", href: "/blog" },
    { label: "Return & Exchange Policy", href: "/policies/returns" },
    { label: "Privacy & Cookie Policy", href: "/policies/privacy" },
    { label: "Terms & Conditions", href: "/policies/terms" },
    { label: "Shipping Policy", href: "/policies/shipping" },
  ],
  help: [
    { label: "Contact us", href: "/contact" },
    { label: "Track your order", href: TRACK_ORDER_URL, external: true },
    { label: "FAQs", href: "/contact#faq" },
  ],
} as const;
