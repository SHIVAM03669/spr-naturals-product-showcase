import type { Metadata } from "next";
import { getCatalogProductById } from "@/lib/utils";
import ProductDetailPageClient from "./ProductDetailPageClient";

const baseUrl = "https://sprnaturals.in";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = getCatalogProductById(params.id);

  if (!product) {
    return {
      title: "Product Not Found | SPR Naturals",
      description: "The requested product could not be found.",
    };
  }

  const title = `${product.name} | Eco-Friendly ${product.categoryName} | SPR Naturals`;
  const description = `${product.description} Premium ${product.categoryName.toLowerCase()} from India. Export quality, biodegradable, and sustainable.`;

  return {
    title: title.length > 60 ? `${product.name} | SPR Naturals` : title,
    description: description.length > 160 ? description.substring(0, 157) + "..." : description,
    alternates: {
      canonical: `${baseUrl}/products/${product.id}`,
    },
    openGraph: {
      title: `${product.name} | SPR Naturals`,
      description: product.description,
      url: `${baseUrl}/products/${product.id}`,
      images: [
        {
          url: `${baseUrl}${product.image}`,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
      type: "product",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | SPR Naturals`,
      description: product.description,
      images: [`${baseUrl}${product.image}`],
    },
  };
}

export default function ProductPageWrapper({ params }: { params: { id: string } }) {
  return <ProductDetailPageClient productId={params.id} />;
}

