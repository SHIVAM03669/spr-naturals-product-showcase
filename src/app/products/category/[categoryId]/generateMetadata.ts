import type { Metadata } from "next";
import { getCategoryById } from "@/lib/utils";

const baseUrl = "https://sprnaturals.in";

export async function generateMetadata({ params }: { params: { categoryId: string } }): Promise<Metadata> {
  const category = getCategoryById(params.categoryId);

  if (!category) {
    return {
      title: "Category Not Found | SPR Naturals",
      description: "The requested category could not be found.",
    };
  }

  const title = `${category.name} | Eco-Friendly ${category.name} Products | SPR Naturals`;
  const description = category.blurb 
    ? `${category.blurb} Browse our collection of ${category.name.toLowerCase()} products. Export quality, biodegradable, and sustainable solutions from India.`
    : `Premium ${category.name.toLowerCase()} products from SPR Naturals. Export quality, biodegradable, and sustainable solutions from India.`;

  return {
    title: title.length > 60 ? `${category.name} | SPR Naturals` : title,
    description: description.length > 160 ? description.substring(0, 157) + "..." : description,
    alternates: {
      canonical: `${baseUrl}/products/category/${category.id}`,
    },
    openGraph: {
      title: `${category.name} | SPR Naturals`,
      description: category.blurb || `Premium ${category.name.toLowerCase()} products from India.`,
      url: `${baseUrl}/products/category/${category.id}`,
      images: category.image ? [
        {
          url: `${baseUrl}${category.image}`,
          width: 1200,
          height: 630,
          alt: category.name,
        },
      ] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.name} | SPR Naturals`,
      description: category.blurb || `Premium ${category.name.toLowerCase()} products from India.`,
    },
  };
}

