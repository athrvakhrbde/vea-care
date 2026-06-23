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
    { label: "Why VEA", href: "/why-vea" },
    { label: "Blog", href: "/blog" },
  ],
  help: [
    { label: "Contact Us", href: "/contact" },
    { label: "Track Order", href: "/contact" },
    { label: "FAQs", href: "/contact#faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Shipping Policy", href: "#" },
    { label: "Returns & Exchange", href: "#" },
  ],
} as const;
