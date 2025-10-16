"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getCategoryById, getProductsByCategoryId } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";

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
              <Image src="/logo2.0.png" alt="SPR Naturals" width={32} height={32} className="rounded" />
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <Card className="group overflow-hidden hover-lift cursor-pointer border-sage-green/20 bg-white h-full flex flex-col transition-all duration-300 hover:border-sage-green/40 hover:shadow-xl">
                    <div className="relative aspect-[4/3] bg-cream overflow-hidden">
                      <Image 
                        src={product.image} 
                        alt={product.name} 
                        fill 
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        quality={80}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <div className="text-xs font-medium text-sage-green mb-2 uppercase tracking-wider">{product.categoryName}</div>
                      <h3 className="text-lg font-semibold mb-3 text-foreground leading-tight">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">{product.description}</p>
                      <div className="pt-3 border-t border-sage-green/10">
                        <Button size="sm" className="w-full bg-nature-green hover:bg-leaf-green text-white transition-colors duration-200">
                          View Details
                        </Button>
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


