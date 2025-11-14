import { MetadataRoute } from 'next';
import { catalogCategories, catalogProducts } from '@/lib/utils';

const baseUrl = 'https://sprnaturals.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const categories = catalogCategories.map((category) => ({
    url: `${baseUrl}/products/category/${category.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const products = catalogProducts.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...categories,
    ...products,
  ];
}

