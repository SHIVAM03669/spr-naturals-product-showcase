"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    // Initialize Lenis for smooth, inertial scrolling
    const lenis = new Lenis({
      duration: 1.1, // overall feel of the inertia
      smoothWheel: true,
      syncTouch: false,
      // easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // optional custom easing
    });

    // Disable native CSS smooth scrolling to avoid conflicts
    const htmlEl = document.documentElement;
    const prevScrollBehavior = htmlEl.style.scrollBehavior;
    htmlEl.style.scrollBehavior = "auto";

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Refresh ScrollTrigger on resize/content changes
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      // Restore previous scroll-behavior
      htmlEl.style.scrollBehavior = prevScrollBehavior;
    };
  }, []);

  return <>{children}</>;
}
