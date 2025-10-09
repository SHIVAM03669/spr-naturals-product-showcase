"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Heart, Droplet, ShieldCheck, Sparkles, Send, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getAllCategoriesWithCounts, getProductsByCategoryId } from "@/lib/utils";
import ScrollFloat from "@/components/ui/ScrollFloat";

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
          <div className="grid md:grid-cols-4 gap-8 mb-8">
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
    </div>
  );
}