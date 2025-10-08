import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Catalog data for categories and products
export type CatalogProduct = {
  id: string
  name: string
  categoryId: string
  categoryName: string
  description: string
  image: string
}

export type CatalogCategory = {
  id: string
  name: string
  hero?: string
  blurb?: string
  image?: string
}

export const catalogCategories: CatalogCategory[] = [
  { id: 'natural-tableware', name: 'Natural Tableware', blurb: 'Areca leaf plates and bowls: sturdy, compostable, elegant.', image: '/table.jpg' },
  { id: 'sugarcane-fiber-tableware', name: 'Sugarcane Fiber Tableware', blurb: 'Bagasse plates and trays from sugarcane fiber.', image: '/sugarcane.jpg' },
  { id: 'paper-drinkware', name: 'Paper Drinkware', blurb: 'Paper cups and straws for eco-friendly sipping.', image: '/drinkware.jpg' },
  { id: 'paper-packaging', name: 'Paper Packaging', blurb: 'Durable kraft paper bags for carry and retail.', image: '/paper.jpg' },
  { id: 'food-packaging', name: 'Food Packaging', blurb: 'Secure, food-safe boxes and containers.', image: '/food.jpg' },
  { id: 'aluminium-food-packaging', name: 'Aluminium / Food Packaging', blurb: 'Aluminium foil and containers for heat and storage.', image: '/aluminium.jpg' },
  { id: 'eco-friendly-cutlery', name: 'Eco-Friendly Cutlery', blurb: 'Wooden spoons, forks, and knives.', image: '/cutlary.jpg' },
]

export const catalogProducts: CatalogProduct[] = [
  {
    id: 'areca-leaf-plates-bowls',
    name: 'Areca Leaf Plates / Bowls',
    categoryId: 'natural-tableware',
    categoryName: 'Natural Tableware',
    description: 'Compostable, single-use plates and bowls made from areca palm leaves.',
    image: '/window.svg',
  },
  {
    id: 'bagasse-plates-trays',
    name: 'Bagasse Plates / Trays',
    categoryId: 'sugarcane-fiber-tableware',
    categoryName: 'Sugarcane Fiber Tableware',
    description: 'Sturdy plates/trays made from sugarcane fiber (bagasse).',
    image: '/window.svg',
  },
  {
    id: 'paper-cups-100-200ml',
    name: 'Paper Cups (100–200 ml)',
    categoryId: 'paper-drinkware',
    categoryName: 'Paper Drinkware',
    description: 'Food-safe paper cups ideal for hot and cold beverages.',
    image: '/window.svg',
  },
  {
    id: 'paper-straws',
    name: 'Paper Straws',
    categoryId: 'paper-drinkware',
    categoryName: 'Paper Drinkware / Straws',
    description: 'Eco-friendly paper straws suitable for various drink sizes.',
    image: '/window.svg',
  },
  {
    id: 'paper-bags-kraft',
    name: 'Paper Bags (Kraft)',
    categoryId: 'paper-packaging',
    categoryName: 'Paper Packaging',
    description: 'Recyclable kraft paper bags with handles for retail and delivery.',
    image: '/window.svg',
  },
  {
    id: 'meal-boxes-paper',
    name: 'Meal Boxes (Paper)',
    categoryId: 'food-packaging',
    categoryName: 'Food Packaging',
    description: 'Leak-resistant paper meal boxes for takeout and catering.',
    image: '/window.svg',
  },
  {
    id: 'aluminium-foil-containers',
    name: 'Aluminium Foil / Containers',
    categoryId: 'aluminium-food-packaging',
    categoryName: 'Aluminium / Food Packaging',
    description: 'Heat-safe aluminium foil sheets and containers for storage and baking.',
    image: '/window.svg',
  },
  {
    id: 'wooden-cutlery',
    name: 'Wooden Cutlery (Spoon, Fork, Knife)',
    categoryId: 'eco-friendly-cutlery',
    categoryName: 'Eco-Friendly Cutlery',
    description: 'Biodegradable wooden cutlery sets for events and takeaway.',
    image: '/window.svg',
  },
]

export function getProductsByCategoryId(categoryId: string): CatalogProduct[] {
  return catalogProducts.filter(p => p.categoryId === categoryId)
}

export function getCategoryById(categoryId: string): CatalogCategory | undefined {
  return catalogCategories.find(c => c.id === categoryId)
}

export function getAllCategoriesWithCounts(): Array<CatalogCategory & { count: number }> {
  return catalogCategories.map(c => ({ ...c, count: getProductsByCategoryId(c.id).length }))
}

export function getCatalogProductById(productId: string): CatalogProduct | undefined {
  return catalogProducts.find(p => p.id === productId)
}