export type PolicyBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "note"; text: string };

export type PolicyPage = {
  slug: string;
  title: string;
  description: string;
  blocks: PolicyBlock[];
};

export const policies: PolicyPage[] = [
  {
    slug: "returns",
    title: "Return & Exchange Policy",
    description:
      "Delivery, returns, replacements, refunds, and cancellations for VEA Care orders.",
    blocks: [
      {
        type: "h3",
        text: "Shipping Policy",
      },
      {
        type: "p",
        text: "How does delivery work? Once you place an order, we ensure your lower limb care essentials reach you safely and quickly.",
      },
      {
        type: "ul",
        items: [
          "Quality Assurance: Every product is carefully inspected to ensure it is sealed, hygienic, and in perfect condition.",
          "Secure Packaging: Orders are packed in durable, recyclable packaging designed to protect creams, gels, and care products during transit.",
          "Dispatch Timeline: Orders are shipped within 1–3 working days (excluding Sundays and public holidays).",
        ],
      },
      {
        type: "p",
        text: "Estimated delivery timelines: Metro cities 2–4 working days · Tier 2 & 3 cities 4–7 working days · Remote areas 5–9 working days. If delivery is unsuccessful, our courier partner will contact you to reschedule.",
      },
      {
        type: "h3",
        text: "Order Tracking",
      },
      {
        type: "p",
        text: "Once your order is dispatched, you’ll receive a tracking link via SMS and/or email. Tracking becomes active within 24 hours of dispatch.",
      },
      {
        type: "h3",
        text: "Shipping Coverage & Charges",
      },
      {
        type: "ul",
        items: [
          "Delivery area: We ship across India",
          "Prepaid orders: Free shipping",
          "Cash on Delivery (COD): Available at select PIN codes for ₹79",
          "Promotional offers: Free COD on orders above ₹999 during select campaigns",
        ],
      },
      {
        type: "p",
        text: "If your location is not serviceable, our team will assist with alternatives or issue a refund.",
      },
      {
        type: "h3",
        text: "Returns & Replacements",
      },
      {
        type: "p",
        text: "Due to the hygienic nature of personal care products, we do not accept returns on opened or used items. We do offer replacements in the following cases: damaged or leaking product, defective product, or incorrect product delivered.",
      },
      {
        type: "h3",
        text: "How to Request a Replacement",
      },
      {
        type: "p",
        text: "Email us at help@veacare.com within 4 days of delivery with your order number, clear images of the product and packaging, and a brief description of the issue. Our team will respond within 2 business days. If approved, a reverse pickup will be arranged within 3–5 business days.",
      },
      {
        type: "h3",
        text: "Resolution Process",
      },
      {
        type: "ul",
        items: [
          "Approved cases: Replacement or store credit equal to product value",
          "Rejected cases: Product will be returned to you",
        ],
      },
      {
        type: "h3",
        text: "Refund Policy",
      },
      {
        type: "ul",
        items: [
          "We primarily offer store credits, valid for 12 months",
          "Refunds to the original payment method are only processed if a prepaid order cannot be fulfilled due to stock issues",
          "Refund timeline: 7–10 working days after approval",
        ],
      },
      {
        type: "h3",
        text: "Cancellation Policy",
      },
      {
        type: "ul",
        items: [
          "Prepaid orders: Can be cancelled within 12 hours of placing the order, if not shipped. Refunds are issued as store credit unless otherwise requested.",
          "COD orders: Can only be cancelled before dispatch",
        ],
      },
      {
        type: "note",
        text: "VEA Care reserves the right to decline requests that do not meet policy criteria. All decisions by our customer experience team are final. Need help? Reach us at help@veacare.com.",
      },
    ],
  },
  {
    slug: "privacy",
    title: "Privacy & Cookie Policy",
    description:
      "How Wellchi Biotech Private Limited collects, uses, and protects your personal information on veacare.com.",
    blocks: [
      {
        type: "p",
        text: "This Privacy Policy explains how Wellchi Biotech Private Limited (“VEA,” “we,” “us,” or “our”) collects, uses, and protects your personal information when you visit or make a purchase from www.veacare.com (“Site”). By using our Site, you agree to the practices described below.",
      },
      {
        type: "h3",
        text: "1. Information We Collect",
      },
      {
        type: "p",
        text: "1.1 Device Information — When you browse our Site, we automatically collect certain technical data, including IP address, browser type, and time zone; device type and operating system; pages viewed, time spent, and referring URLs; cookies and on-site interaction data.",
      },
      {
        type: "ul",
        items: [
          "Cookies: Small files stored on your device to enhance browsing experience",
          "Log Files: Track activity and diagnose issues",
          "Pixels/Web Beacons: Measure engagement and marketing performance",
        ],
      },
      {
        type: "p",
        text: "You can manage or disable cookies via your browser settings.",
      },
      {
        type: "p",
        text: "1.2 Order Information — When you place or attempt an order, we collect name, billing and shipping address; email address and phone number; payment details (processed securely; we do not store full card details); and order details including products, value, and applied discounts. Device Information + Order Information = “Personal Information.”",
      },
      {
        type: "h3",
        text: "2. How We Use Your Information",
      },
      {
        type: "ul",
        items: [
          "Process orders: payments, shipping, confirmations",
          "Customer support: handle queries, returns, and complaints",
          "Improve experience: analyse usage and optimise website performance",
          "Fraud prevention: detect and prevent suspicious activity",
          "Marketing (with consent): share relevant offers and updates — you can opt out anytime",
        ],
      },
      {
        type: "h3",
        text: "3. Sharing Your Information",
      },
      {
        type: "p",
        text: "We only share your data with trusted partners required to operate our business: Shopify (e-commerce), Razorpay / PayU (payments), and Google Analytics / Meta Pixel (analytics & marketing). These partners are contractually obligated to protect your data. We may also disclose information to comply with legal obligations, enforce our Terms of Service, or protect our rights, users, or business.",
      },
      {
        type: "h3",
        text: "4. Behavioural Advertising",
      },
      {
        type: "p",
        text: "We use cookies and pixels to show you relevant ads based on your browsing behavior. You can opt out via Google Ads settings and Facebook Ads settings.",
      },
      {
        type: "h3",
        text: "5. Do Not Track",
      },
      {
        type: "p",
        text: "Our Site currently does not respond to “Do Not Track” browser signals.",
      },
      {
        type: "h3",
        text: "6. Your Rights",
      },
      {
        type: "ul",
        items: [
          "Access the personal data we hold about you",
          "Request correction or deletion",
          "Withdraw consent for marketing at any time",
        ],
      },
      {
        type: "p",
        text: "To exercise your rights, contact us at help@veacare.com.",
      },
      {
        type: "h3",
        text: "7. Data Retention",
      },
      {
        type: "ul",
        items: [
          "Order data is retained as required for legal and tax purposes",
          "Analytics data is retained for up to 26 months",
          "You may request deletion of your data after mandatory retention periods",
        ],
      },
      {
        type: "h3",
        text: "8. Minors",
      },
      {
        type: "p",
        text: "Our Site is not intended for individuals under 18 years of age. We do not knowingly collect data from minors.",
      },
      {
        type: "h3",
        text: "9. Data Security",
      },
      {
        type: "p",
        text: "We implement industry-standard security measures, including ISO/IEC 27001-aligned practices, to safeguard your data from unauthorized access, misuse, or disclosure.",
      },
      {
        type: "h3",
        text: "10. Policy Updates",
      },
      {
        type: "p",
        text: "We may update this Privacy Policy periodically. Changes will be reflected with an updated date. Continued use of the Site indicates acceptance of these changes.",
      },
      {
        type: "h3",
        text: "11. Contact & Grievance Officer",
      },
      {
        type: "p",
        text: "Grievance Officer: Atiq Bagwan · Email: help@veacare.com · Phone: +91 9021605764 · Address: Wellchi Biotech Private Limited, Shop No. L-003, Ground Floor, Silver Classic Building, Narhe Road, Narhe, Pune – 411041, Maharashtra, India. We aim to acknowledge complaints within 48 hours and resolve them within 30 days.",
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms & Conditions",
    description:
      "Terms governing use of veacare.com and purchase of products from Wellchi Biotech Private Limited.",
    blocks: [
      {
        type: "p",
        text: "These Terms & Conditions (“Terms”) govern your use of www.veacare.com (“Site”) and any purchase of products from VEA. The Site is operated by Wellchi Biotech Private Limited (CIN: U21001PN2023PTC219579) (“VEA,” “we,” “us,” or “our”), with its registered office at Shop No. L-003, Ground Floor, Silver Classic Building, Narhe Road, Narhe, Pune – 411041, Maharashtra, India.",
      },
      {
        type: "p",
        text: "By accessing, browsing, or purchasing from this Site, you (“User,” “you,” or “your”) agree to be bound by these Terms, along with our Delivery & Return Policy and Privacy Policy. If you do not agree, please discontinue use of the Site.",
      },
      {
        type: "h3",
        text: "1. Eligibility & Acceptance",
      },
      {
        type: "ul",
        items: [
          "You must be 18 years or older to use this Site or transact independently",
          "By using the Site, you agree to comply with these Terms and all applicable laws",
        ],
      },
      {
        type: "h3",
        text: "2. Pricing & Payments",
      },
      {
        type: "ul",
        items: [
          "All prices are listed in INR (₹) and are inclusive of applicable taxes (GST)",
          "Prices are subject to change without prior notice; final pricing is reflected at checkout",
          "We accept payments via credit/debit cards, UPI, Net Banking, and wallets",
          "Cash on Delivery (COD) is available for select PIN codes with applicable charges",
        ],
      },
      {
        type: "h3",
        text: "3. Electronic Communication",
      },
      {
        type: "p",
        text: "By using the Site or contacting us, you consent to receive communications via email, SMS, WhatsApp, and push notifications. These communications are considered legally valid and binding.",
      },
      {
        type: "h3",
        text: "4. Use of the Site",
      },
      {
        type: "p",
        text: "You are granted a limited, non-exclusive, non-transferable license to access and use the Site for personal purposes only. You may not use the Site for commercial resale; copy, reproduce, or exploit content without permission; use data mining, scraping, or extraction tools; or misuse product listings, pricing, or content.",
      },
      {
        type: "h3",
        text: "5. Intellectual Property",
      },
      {
        type: "p",
        text: "All content on this Site—including text, images, logos, graphics, and software—is the property of VEA and is protected under applicable intellectual property laws. You may not copy, distribute, or use any content without prior written consent.",
      },
      {
        type: "h3",
        text: "6. User Content & Reviews",
      },
      {
        type: "p",
        text: "Users may post reviews and feedback provided the content is not illegal, abusive, defamatory, or misleading and does not infringe on any rights. By submitting content, you grant VEA a royalty-free, perpetual, and worldwide license to use, reproduce, and display such content. VEA reserves the right to remove or moderate content at its discretion.",
      },
      {
        type: "h3",
        text: "7–10. Accuracy, Modifications, Products & Orders",
      },
      {
        type: "ul",
        items: [
          "Errors, inaccuracies, or omissions may occur; we may correct or update information at any time",
          "We may modify or discontinue any product or service without prior notice",
          "Certain products may be available exclusively online and in limited quantities; images are for representation",
          "We reserve the right to refuse or cancel any order; you agree to provide accurate purchase information",
        ],
      },
      {
        type: "h3",
        text: "11–15. Third Parties, Prohibited Uses, Warranties, Liability & Indemnity",
      },
      {
        type: "ul",
        items: [
          "Third-party tools or links are provided “as is”; VEA is not responsible for third-party platforms",
          "You may not use the Site for unlawful, fraudulent, or harmful activities",
          "The Site and products are provided “as is” and “as available” without warranties of any kind",
          "To the fullest extent permitted by law, VEA is not liable for indirect, incidental, or consequential damages",
          "You agree to indemnify VEA from claims arising from your breach of these Terms or applicable laws",
        ],
      },
      {
        type: "h3",
        text: "16–19. Severability, Termination, Governing Law & Changes",
      },
      {
        type: "ul",
        items: [
          "If any provision is invalid, the remaining provisions remain in effect",
          "We may suspend or terminate access if you violate these Terms",
          "These Terms are governed by the laws of India; disputes fall under courts in Pune, Maharashtra",
          "We may update these Terms at any time; continued use constitutes acceptance",
        ],
      },
      {
        type: "h3",
        text: "20. Contact & Grievance Officer",
      },
      {
        type: "p",
        text: "Grievance Officer: Pawan Chaudhary (Sales & Operations Head) · Email: help@veacare.com · Phone: +91 9021605764 · Address: Wellchi Biotech Private Limited, Shop No. L-003, Ground Floor, Silver Classic Building, Narhe Road, Narhe, Pune – 411041, Maharashtra, India. We aim to acknowledge complaints within 48 hours and resolve them within 30 days.",
      },
      {
        type: "note",
        text: "VEA Care Promise — Focused. Functional. Fast Relief. Thank you for trusting VEA with your lower limb care.",
      },
    ],
  },
  {
    slug: "shipping",
    title: "Shipping Policy",
    description:
      "Order processing, delivery timelines, charges, tracking, and packaging for VEA Care shipments across India.",
    blocks: [
      {
        type: "p",
        text: "At VEA Care, we ensure your products are delivered safely, hygienically, and on time.",
      },
      {
        type: "h3",
        text: "1. Order Processing",
      },
      {
        type: "ul",
        items: [
          "All orders are processed within 1–3 working days (excluding Sundays and public holidays)",
          "Every order undergoes quality checks to ensure it is sealed, intact, and ready for use",
          "Once dispatched, orders cannot be modified or cancelled",
        ],
      },
      {
        type: "h3",
        text: "2. Delivery Timelines",
      },
      {
        type: "ul",
        items: [
          "Metro cities: 2–4 working days from dispatch",
          "Tier 2 & 3 cities: 4–7 working days",
          "Remote areas: 5–9 working days",
        ],
      },
      {
        type: "p",
        text: "Delivery timelines may vary due to unforeseen logistics or regional constraints.",
      },
      {
        type: "h3",
        text: "3. Shipping Coverage",
      },
      {
        type: "p",
        text: "We currently ship across India. If your PIN code is not serviceable, our team will notify you and initiate a full refund (for prepaid orders).",
      },
      {
        type: "h3",
        text: "4. Shipping Charges",
      },
      {
        type: "ul",
        items: [
          "Prepaid orders: Free shipping",
          "Cash on Delivery (COD): ₹79 (available for select PIN codes)",
          "Promotional offers: Free COD on eligible orders as applicable",
        ],
      },
      {
        type: "h3",
        text: "5. Order Tracking",
      },
      {
        type: "p",
        text: "Tracking details are shared via SMS and/or email after dispatch. Tracking becomes active within 24 hours.",
      },
      {
        type: "h3",
        text: "6. Delivery Attempts",
      },
      {
        type: "p",
        text: "Our courier partners will attempt delivery multiple times. If unreachable, they may contact you to reschedule. Failure to accept delivery may result in order cancellation (especially for COD orders).",
      },
      {
        type: "h3",
        text: "7. Packaging & Safety",
      },
      {
        type: "ul",
        items: [
          "Orders are packed in secure, hygienic, and recyclable packaging",
          "Designed to maintain product integrity during transit",
          "We recommend checking the package condition at the time of delivery",
        ],
      },
      {
        type: "h3",
        text: "8. Delays & Exceptions",
      },
      {
        type: "p",
        text: "Delivery may be delayed due to weather conditions or natural disruptions, public holidays or strikes, or remote location accessibility. In such cases, we will keep you informed.",
      },
      {
        type: "h3",
        text: "9. Important Notes",
      },
      {
        type: "ul",
        items: [
          "VEA Care reserves the right to refuse or cancel orders due to stock unavailability or operational constraints",
          "Incorrect or incomplete address details may lead to delivery delays or failure",
        ],
      },
      {
        type: "note",
        text: "Need help? Email help@veacare.com. VEA Care Promise — Focused. Functional. Fast Relief. Delivered with care—because your recovery matters.",
      },
    ],
  },
];

export function getPolicy(slug: string) {
  return policies.find((p) => p.slug === slug);
}
