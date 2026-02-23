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
  title: "Meet Clawster - The Cute AI Pet That Lives on Your Desktop",
  description:
    "Meet Clawster: an AI pet that watches your screen, checks live info, and craves your attention. It blinks, stretches, scuttles toward you, and helps you get things done. Runs 100% locally.",
  keywords: [
    "AI",
    "desktop pet",
    "OpenClaw",
    "screen-aware",
    "developer tools",
    "productivity",
    "lobster",
  ],
  authors: [{ name: "wuyuwenj" }],
  openGraph: {
    title: "Meet Clawster - The Cute AI Pet That Lives on Your Desktop",
    description:
      "Meet Clawster: an AI pet that watches your screen, checks live info, and craves your attention. It blinks, stretches, scuttles toward you, and helps you get things done. Runs 100% locally.",
    type: "website",
    url: "https://clawster.pet",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Meet Clawster - Your Desktop AI Companion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Clawster - The Cute AI Pet That Lives on Your Desktop",
    description:
      "Meet Clawster: an AI pet that watches your screen, checks live info, and craves your attention. It blinks, stretches, scuttles toward you, and helps you get things done. Runs 100% locally.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
