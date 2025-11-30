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
  { id: 'natural-tableware', name: 'Natural Tableware', blurb: 'Areca leaf plates and bowls: sturdy, compostable, elegant.', image: '/nt.png' },
  { id: 'sugarcane-fiber-tableware', name: 'Bagasse Basics', blurb: 'Bagasse plates and trays from sugarcane fiber.', image: '/st.jpeg' },
  { id: 'paper-drinkware', name: 'Paper Drinkware', blurb: 'Paper cups and straws for eco-friendly sipping.', image: '/pd.jpeg' },
  { id: 'paper-packaging', name: 'Paper Packaging', blurb: 'Durable kraft paper bags for carry and retail.', image: '/pp.png' },
  { id: 'food-packaging', name: 'Food Packaging', blurb: 'Secure, food-safe boxes and containers.', image: '/fp.png' },
  { id: 'eco-friendly-straw', name: 'Eco-Friendly Straw', blurb: 'Sustainable straws made from various eco-friendly materials.', image: '/straw.jpeg' },
  { id: 'eco-friendly-cutlery', name: 'Eco-Friendly Cutlery', blurb: 'Wooden spoons, forks, and knives.', image: '/cutlery.jpeg' },
  { id: 'clamshell', name: 'Clamshell', blurb: 'Eco-friendly clamshell containers for takeout and food service.', image: '/clamshell.png' },
  { id: 'superfoods', name: 'Superfoods', blurb: 'Organic superfoods and natural wellness products with high nutritional value.', image: '/superfoods.png' },
]

