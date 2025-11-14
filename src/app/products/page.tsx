import type { Metadata } from "next";
import ProductsCategoriesPageClient from "./ProductsCategoriesPageClient";

const baseUrl = "https://sprnaturals.in";

export const metadata: Metadata = {
  title: "Eco-Friendly Product Categories | SPR Naturals",
  description: "Browse our eco-friendly product categories: areca leaf tableware, sugarcane bagasse plates, paper cups, biodegradable packaging, wooden cutlery, and more sustainable solutions.",
  alternates: {
    canonical: `${baseUrl}/products`,
  },
  openGraph: {
    title: "Eco-Friendly Product Categories | SPR Naturals",
    description: "Browse our eco-friendly product categories: areca leaf tableware, sugarcane bagasse plates, paper cups, biodegradable packaging.",
    url: `${baseUrl}/products`,
  },
};

export default function ProductsCategoriesPage() {
  return <ProductsCategoriesPageClient />;
}


