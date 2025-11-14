"use client";

import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllCategoriesWithCounts, getProductsByCategoryId } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";

export default function ProductsCategoriesPageClient() {
  const categories = getAllCategoriesWithCounts();

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-sage-green/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo2.0.png" alt="SPR Naturals Logo" width={48} height={48} className="rounded" />
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link key={cat.id} href={`/products/category/${cat.id}`}>
                <Card className="group overflow-hidden hover-lift cursor-pointer border-sage-green/20 bg-white h-full flex flex-col transition-all duration-300 hover:border-sage-green/40 hover:shadow-xl">
                  <div className="relative aspect-[4/3] bg-cream overflow-hidden">
                    {(() => {
                      const first = getProductsByCategoryId(cat.id)[0];
                      const img = cat.image ?? first?.image ?? "/window.svg";
                      const alt = `${cat.name} - Eco-friendly ${cat.name.toLowerCase()} products from SPR Naturals`;
                      return (
                        <Image 
                          src={img} 
                          alt={alt} 
                          fill 
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                          quality={80}
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                        />
                      );
                    })()}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-start justify-between mb-3">
                      <h2 className="text-lg font-semibold text-foreground leading-tight">{cat.name}</h2>
                      <Badge className="bg-sage-green/20 text-nature-green hover:bg-sage-green/30 text-xs px-2 py-1 flex-shrink-0 ml-2">{cat.count}</Badge>
                    </div>
                    {cat.blurb ? (
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">{cat.blurb}</p>
                    ) : (
                      <div className="flex-grow" />
                    )}
                    <div className="pt-3 border-t border-sage-green/10">
                      <Button size="sm" className="w-full bg-nature-green hover:bg-leaf-green text-white transition-colors duration-200">
                        View Category
                      </Button>
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
