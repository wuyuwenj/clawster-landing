import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clawster.pet"),
  title: "Clawster - AI Desktop Pet for macOS | Screen-Aware Assistant",
  description:
    "Clawster is a free AI desktop pet for macOS. A cute lobster that watches your screen, helps with coding, answers questions, and keeps you company. Download now.",
  keywords: [
    "Clawster",
    "AI desktop pet",
    "macOS AI assistant",
    "screen-aware AI",
    "desktop companion",
    "OpenClaw",
    "developer tools",
    "productivity app",
    "virtual pet",
    "AI lobster",
    "context-aware assistant",
    "desktop pet app",
    "AI companion",
    "free AI assistant",
  ],
  authors: [{ name: "wuyuwenj" }],
  creator: "wuyuwenj",
  publisher: "Clawster",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://clawster.pet",
  },
  openGraph: {
    title: "Clawster - AI Desktop Pet for macOS",
    description:
      "A cute AI lobster that lives on your desktop. Watches your screen, helps with coding, answers questions. Free and open-source.",
    type: "website",
    url: "https://clawster.pet",
    siteName: "Clawster",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Clawster - AI Desktop Pet for macOS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clawster - AI Desktop Pet for macOS",
    description:
      "A cute AI lobster that lives on your desktop. Watches your screen, helps with coding, answers questions. Free and open-source.",
    images: ["/og-image.png"],
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://clawster.pet/#website",
      url: "https://clawster.pet",
      name: "Clawster",
      description: "AI Desktop Pet for macOS - Screen-Aware Assistant",
      publisher: {
        "@id": "https://clawster.pet/#organization",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://clawster.pet/#organization",
      name: "Clawster",
      url: "https://clawster.pet",
      logo: {
        "@type": "ImageObject",
        url: "https://clawster.pet/og-image.png",
      },
      sameAs: [
        "https://github.com/wuyuwenj/clawster",
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://clawster.pet/#software",
      name: "Clawster",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "macOS",
      description:
        "A free AI desktop pet for macOS. A cute lobster that watches your screen, helps with coding, answers questions, and keeps you company.",
      url: "https://clawster.pet",
      downloadUrl: "https://github.com/wuyuwenj/clawster/releases/download/v0.1.3/Clawster-0.1.3-arm64.dmg",
      screenshot: "https://clawster.pet/og-image.png",
      softwareVersion: "0.1.3",
      author: {
        "@type": "Person",
        name: "wuyuwenj",
        url: "https://github.com/wuyuwenj",
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      featureList: [
        "Screen-aware AI assistance",
        "Quick chat with Cmd+Shift+Space",
        "Screenshot questions with Cmd+Shift+/",
        "12 animated mood states",
        "Privacy-first local processing",
        "Customizable personality",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://clawster.pet/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Clawster?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Clawster is a free, open-source AI desktop pet for macOS. It's a cute lobster that lives on your screen, watches what you're doing, and provides context-aware assistance.",
          },
        },
        {
          "@type": "Question",
          name: "Is Clawster free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Clawster is completely free and open-source under the MIT license.",
          },
        },
        {
          "@type": "Question",
          name: "Does Clawster send my data to the cloud?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Clawster uses OpenClaw which runs locally. Your screen captures and conversations stay on your machine.",
          },
        },
        {
          "@type": "Question",
          name: "What platforms does Clawster support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Currently macOS only (Apple Silicon). Windows and Linux support may come in the future.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
