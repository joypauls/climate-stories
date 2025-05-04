"use client";

import { useEffect, useRef } from "react";

// const NUM_PARTICLES = 800; // Use fewer for smoother performance
const MULTIPLIER_FOR_SHOW = 200;
const CO2_PPM = 420;
// const CO2_PARTICLES = Math.round(
//   ((CO2_PPM * MULTIPLIER_FOR_SHOW) / 1_000_000) * NUM_PARTICLES,
// );

interface Particle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  isCO2: boolean;
}

export default function GasCloud() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let animationFrame: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const isMobile = window.innerWidth < 768;
    // const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const baseCount = isMobile ? 400 : 800; // fewer for small screens
    const co2Count = Math.round(
      ((CO2_PPM * MULTIPLIER_FOR_SHOW) / 1_000_000) * baseCount,
    );

    // Initialize particles
    particles.current = Array.from({ length: baseCount }, (_, i) => {
      const radius = i < co2Count ? 5 : 4;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 1.5,
        dy: (Math.random() - 0.5) * 1.5,
        radius,
        isCO2: i < co2Count,
      };
    });

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p) => {
        // Move
        p.x += p.dx;
        p.y += p.dy;

        // Bounce off walls
        if (p.x < p.radius || p.x > canvas.width - p.radius) p.dx *= -1;
        if (p.y < p.radius || p.y > canvas.height - p.radius) p.dy *= -1;

        // Draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.isCO2 ? "#f59e0b" : "#06b6d4"; // CO2 is yellow
        ctx.globalAlpha = p.isCO2 ? 0.8 : 0.5; // CO2 is more opaque
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