export const catalogProducts: CatalogProduct[] = [
  // Natural Tableware - Areca Leaf Products
  {
    id: 'areca-leaf-plates-small',
    name: 'Areca Leaf Plates (All Sizes Available)',
    categoryId: 'natural-tableware',
    categoryName: 'Natural Tableware',
    description: 'Compostable, single-use plates made from areca palm leaves. Available in multiple sizes - perfect for appetizers, main courses, and large portions.',
    image: '/nt6.png',
  },
  {
    id: 'areca-leaf-plates-medium',
    name: 'Areca Leaf Plates (Circular)',
    categoryId: 'natural-tableware',
    categoryName: 'Natural Tableware',
    description: 'Compostable, circular plates made from areca palm leaves. Perfect for elegant presentations and formal dining.',
    image: '/ntcircle.png',
  },
  {
    id: 'areca-leaf-plates-large',
    name: 'Areca Leaf Compartment Plates',
    categoryId: 'natural-tableware',
    categoryName: 'Natural Tableware',
    description: 'Compostable, compartment plates made from areca palm leaves. Perfect for meal separation and organized food presentation.',
    image: '/ntcompartment.png',
  },
  {
    id: 'areca-leaf-bowls',
    name: 'Areca Leaf Bowls',
    categoryId: 'natural-tableware',
    categoryName: 'Natural Tableware',
    description: 'Compostable, single-use bowls made from areca palm leaves. Perfect for soups, salads, and desserts.',
    image: '/ntbowls.png',
  },

  {
    id: 'areca-tray',
    name: 'Areca Tray',
    categoryId: 'natural-tableware',
    categoryName: 'Natural Tableware',
    description: 'Beautiful serving trays made from areca palm leaves. Perfect for appetizers and elegant presentations.',
    image: '/nttray.png',
  },
  {
    id: 'areca-leaf-heart-shaped',
    name: 'Areca Leaf Heart Shaped Plates',
    categoryId: 'natural-tableware',
    categoryName: 'Natural Tableware',
    description: 'Compostable, heart-shaped plates made from areca palm leaves. Perfect for romantic dinners, special occasions, and elegant presentations.',
    image: '/ntheart.png',
  },
  {
    id: 'areca-leaf-square',
    name: 'Areca Leaf Square Plates',
    categoryId: 'natural-tableware',
    categoryName: 'Natural Tableware',
    description: 'Compostable, square plates made from areca palm leaves. Perfect for modern presentations and contemporary dining experiences.',
    image: '/ntsquare.png',
  },
  {
    id: 'areca-leaf-rectangle',
    name: 'Areca Leaf Rectangle Plates',
    categoryId: 'natural-tableware',
    categoryName: 'Natural Tableware',
    description: 'Compostable, rectangular plates made from areca palm leaves. Perfect for serving appetizers, sushi, and elongated food items.',
    image: '/ntrectangle.png',
  },
  
  // Sugarcane Fiber Tableware - Bagasse Products
  {
    id: 'bagasse-plates-small',
    name: 'Bagasse Plates - Small (6 inch)',
    categoryId: 'sugarcane-fiber-tableware',
    categoryName: 'Sugarcane Fiber Tableware',
    description: 'Sturdy plates made from sugarcane fiber (bagasse). Microwave and freezer safe.',
    image: '/st6.png',
  },
  {
    id: 'bagasse-plates-medium',
    name: 'Bagasse Plates - Medium (8 inch)',
    categoryId: 'sugarcane-fiber-tableware',
    categoryName: 'Sugarcane Fiber Tableware',
    description: 'Sturdy plates made from sugarcane fiber (bagasse). Ideal for main courses.',
    image: '/st8.png',
  },
  {
    id: 'bagasse-plates-large',
    name: 'Bagasse Plates - Large (10 inch)',
    categoryId: 'sugarcane-fiber-tableware',
    categoryName: 'Sugarcane Fiber Tableware',
    description: 'Sturdy plates made from sugarcane fiber (bagasse). Perfect for large portions.',
    image: '/st10.png',
  },
  {
    id: 'bagasse-trays',
    name: 'Bagasse Trays',
    categoryId: 'sugarcane-fiber-tableware',
    categoryName: 'Sugarcane Fiber Tableware',
    description: 'Sturdy serving trays made from sugarcane fiber (bagasse). Great for appetizers and finger foods.',
    image: '/sttrayss.png',
  },
  {
    id: 'bagasse-compartment',
    name: 'Bagasse Compartment',
    categoryId: 'sugarcane-fiber-tableware',
    categoryName: 'Sugarcane Fiber Tableware',
    description: 'Multi-compartment containers made from sugarcane fiber (bagasse). Perfect for meal prep and food separation.',
    image: '/sttray.png',
  },
  
  
  // Paper Drinkware - Paper Cups
  {
    id: 'paper-cups-small',
    name: 'Paper Cups - Small (100ml)',
    categoryId: 'paper-drinkware',
    categoryName: 'Paper Drinkware',
    description: 'Food-safe paper cups ideal for espresso and small beverages.',
    image: '/pd100.png',
  },
  {
    id: 'paper-cups-medium',
    name: 'Paper Cups - Medium (200ml)',
    categoryId: 'paper-drinkware',
    categoryName: 'Paper Drinkware',
    description: 'Food-safe paper cups ideal for regular coffee and tea servings.',
    image: '/pd200.png',
  },
  {
    id: 'paper-cups-large',
    name: 'Paper Cups - Large (300ml)',
    categoryId: 'paper-drinkware',
    categoryName: 'Paper Drinkware',
    description: 'Food-safe paper cups ideal for large beverages and cold drinks.',
    image: '/pd300.png',
  },
  {
    id: 'paper-cups-extra-large',
    name: 'Paper Cups - Extra Large (400ml)',
    categoryId: 'paper-drinkware',
    categoryName: 'Paper Drinkware',
    description: 'Food-safe paper cups ideal for large cold beverages and smoothies.',
    image: '/pd400.png',
  },
  
  // Eco-Friendly Straw - Paper Straws
  {
    id: 'paper-straws-small',
    name: 'Paper Straws - Small (6mm)',
    categoryId: 'eco-friendly-straw',
    categoryName: 'Eco-Friendly Straw',
    description: 'Eco-friendly paper straws suitable for small drinks and cocktails.',
    image: '/ps6.png',
  },
  {
    id: 'paper-straws-medium',
    name: 'Paper Straws - Medium (8mm)',
    categoryId: 'eco-friendly-straw',
    categoryName: 'Eco-Friendly Straw',
    description: 'Eco-friendly paper straws suitable for regular beverages.',
    image: '/ps8.png',
  },
  {
    id: 'paper-straws-large',
    name: 'Paper Straws - Large (10mm)',
    categoryId: 'eco-friendly-straw',
    categoryName: 'Eco-Friendly Straw',
    description: 'Eco-friendly paper straws suitable for thick beverages and smoothies.',
    image: '/ps10.png',
  },
  
  // Paper Packaging - Kraft Bags
  {
    id: 'paper-bags-small',
    name: 'Paper Bags - Small',
    categoryId: 'paper-packaging',
    categoryName: 'Paper Packaging',
    description: 'Recyclable kraft paper bags with handles for small items and gifts.',
    image: '/pps.png',
  },
  {
    id: 'paper-bags-medium',
    name: 'Paper Bags - Medium',
    categoryId: 'paper-packaging',
    categoryName: 'Paper Packaging',
    description: 'Recyclable kraft paper bags with handles for retail and medium items.',
    image: '/ppm.png',
  },
  {
    id: 'paper-bags-large',
    name: 'Paper Bags - Large',
    categoryId: 'paper-packaging',
    categoryName: 'Paper Packaging',
    description: 'Recyclable kraft paper bags with handles for large items and grocery shopping.',
    image: '/ppl.png',
  },
  
  // Food Packaging - Meal Boxes
  {
    id: 'meal-boxes-small',
    name: 'Meal Boxes - Small',
    categoryId: 'food-packaging',
    categoryName: 'Food Packaging',
    description: 'Leak-resistant paper meal boxes for small portions and snacks.',
    image: '/mbs.png',
  },
  
  {
    id: 'meal-boxes-large',
    name: 'Meal Boxes - Large',
    categoryId: 'food-packaging',
    categoryName: 'Food Packaging',
    description: 'Leak-resistant paper meal boxes for large portions and family meals.',
    image: '/meallarge.png',
  },
  {
    id: 'aluminium-foil-containers-small',
    name: 'Aluminium Containers - Small',
    categoryId: 'food-packaging',
    categoryName: 'Food Packaging',
    description: 'Heat-safe aluminium foil containers for small portions and side dishes.',
    image: '/acsmall.png',
  },

  {
    id: 'aluminium-foil-containers-large',
    name: 'Aluminium Containers - Large',
    categoryId: 'food-packaging',
    categoryName: 'Food Packaging',
    description: 'Heat-safe aluminium foil containers for large meals and batch cooking.',
    image: '/aclarge.png',
  },
  {
    id: 'silver-foil-roll',
    name: 'Silver Foil Roll',
    categoryId: 'food-packaging',
    categoryName: 'Food Packaging',
    description: 'High-quality silver foil rolls for food wrapping, baking, and packaging applications.',
    image: '/fpfoil.png',
  },
  
  // Eco-Friendly Cutlery - Wooden Cutlery
  {
    id: 'wooden-cutlery-spoons',
    name: 'Wooden Spoons',
    categoryId: 'eco-friendly-cutlery',
    categoryName: 'Eco-Friendly Cutlery',
    description: 'Biodegradable wooden spoons for events and takeaway. Available in various sizes.',
    image: '/spoon.jpeg',
  },
  {
    id: 'wooden-cutlery-forks',
    name: 'Wooden Forks',
    categoryId: 'eco-friendly-cutlery',
    categoryName: 'Eco-Friendly Cutlery',
    description: 'Biodegradable wooden forks for events and takeaway. Available in various sizes.',
    image: '/fork.jpeg',
  },
  {
    id: 'wooden-cutlery-knives',
    name: 'Wooden Knives',
    categoryId: 'eco-friendly-cutlery',
    categoryName: 'Eco-Friendly Cutlery',
    description: 'Biodegradable wooden knives for events and takeaway. Available in various sizes.',
    image: '/knife.jpeg',
  },
  {
    id: 'wooden-cutlery-sets',
    name: 'Wooden Cutlery Sets',
    categoryId: 'eco-friendly-cutlery',
    categoryName: 'Eco-Friendly Cutlery',
    description: 'Complete biodegradable wooden cutlery sets (spoon, fork, knife) for events.',
    image: '/set.jpeg',
  },
  
  // Clamshell Products
  {
    id: 'clamshell-containers-small',
    name: 'Clamshell Containers - Small',
    categoryId: 'clamshell',
    categoryName: 'Clamshell',
    description: 'Eco-friendly clamshell containers for small takeout items and snacks.',
    image: '/cs.png',
  },
  {
    id: 'clamshell-containers-medium',
    name: 'Clamshell Containers - Medium',
    categoryId: 'clamshell',
    categoryName: 'Clamshell',
    description: 'Eco-friendly clamshell containers for regular takeout meals.',
    image: '/cm.png',
  },
  {
    id: 'clamshell-containers-large',
    name: 'Clamshell Containers - Large',
    categoryId: 'clamshell',
    categoryName: 'Clamshell',
    description: 'Eco-friendly clamshell containers for large takeout meals and family portions.',
    image: '/cl.png',
  },
  
  // Superfoods - Moringa Products
  {
    id: 'moringa-powder',
    name: 'Moringa Powder',
    categoryId: 'superfoods',
    categoryName: 'Superfoods',
    description: 'Organic Moringa (Drumstick tree, Moringa Oleifera) leaf powder - the most popular form of this nutrient-rich superfood. Contains 7× more Vitamin C than oranges, 4× more calcium than milk, and high protein. Made from shade-dried leaves to preserve nutrients. Supports immunity, weight loss, skin & hair health, and digestion.',
    image: '/moringa-powder.png',
  },
  {
    id: 'moringa-leaves',
    name: 'Moringa Leaves',
    categoryId: 'superfoods',
    categoryName: 'Superfoods',
    description: 'Fresh organic Moringa leaves - also known as Drumstick tree leaves. Rich in vitamins, minerals, and antioxidants. Can be cooked as sabzi, added to soups, or eaten fresh like spinach. Known as the "Miracle tree" for its exceptional nutritional benefits.',
    image: '/moringa-leaves.png',
  },
  {
    id: 'moringa-seeds',
    name: 'Moringa Seeds',
    categoryId: 'superfoods',
    categoryName: 'Superfoods',
    description: 'Organic Moringa seeds - versatile and nutrient-dense. Can be eaten roasted or used to make Moringa oil. High in protein and essential nutrients. Supports overall wellness and can be incorporated into various recipes.',
    image: '/moringa-seeds.png',
  },
  {
    id: 'moringa-pods-drumsticks',
    name: 'Moringa Pods (Drumsticks)',
    categoryId: 'superfoods',
    categoryName: 'Superfoods',
    description: 'Fresh Moringa pods, commonly known as Drumsticks - a staple in Indian cuisine. Used in sambar, curry, and soups. Rich in fiber, vitamins, and minerals. A nutritious addition to traditional Indian dishes.',
    image: '/moringa-drumsticks.png',
  },
  {
    id: 'moringa-oil',
    name: 'Moringa Oil',
    categoryId: 'superfoods',
    categoryName: 'Superfoods',
    description: 'Pure Moringa seed oil - extracted from organic Moringa seeds. Rich in antioxidants and beneficial for skin and hair care. Can also be used for cooking. Known for its moisturizing and nourishing properties.',
    image: '/moringa-oil.png',
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