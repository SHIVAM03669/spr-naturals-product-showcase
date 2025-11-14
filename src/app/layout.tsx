import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import Script from "next/script";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const baseUrl = "https://sprnaturals.in";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "SPR Naturals | Eco-Friendly Tableware Exporter India",
    template: "%s | SPR Naturals",
  },
  description: "Premium eco-friendly tableware exporter from India. Areca leaf plates, sugarcane bagasse plates, paper cups, biodegradable packaging. Sustainable food-service products worldwide.",
  keywords: [
    "eco-friendly tableware exporter",
    "areca leaf plates",
    "biodegradable packaging India",
    "sugarcane bagasse plates",
    "paper cups and straws",
    "wooden cutlery exporter",
    "compostable tableware",
    "sustainable packaging India",
    "eco-friendly food packaging",
    "natural tableware exporter",
  ],
  authors: [{ name: "SPR Naturals" }],
  creator: "SPR Naturals",
  publisher: "SPR Naturals",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "SPR Naturals",
    title: "SPR Naturals | Eco-Friendly Tableware Exporter India",
    description: "Premium eco-friendly tableware exporter from India. Areca leaf plates, sugarcane bagasse plates, paper cups, biodegradable packaging.",
    images: [
      {
        url: `${baseUrl}/logo2.0.png`,
        width: 1200,
        height: 630,
        alt: "SPR Naturals - Eco-Friendly Tableware Exporter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SPR Naturals | Eco-Friendly Tableware Exporter India",
    description: "Premium eco-friendly tableware exporter from India. Areca leaf plates, sugarcane bagasse plates, paper cups, biodegradable packaging.",
    images: [`${baseUrl}/logo2.0.png`],
    creator: "@Exporter_Indian",
  },
  icons: {
    icon: [
      { url: "/logo2.0.png", sizes: "32x32", type: "image/png" },
      { url: "/logo2.0.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/logo2.0.png",
    apple: [
      { url: "/logo2.0.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: baseUrl,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="antialiased">
        <GoogleAnalytics />
        <SmoothScrollProvider>
          
          <Script
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
            strategy="afterInteractive"
            data-target-origin="*"
            data-message-type="ROUTE_CHANGE"
            data-include-search-params="true"
            data-only-in-iframe="true"
            data-debug="true"
            data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
          />
          {children}
          <VisualEditsMessenger />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
