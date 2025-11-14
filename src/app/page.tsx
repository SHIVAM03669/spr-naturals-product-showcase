import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

const baseUrl = "https://sprnaturals.in";

export const metadata: Metadata = {
  title: "Eco-Friendly Tableware Exporter | Areca Leaf Plates India",
  description: "SPR Naturals - Leading exporter of eco-friendly tableware from India. Areca leaf plates, sugarcane bagasse plates, paper cups, biodegradable packaging. Sustainable food-service products worldwide.",
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "SPR Naturals | Eco-Friendly Tableware Exporter India",
    description: "Leading exporter of eco-friendly tableware from India. Areca leaf plates, sugarcane bagasse plates, paper cups, biodegradable packaging.",
    url: baseUrl,
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
    description: "Leading exporter of eco-friendly tableware from India. Areca leaf plates, sugarcane bagasse plates, paper cups.",
  },
};

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SPR Naturals",
    alternateName: "India True Global Exims",
    url: baseUrl,
    logo: `${baseUrl}/logo2.0.png`,
    description: "Merchant exporter of premium eco-friendly tableware and packaging products from Nagpur, India. Specializing in areca leaf plates, sugarcane bagasse plates, paper cups, and biodegradable packaging solutions.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nagpur",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+917447755042",
      contactType: "Customer Service",
      email: "info@sprnaturals.in",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      "https://x.com/Exporter_Indian",
      "https://www.instagram.com/exporter_indian1983/",
      "https://www.facebook.com/exporterindian1983",
      "https://www.linkedin.com/in/india-true-global-exims-4699a6378/",
    ],
    areaServed: "Worldwide",
    knowsAbout: [
      "Eco-friendly tableware",
      "Biodegradable packaging",
      "Areca leaf plates",
      "Sugarcane bagasse products",
      "Paper cups and straws",
      "Wooden cutlery",
      "Sustainable food packaging",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <HomePage />
    </>
  );
}