import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyPhone } from "@/components/layout/StickyPhone";
import { BackToTop } from "@/components/layout/BackToTop";
import { ChatWidget } from "@/components/shared/ChatWidget";
import { LocalBusinessJsonLd } from "@/components/shared/JsonLd";
import { company } from "@/data/company";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${company.name} | Handyman Services — Westchester, Bronx, Rockland, CT`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600,700,900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=erode@400,500,600&display=swap"
        />
        <LocalBusinessJsonLd />
      </head>
      <body
        className="font-body antialiased bg-white text-neutral-900"
        style={{
          fontFamily:
            "'Erode', var(--font-body), system-ui, sans-serif",
        }}
      >
        <style
          dangerouslySetInnerHTML={{
            __html: `
              h1, h2, h3, h4, h5, h6,
              .font-heading {
                font-family: 'Switzer', var(--font-heading), system-ui, sans-serif;
              }
            `,
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent-500 focus:text-white focus:px-4 focus:py-2 focus:text-sm"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyPhone phone={company.phone} />
        <BackToTop />
        <ChatWidget />
      </body>
    </html>
  );
}
