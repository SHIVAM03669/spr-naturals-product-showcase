"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Heart, Droplet, ShieldCheck, Sparkles, Send, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getAllCategoriesWithCounts, getProductsByCategoryId } from "@/lib/utils";
import ScrollFloat from "@/components/ui/ScrollFloat";
import WhatsAppFloat from "@/components/WhatsAppFloat";

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

  // products grid removed per request; homepage now focuses on categories

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
      name: "Marcus Thompson",
      role: "Restaurant Owner, London",
      content: "SPR Naturals' areca leaf plates have been a game-changer for our eco-friendly restaurant. Our customers love the natural look and we feel good about reducing plastic waste.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Catering Manager, Mumbai",
      content: "The sugarcane bagasse containers are perfect for our outdoor events. They're sturdy, compostable, and handle hot food beautifully. Excellent quality and service!",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Retail Chain Owner, Singapore",
      content: "We've been sourcing from SPR Naturals for over 2 years. Their paper cups and straws are consistently high quality, and their export documentation is always perfect.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-sage-green/20 transition-all duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src="/logo2.0.png" alt="SPR Naturals" width={32} height={32} className="rounded" />
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
            <Button asChild className="bg-nature-green hover:bg-leaf-green text-white">
              <a href="/catalog.pdf" download aria-label="Download catalog PDF">Catalogue</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - left text, right image with badge */}
      <section className="relative pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-green/20 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-nature-green" />
                <span className="text-sm font-medium text-nature-green">ISO Certified • Quality Guaranteed</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-nature-green" style={{ fontFamily: "'Playfair Display', serif" }}>
                Premium Natural
                <br /> Products from <span className="text-gradient-nature">India</span>
                <br /> to the World
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                Your trusted merchant exporter from Nagpur, delivering quality agricultural products and eco-friendly goods to global markets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <Button size="lg" className="bg-nature-green hover:bg-leaf-green text-white px-8 py-6">Explore Products</Button>
                </Link>
                <a href="#contact">
                  <Button size="lg" variant="outline" className="border-nature-green text-nature-green hover:bg-sage-green/10 px-8 py-6">Get in Touch</Button>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-10 text-nature-green">
                <div>
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">100+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <div className="relative aspect-[16/11]">
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-label="Background hero video"
                  />
                </div>
              </div>
              <div className="absolute left-6 -bottom-6">
                <Card className="px-6 py-4 shadow-lg bg-white border-sage-green/30">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-nature-green" />
                    <div>
                      <div className="font-semibold text-foreground">ISO Certified</div>
                      <div className="text-xs text-muted-foreground">Quality Guaranteed</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>  
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="mb-6 text-nature-green"
              textClassName="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Welcome to SPR Naturals
            </ScrollFloat>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are a merchant exporter from Nagpur, India, supplying sustainable food‑service and packaging
              products worldwide. Our focus is eco‑friendly alternatives that reduce plastic waste while delivering
              reliable performance for restaurants, caterers, airlines and retailers.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our catalog includes Areca leaf tableware, sugarcane bagasse plates and trays, paper cups and straws,
              kraft paper bags, meal boxes, aluminium foil containers, and wooden cutlery. We offer consistent
              quality, export‑grade packaging, documentation support, and on‑time shipments — with options for
              private‑label branding on request.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section (with images) */}
      <section id="products" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <ScrollFloat
              animationDuration={0.9}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.025}
              containerClassName="mb-4 text-nature-green"
              textClassName="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Shop by Category
            </ScrollFloat>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose a category to explore eco-friendly products.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {getAllCategoriesWithCounts().map((cat) => (
              <Link key={cat.id} href={`/products/category/${cat.id}`}>
                <Card className="overflow-hidden hover-lift cursor-pointer border-sage-green/20 bg-white h-full flex flex-col">
                  <div className="relative aspect-[4/3] bg-cream">
                    {(() => {
                      const first = getProductsByCategoryId(cat.id)[0];
                      const img = cat.image ?? first?.image ?? "/window.svg";
                      const alt = cat.name;
                      return (
                        <Image
                          src={img}
                          alt={alt}
                          fill
                          className="object-contain p-2 brightness-110 contrast-110 saturate-[1.1]"
                        />
                      );
                    })()}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-semibold text-foreground">{cat.name}</h4>
                      <span className="text-xs font-medium text-nature-green bg-sage-green/20 rounded-full px-2 py-1">
                        {cat.count}
                      </span>
                    </div>
                    {cat.blurb ? (
                      <p className="text-sm text-muted-foreground flex-grow">{cat.blurb}</p>
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

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-gradient-nature">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <ScrollFloat
              animationDuration={1.1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="mb-4 text-nature-green"
              textClassName="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Why Choose SPR Naturals?
            </ScrollFloat>
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
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="mb-4 text-nature-green"
              textClassName="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What Our Customers Say
            </ScrollFloat>
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
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <ScrollFloat
                animationDuration={0.9}
                ease="back.inOut(2)"
                scrollStart="center bottom+=50%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.02}
                containerClassName="mb-4 text-nature-green"
                textClassName="text-4xl md:text-5xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Get in Touch
              </ScrollFloat>
              <p className="text-lg text-muted-foreground">
                Have questions? We'd love to hear from you.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <Card className="p-8 bg-white border-sage-green/20 h-full">
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

              <div className="relative rounded-xl overflow-hidden shadow-lg border border-sage-green/20 bg-white">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps?q=21.125203270486647,79.05828187557697&z=15&output=embed"
                  className="w-full h-[300px] md:h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-nature-green text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/logo2.0.png" alt="SPR Naturals" width={24} height={24} className="rounded" />
                <span className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>SPR Naturals</span>
              </div>
              <p className="text-white/80 text-sm">Merchant exporter of premium natural and eco-friendly products. Global shipping from Nagpur, India.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="/products" className="hover:text-white transition-colors">Categories</a></li>
                <li><a href="#benefits" className="hover:text-white transition-colors">Why Us</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="/products/category/natural-tableware" className="hover:text-white transition-colors">Natural Tableware</a></li>
                <li><a href="/products/category/sugarcane-fiber-tableware" className="hover:text-white transition-colors">Sugarcane Fiber Tableware</a></li>
                <li><a href="/products/category/paper-drinkware" className="hover:text-white transition-colors">Paper Drinkware</a></li>
                <li><a href="/products/category/paper-packaging" className="hover:text-white transition-colors">Paper Packaging</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <a href="https://x.com/Exporter_Indian" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    @Exporter_Indian
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/exporter_indian1983/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    @exporter_indian1983
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/exporterindian1983" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    @exporterindian1983
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/india-true-global-exims-4699a6378/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    India True Global Exims
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Email: hello@sprnaturals.com</li>
                <li>Location: Nagpur, India</li>
                <li>Hours: Mon–Sat, 9AM – 6PM IST</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/80">
            <p>&copy; {new Date().getFullYear()} SPR Naturals. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <WhatsAppFloat 
        phoneNumber="+917447755042"
        message="Hello! I'm interested in SPR Naturals products. Could you please provide more information about your eco-friendly tableware and packaging solutions?"
      />
    </div>
  );
}