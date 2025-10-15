"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    // Enable native CSS smooth scrolling
    const htmlEl = document.documentElement;
    htmlEl.style.scrollBehavior = "smooth";

    // Keep ScrollTrigger for animations but without Lenis
    const onResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      // Keep native smooth scrolling enabled
    };
  }, []);

  return <>{children}</>;
}
