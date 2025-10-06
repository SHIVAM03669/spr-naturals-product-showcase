"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Heart, Droplet, ShieldCheck, Sparkles, Send } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const products = [
    {
      id: "herbal-face-cream",
      name: "Herbal Face Cream",
      category: "Skincare",
      price: "$29.99",
      description: "Nourishing herbal face cream with natural botanicals",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/4d178a5b-a1ab-42ce-932c-5c72dd6a6434/generated_images/natural-organic-skincare-cream-jar-with--46835619-20251006072918.jpg"
    },
    {
      id: "organic-hair-oil",
      name: "Organic Hair Oil",
      category: "Haircare",
      price: "$24.99",
      description: "Pure organic oil blend for healthy, shiny hair",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/4d178a5b-a1ab-42ce-932c-5c72dd6a6434/generated_images/organic-hair-oil-bottle-with-natural-ing-91ce27fd-20251006072926.jpg"
    },
    {
      id: "essential-oil-set",
      name: "Essential Oil Set",
      category: "Natural Oils",
      price: "$39.99",
      description: "Collection of pure essential oils for wellness",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/4d178a5b-a1ab-42ce-932c-5c72dd6a6434/generated_images/natural-essential-oil-bottles-with-fresh-9fce7945-20251006072937.jpg"
    },
    {
      id: "natural-body-lotion",
      name: "Natural Body Lotion",
      category: "Skincare",
      price: "$19.99",
      description: "Hydrating body lotion with plant-based ingredients",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop"
    }
  ];

  const benefits = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "100% Natural",
      description: "Made with pure, natural ingredients from sustainable sources"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Cruelty-Free",
      description: "Never tested on animals, always ethical and compassionate"
    },
    {
      icon: <Droplet className="w-8 h-8" />,
      title: "Chemical-Free",
      description: "No harmful chemicals, parabens, or synthetic fragrances"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Eco-Sustainable",
      description: "Environmentally responsible packaging and production"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Verified Customer",
      content: "SPR Naturals has completely transformed my skincare routine. My skin has never felt healthier!",
      rating: 5
    },
    {
      name: "Emily Chen",
      role: "Verified Customer",
      content: "I love knowing exactly what I'm putting on my skin. These products are pure, effective, and sustainable.",
      rating: 5
    },
    {
      name: "Jessica Brown",
      role: "Verified Customer",
      content: "The hair oil is incredible! My hair is shinier and healthier than ever. Highly recommend!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen smooth-scroll">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-sage-green/20 transition-all duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Leaf className="w-8 h-8 text-nature-green" />
              <span className="text-2xl font-bold text-nature-green" style={{ fontFamily: "'Playfair Display', serif" }}>
                SPR Naturals
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-foreground hover:text-nature-green transition-colors">About</a>
              <a href="#products" className="text-foreground hover:text-nature-green transition-colors">Products</a>
              <a href="#benefits" className="text-foreground hover:text-nature-green transition-colors">Benefits</a>
              <a href="#testimonials" className="text-foreground hover:text-nature-green transition-colors">Testimonials</a>
              <a href="#contact" className="text-foreground hover:text-nature-green transition-colors">Contact</a>
            </div>
            <Button className="bg-nature-green hover:bg-leaf-green text-white">
              Shop Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/4d178a5b-a1ab-42ce-932c-5c72dd6a6434/generated_images/serene-natural-spa-setting-with-fresh-gr-3ebba2e6-20251006072909.jpg"
            alt="Natural wellness products"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
        </div>
        
        <div className={`relative z-10 container mx-auto px-6 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-green/20 rounded-full mb-6 fade-in">
            <Sparkles className="w-4 h-4 text-nature-green" />
            <span className="text-sm font-medium text-nature-green">100% Natural • Eco-Friendly • Sustainable</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in fade-in-delay-1" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="text-gradient-nature">Pure. Natural. Sustainable.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 fade-in fade-in-delay-2">
            Experience the power of nature with our carefully crafted wellness and personal care products
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in fade-in-delay-3">
            <Button size="lg" className="bg-nature-green hover:bg-leaf-green text-white text-lg px-8 py-6">
              Explore Products
            </Button>
            <Button size="lg" variant="outline" className="border-nature-green text-nature-green hover:bg-sage-green/10 text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-nature-green" style={{ fontFamily: "'Playfair Display', serif" }}>
              Welcome to SPR Naturals
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At SPR Naturals, we believe in the transformative power of nature. Our mission is to provide you with 
              100% natural, eco-friendly, and sustainable wellness and personal care products that nurture both your 
              body and the environment.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From herbal skincare and organic haircare to natural oils and eco-friendly lifestyle products, 
              every item is crafted with care, using only the finest botanical ingredients. We're committed to 
              being chemical-free, cruelty-free, and eco-sustainable in everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-nature-green" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our collection of natural wellness products, carefully formulated for your health and the planet
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <Card className="overflow-hidden hover-lift cursor-pointer border-sage-green/20 bg-white h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="text-xs font-medium text-sage-green mb-3 uppercase tracking-wider">{product.category}</div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-grow">{product.description}</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-sage-green/10">
                      <span className="text-2xl font-bold text-nature-green">{product.price}</span>
                      <Button size="sm" className="bg-nature-green hover:bg-leaf-green text-white">
                        View Details
                      </Button>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-gradient-nature">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Why Choose SPR Naturals?
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Our commitment to purity, sustainability, and your well-being
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white/90 backdrop-blur-sm rounded-xl hover-lift">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-nature-green/20 rounded-full mb-4 text-nature-green">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-nature-green" style={{ fontFamily: "'Playfair Display', serif" }}>
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from people who trust SPR Naturals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-white border-sage-green/20 hover-lift">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Sparkles key={i} className="w-5 h-5 text-leaf-green fill-leaf-green" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-nature-green" style={{ fontFamily: "'Playfair Display', serif" }}>
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground">
                Have questions? We'd love to hear from you.
              </p>
            </div>
            
            <Card className="p-8 bg-white border-sage-green/20">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-sage-green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-nature-green"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-sage-green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-nature-green"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-sage-green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-nature-green resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <Button className="w-full bg-nature-green hover:bg-leaf-green text-white py-6 text-lg">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-nature-green text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-6 h-6" />
                <span className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  SPR Naturals
                </span>
              </div>
              <p className="text-white/80 text-sm">
                Pure, natural, and sustainable wellness products for a healthier you and planet.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
                <li><a href="#benefits" className="hover:text-white transition-colors">Benefits</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Skincare</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Haircare</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Natural Oils</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Lifestyle</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Email: hello@sprnaturals.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Mon-Fri: 9AM - 6PM EST</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/80">
            <p>&copy; 2024 SPR Naturals. All rights reserved. Made with ♥ for nature.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}