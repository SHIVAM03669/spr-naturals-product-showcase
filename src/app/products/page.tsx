"use client";

import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllCategoriesWithCounts, getProductsByCategoryId } from "@/lib/utils";
import { Leaf, ArrowLeft } from "lucide-react";

export default function ProductsCategoriesPage() {
  const categories = getAllCategoriesWithCounts();

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
            <Link href="/">
              <Button variant="outline" className="border-nature-green text-nature-green hover:bg-sage-green/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-nature-green" style={{ fontFamily: "'Playfair Display', serif" }}>
              Product Categories
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our eco-friendly categories and discover products that suit your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <Link key={cat.id} href={`/products/category/${cat.id}`}>
                <Card className="overflow-hidden hover-lift cursor-pointer border-sage-green/20 bg-white h-full flex flex-col">
                  <div className="relative h-44 bg-cream">
                    {(() => {
                      const first = getProductsByCategoryId(cat.id)[0];
                      const img = cat.image ?? first?.image ?? "/window.svg";
                      const alt = cat.name;
                      return (
                        <Image 
                          src={img} 
                          alt={alt} 
                          fill 
                          className="object-cover"
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          quality={75}
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                        />
                      );
                    })()}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold text-foreground">{cat.name}</h3>
                      <Badge className="bg-sage-green/20 text-nature-green hover:bg-sage-green/30">{cat.count}</Badge>
                    </div>
                    {cat.blurb ? (
                      <p className="text-sm text-muted-foreground mt-2">{cat.blurb}</p>
                    ) : null}
                    <div className="mt-4 pt-3 border-t border-sage-green/10">
                      <Button size="sm" className="bg-nature-green hover:bg-leaf-green text-white">View Category</Button>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


