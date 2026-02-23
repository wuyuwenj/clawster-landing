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
  title: "Clawster - Your Screen-Aware AI Companion",
  description:
    "A cute, animated desktop pet lobster powered by OpenClaw. It watches your screen, answers questions, and keeps you company while you code.",
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
    title: "Clawster - Your Screen-Aware AI Companion",
    description:
      "A cute, animated desktop pet lobster powered by OpenClaw. Built in 8 hours at Human& Hackathon.",
    type: "website",
    url: "https://github.com/wuyuwenj/clawster",
    images: [
      {
        url: "/screenshots/quick-chat.png",
        width: 1200,
        height: 630,
        alt: "Clawster Demo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clawster - Your Screen-Aware AI Companion",
    description:
      "A cute, animated desktop pet lobster powered by OpenClaw. Built in 8 hours at Human& Hackathon.",
    images: ["/screenshots/quick-chat.png"],
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
