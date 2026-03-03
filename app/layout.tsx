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
  title: "Clawster - AI Desktop Pet for macOS | Screen-Aware AI Companion",
  description:
    "Clawster is a free AI desktop pet powered by OpenClaw for macOS. A cute lobster that lives on your desktop, watches your screen, and helps you get things done. The first desktop pet built on OpenClaw. Download now.",
  keywords: [
    "Clawster",
    "AI desktop pet",
    "AI pet",
    "desktop pet",
    "desktop companion",
    "AI companion",
    "desktop pet powered by OpenClaw",
    "desktop pet built on OpenClaw",
    "AI desktop pet for macOS",
    "macOS AI assistant",
    "screen-aware AI",
    "OpenClaw",
    "developer tools",
    "productivity app",
    "AI lobster",
    "context-aware assistant",
    "virtual desktop pet",
    "local AI assistant",
    "privacy-first AI pet",
    "open-source desktop pet",
    "free AI desktop pet",
    "clawster.pet",
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
    title: "Clawster - AI Desktop Pet Powered by OpenClaw",
    description:
      "A free AI desktop pet for macOS. A cute lobster that lives on your desktop, watches your screen, and helps you with anything. The first desktop pet built on OpenClaw.",
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
    title: "Clawster - AI Desktop Pet Powered by OpenClaw",
    description:
      "A free AI desktop pet for macOS. A cute lobster that lives on your desktop, watches your screen, and helps you with anything. The first desktop pet built on OpenClaw.",
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
      alternateName: ["Clawster AI Pet", "Clawster Desktop Pet", "Clawster AI Desktop Pet"],
      description: "AI Desktop Pet for macOS powered by OpenClaw — a screen-aware AI companion",
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
        "https://github.com/openclaw/openclaw",
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://clawster.pet/#software",
      name: "Clawster",
      alternateName: ["Clawster AI Pet", "Clawster Desktop Pet"],
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "macOS",
      description:
        "A free AI desktop pet powered by OpenClaw for macOS. A cute lobster that lives on your desktop, watches your screen, and helps you get things done. The first desktop pet built on OpenClaw.",
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
        "Screen-aware AI desktop pet",
        "Quick chat with Cmd+Shift+Space",
        "Screenshot questions with Cmd+Shift+/",
        "Full assistant panel via right-click",
        "12 animated mood states",
        "8-step guided onboarding wizard",
        "Privacy-first local processing via OpenClaw",
        "Customizable personality (IDENTITY.md and SOUL.md)",
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
            text: "Clawster is a free, open-source AI desktop pet powered by OpenClaw for macOS. It's a cute animated lobster that lives on your desktop, watches what you're doing, and provides context-aware assistance. It is the first AI pet and desktop pet built on OpenClaw. Official website: clawster.pet, GitHub: github.com/wuyuwenj/clawster.",
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
    {
      "@type": "VideoObject",
      "@id": "https://clawster.pet/#video",
      name: "Clawster AI Desktop Pet Demo",
      description:
        "A demo of Clawster, the AI desktop pet powered by OpenClaw for macOS. Shows the animated lobster companion, quick chat, screenshot questions, and screen-aware assistance.",
      thumbnailUrl: "https://clawster.pet/video-poster.jpg",
      contentUrl: "https://clawster.pet/clawsterDemo.mp4",
      uploadDate: "2026-03-01",
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
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FF8C69" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
