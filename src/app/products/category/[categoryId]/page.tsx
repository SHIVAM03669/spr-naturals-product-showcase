"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getCategoryById, getProductsByCategoryId } from "@/lib/utils";
import { Leaf, ArrowLeft } from "lucide-react";

export default function CategoryDetailPage() {
  const params = useParams();
  const categoryId = params.categoryId as string;
  const category = getCategoryById(categoryId);
  const products = getProductsByCategoryId(categoryId);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-nature-green mb-4">Category Not Found</h1>
          <Link href="/products">
            <Button className="bg-nature-green hover:bg-leaf-green text-white">Back to Categories</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-sage-green/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="w-8 h-8 text-nature-green" />
              <span className="text-2xl font-bold text-nature-green" style={{ fontFamily: "'Playfair Display', serif" }}>
                SPR Naturals
              </span>
            </Link>
            <div className="flex gap-3">
              <Link href="/products">
                <Button variant="outline" className="border-nature-green text-nature-green hover:bg-sage-green/10">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Categories
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="border-nature-green text-nature-green hover:bg-sage-green/10">Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="mb-10 text-center">
            <Badge className="mb-4 bg-sage-green/20 text-nature-green hover:bg-sage-green/30">{products.length} products</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-nature-green mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              {category.name}
            </h1>
            {category.blurb ? (
              <p className="text-muted-foreground max-w-2xl mx-auto">{category.blurb}</p>
            ) : null}
          </div>

          {products.length === 0 ? (
            <div className="text-center text-muted-foreground">No products available in this category yet.</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <Card className="overflow-hidden hover-lift cursor-pointer border-sage-green/20 bg-white h-full flex flex-col">
                    <div className="relative h-56 bg-cream">
                      <Image 
                        src={product.image} 
                        alt={product.name} 
                        fill 
                        className="object-cover"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={75}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="text-xs font-medium text-sage-green mb-2 uppercase tracking-wider">{product.categoryName}</div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-grow">{product.description}</p>
                      <div className="mt-auto pt-3 border-t border-sage-green/10">
                        <Button size="sm" className="bg-nature-green hover:bg-leaf-green text-white">View Details</Button>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}


