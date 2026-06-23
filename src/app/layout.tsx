import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "VEA — Proactive Lower-Limb Care",
    template: "%s | VEA",
  },
  description:
    "Clinical-grade lower-limb care for circulation, recovery, and skin health.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} h-full`}>
      <body className="page-bg flex min-h-dvh flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
