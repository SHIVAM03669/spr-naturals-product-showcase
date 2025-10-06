"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Heart, ShieldCheck, Droplet, Star, Check, Minus, Plus, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const productsData = {
  "herbal-face-cream": {
    id: "herbal-face-cream",
    name: "Herbal Face Cream",
    category: "Skincare",
    price: 29.99,
    rating: 4.8,
    reviews: 124,
    description: "Our luxurious Herbal Face Cream combines the finest botanical ingredients to nourish, hydrate, and rejuvenate your skin. Infused with natural herbs and plant extracts, this lightweight formula absorbs quickly to deliver deep moisture and protection.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/4d178a5b-a1ab-42ce-932c-5c72dd6a6434/generated_images/natural-organic-skincare-cream-jar-with--46835619-20251006072918.jpg",
    ingredients: ["Aloe Vera", "Chamomile Extract", "Jojoba Oil", "Shea Butter", "Vitamin E", "Lavender Oil"],
    benefits: [
      "Deep hydration for 24 hours",
      "Reduces fine lines and wrinkles",
      "Improves skin elasticity",
      "Soothes and calms irritation",
      "Non-greasy formula",
      "Suitable for all skin types"
    ],
    features: [
      { icon: <Leaf className="w-5 h-5" />, text: "100% Natural Ingredients" },
      { icon: <Heart className="w-5 h-5" />, text: "Cruelty-Free" },
      { icon: <ShieldCheck className="w-5 h-5" />, text: "Dermatologist Tested" },
      { icon: <Droplet className="w-5 h-5" />, text: "Chemical-Free" }
    ],
    volume: "50ml"
  },
  "organic-hair-oil": {
    id: "organic-hair-oil",
    name: "Organic Hair Oil",
    category: "Haircare",
    price: 24.99,
    rating: 4.9,
    reviews: 98,
    description: "Transform your hair with our Organic Hair Oil, a powerful blend of cold-pressed oils and botanical extracts. This nourishing treatment strengthens hair from root to tip, promotes healthy growth, and adds natural shine.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/4d178a5b-a1ab-42ce-932c-5c72dd6a6434/generated_images/organic-hair-oil-bottle-with-natural-ing-91ce27fd-20251006072926.jpg",
    ingredients: ["Coconut Oil", "Argan Oil", "Rosemary Extract", "Castor Oil", "Vitamin B Complex", "Tea Tree Oil"],
    benefits: [
      "Strengthens hair follicles",
      "Reduces hair fall and breakage",
      "Promotes natural hair growth",
      "Adds shine and luster",
      "Repairs damaged hair",
      "Controls dandruff naturally"
    ],
    features: [
      { icon: <Leaf className="w-5 h-5" />, text: "Cold-Pressed Oils" },
      { icon: <Heart className="w-5 h-5" />, text: "Vegan Formula" },
      { icon: <ShieldCheck className="w-5 h-5" />, text: "No Mineral Oil" },
      { icon: <Droplet className="w-5 h-5" />, text: "Paraben-Free" }
    ],
    volume: "100ml"
  },
  "essential-oil-set": {
    id: "essential-oil-set",
    name: "Essential Oil Set",
    category: "Natural Oils",
    price: 39.99,
    rating: 5.0,
    reviews: 156,
    description: "Discover the therapeutic power of nature with our Premium Essential Oil Set. This carefully curated collection features five pure, therapeutic-grade essential oils perfect for aromatherapy, massage, and natural wellness.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/4d178a5b-a1ab-42ce-932c-5c72dd6a6434/generated_images/natural-essential-oil-bottles-with-fresh-9fce7945-20251006072937.jpg",
    ingredients: ["Lavender Oil", "Peppermint Oil", "Eucalyptus Oil", "Tea Tree Oil", "Lemon Oil"],
    benefits: [
      "Promotes relaxation and calm",
      "Boosts energy and focus",
      "Supports respiratory health",
      "Natural antibacterial properties",
      "Enhances mood and wellness",
      "Purifies air naturally"
    ],
    features: [
      { icon: <Leaf className="w-5 h-5" />, text: "100% Pure Oils" },
      { icon: <Heart className="w-5 h-5" />, text: "Therapeutic Grade" },
      { icon: <ShieldCheck className="w-5 h-5" />, text: "GC/MS Tested" },
      { icon: <Droplet className="w-5 h-5" />, text: "Undiluted" }
    ],
    volume: "5 x 10ml"
  },
  "natural-body-lotion": {
    id: "natural-body-lotion",
    name: "Natural Body Lotion",
    category: "Skincare",
    price: 19.99,
    rating: 4.7,
    reviews: 89,
    description: "Indulge your skin with our Natural Body Lotion, a silky-smooth formula enriched with plant-based ingredients. This fast-absorbing lotion provides long-lasting hydration while leaving your skin soft, supple, and naturally fragrant.",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop",
    ingredients: ["Cocoa Butter", "Sweet Almond Oil", "Calendula Extract", "Coconut Oil", "Vitamin C", "Chamomile"],
    benefits: [
      "Intense moisture for dry skin",
      "Improves skin texture",
      "Reduces stretch marks",
      "Anti-aging properties",
      "Fast absorption",
      "Pleasant natural scent"
    ],
    features: [
      { icon: <Leaf className="w-5 h-5" />, text: "Plant-Based" },
      { icon: <Heart className="w-5 h-5" />, text: "No Animal Testing" },
      { icon: <ShieldCheck className="w-5 h-5" />, text: "Hypoallergenic" },
      { icon: <Droplet className="w-5 h-5" />, text: "Fragrance-Free" }
    ],
    volume: "200ml"
  }
};

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = productsData[productId as keyof typeof productsData];
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-nature-green mb-4">Product Not Found</h1>
          <Link href="/">
            <Button className="bg-nature-green hover:bg-leaf-green text-white">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (action: 'increase' | 'decrease') => {
    if (action === 'increase') {
      setQuantity(prev => prev + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-sage-green/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="w-8 h-8 text-nature-green" />
              <span className="text-2xl font-bold text-nature-green" style={{ fontFamily: "'Playfair Display', serif" }}>
                SPR Naturals
              </span>
            </Link>
            <Link href="/">
              <Button variant="outline" className="border-nature-green text-nature-green hover:bg-sage-green/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Product Detail Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="relative">
              <div className="sticky top-24">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-cream">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <Badge className="mb-4 bg-sage-green/20 text-nature-green hover:bg-sage-green/30">
                {product.category}
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-nature-green" style={{ fontFamily: "'Playfair Display', serif" }}>
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-leaf-green fill-leaf-green' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-5xl font-bold text-nature-green">
                  ${product.price}
                </span>
                <span className="text-muted-foreground">• {product.volume}</span>
              </div>

              {/* Quantity Selector */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-foreground mb-3">Quantity</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-sage-green/30 rounded-lg">
                    <button
                      onClick={() => handleQuantityChange('decrease')}
                      className="p-3 hover:bg-sage-green/10 transition-colors"
                    >
                      <Minus className="w-4 h-4 text-nature-green" />
                    </button>
                    <span className="px-6 py-3 text-lg font-semibold">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange('increase')}
                      className="p-3 hover:bg-sage-green/10 transition-colors"
                    >
                      <Plus className="w-4 h-4 text-nature-green" />
                    </button>
                  </div>
                  <span className="text-muted-foreground">
                    Total: ${(product.price * quantity).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-8">
                <Button className="flex-1 bg-nature-green hover:bg-leaf-green text-white py-6 text-lg">
                  Add to Cart
                </Button>
                <Button variant="outline" className="border-nature-green text-nature-green hover:bg-sage-green/10 py-6 px-6">
                  <Heart className="w-5 h-5" />
                </Button>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8 p-6 bg-cream rounded-xl">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="p-2 bg-nature-green/10 rounded-lg text-nature-green">
                      {feature.icon}
                    </div>
                    <span className="text-sm font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Information Tabs */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Ingredients */}
            <Card className="p-8 border-sage-green/20 bg-white">
              <h3 className="text-2xl font-bold mb-6 text-nature-green" style={{ fontFamily: "'Playfair Display', serif" }}>
                Key Ingredients
              </h3>
              <div className="space-y-3">
                {product.ingredients.map((ingredient, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-leaf-green" />
                    <span className="text-muted-foreground">{ingredient}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Benefits */}
            <Card className="p-8 border-sage-green/20 bg-white">
              <h3 className="text-2xl font-bold mb-6 text-nature-green" style={{ fontFamily: "'Playfair Display', serif" }}>
                Benefits
              </h3>
              <div className="space-y-3">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-leaf-green mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* How to Use Section */}
          <Card className="mt-8 p-8 border-sage-green/20 bg-gradient-earth">
            <h3 className="text-2xl font-bold mb-4 text-nature-green" style={{ fontFamily: "'Playfair Display', serif" }}>
              How to Use
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Apply a small amount to clean skin and massage gently in circular motions until fully absorbed. 
              For best results, use daily as part of your natural skincare routine. Store in a cool, dry place 
              away from direct sunlight to maintain product efficacy.
            </p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-nature-green text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Leaf className="w-6 h-6" />
              <span className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                SPR Naturals
              </span>
            </div>
            <p className="text-white/80 text-sm mb-4">
              Pure, natural, and sustainable wellness products
            </p>
            <p className="text-white/60 text-xs">
              &copy; 2024 SPR Naturals. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}