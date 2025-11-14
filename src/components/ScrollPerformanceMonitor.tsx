"use client";

import { useEffect, useRef } from "react";

interface ScrollPerformanceMonitorProps {
  enabled?: boolean;
  onPerformanceIssue?: (fps: number) => void;
}

export default function ScrollPerformanceMonitor({ 
  enabled = false, 
  onPerformanceIssue 
}: ScrollPerformanceMonitorProps) {
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const fpsRef = useRef(60);

  useEffect(() => {
    if (!enabled) return;

    let animationId: number;

    const measureFPS = () => {
      const now = performance.now();
      frameCountRef.current++;

      if (now >= lastTimeRef.current + 1000) {
        fpsRef.current = Math.round((frameCountRef.current * 1000) / (now - lastTimeRef.current));
        
        // Report performance issues
        if (fpsRef.current < 30 && onPerformanceIssue) {
          onPerformanceIssue(fpsRef.current);
        }

        frameCountRef.current = 0;
        lastTimeRef.current = now;
      }

      animationId = requestAnimationFrame(measureFPS);
    };

    animationId = requestAnimationFrame(measureFPS);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [enabled, onPerformanceIssue]);

  // This component doesn't render anything
  return null;
}

