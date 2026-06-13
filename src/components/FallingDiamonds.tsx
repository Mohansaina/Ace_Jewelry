"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  type: "diamond" | "sparkle" | "ring" | "gold";
  wind: number;
}

export const FallingDiamonds: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const maxParticles = 35; // optimal quantity for performance & elegance

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Helper to create a single particle
    const createParticle = (initTop = false): Particle => {
      const parentWidth = canvas.width;
      const parentHeight = canvas.height;
      
      const types: Particle["type"][] = ["diamond", "sparkle", "ring", "gold"];
      const randomType = types[Math.floor(Math.random() * types.length)];

      let size = 8;
      if (randomType === "diamond") size = Math.random() * 12 + 8;
      else if (randomType === "ring") size = Math.random() * 10 + 10;
      else if (randomType === "sparkle") size = Math.random() * 8 + 6;
      else size = Math.random() * 4 + 2; // gold dust

      return {
        x: Math.random() * parentWidth,
        y: initTop ? -20 : Math.random() * parentHeight,
        size,
        speedY: Math.random() * 0.8 + 0.4, // slow elegant falling
        speedX: Math.random() * 0.4 - 0.2, // slight drift
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() * 0.015 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
        opacity: Math.random() * 0.5 + 0.2, // subtle opacity
        type: randomType,
        wind: Math.random() * 0.02 - 0.01,
      };
    };

    // Initialize particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push(createParticle(false));
    }

    const drawDiamond = (c: CanvasRenderingContext2D, x: number, y: number, size: number, opacity: number, rot: number) => {
      c.save();
      c.translate(x, y);
      c.rotate(rot);
      c.beginPath();
      // Draw luxury gemstone diamond facet
      c.moveTo(0, -size / 2);
      c.lineTo(size / 2, -size / 6);
      c.lineTo(size / 3, size / 6);
      c.lineTo(0, size / 2);
      c.lineTo(-size / 3, size / 6);
      c.lineTo(-size / 2, -size / 6);
      c.closePath();

      // Shiny silver/gold gradient
      const grad = c.createLinearGradient(-size / 2, -size / 2, size / 2, size / 2);
      grad.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
      grad.addColorStop(0.3, `rgba(243, 229, 171, ${opacity})`);
      grad.addColorStop(0.7, `rgba(255, 255, 255, ${opacity * 0.8})`);
      grad.addColorStop(1, `rgba(212, 175, 55, ${opacity * 0.6})`);

      c.fillStyle = grad;
      c.fill();
      c.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.45})`;
      c.lineWidth = 0.8;
      c.stroke();
      c.restore();
    };

    const drawSparkle = (c: CanvasRenderingContext2D, x: number, y: number, size: number, opacity: number, rot: number) => {
      c.save();
      c.translate(x, y);
      c.rotate(rot);
      c.beginPath();
      for (let i = 0; i < 4; i++) {
        c.rotate(Math.PI / 2);
        c.lineTo(0, -size / 2);
        c.lineTo(size / 6, -size / 6);
      }
      c.closePath();
      c.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      c.fill();
      c.restore();
    };

    const drawRing = (c: CanvasRenderingContext2D, x: number, y: number, size: number, opacity: number, rot: number) => {
      c.save();
      c.translate(x, y);
      c.rotate(rot);
      
      // Draw ring band
      c.beginPath();
      c.arc(0, 0, size / 2, 0, Math.PI * 2);
      c.strokeStyle = `rgba(212, 175, 55, ${opacity * 0.8})`; // rich gold
      c.lineWidth = 1.2;
      c.stroke();

      // Draw crown diamond on the ring
      c.beginPath();
      c.arc(0, -size / 2, size / 5, 0, Math.PI * 2);
      c.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      c.fill();
      c.restore();
    };

    const drawGold = (c: CanvasRenderingContext2D, x: number, y: number, size: number, opacity: number) => {
      c.beginPath();
      c.arc(x, y, size, 0, Math.PI * 2);
      c.fillStyle = `rgba(243, 229, 171, ${opacity})`;
      c.fill();
    };

    const updateAndRender = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, index) => {
        // Update physics
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.y * p.wind) * 0.3; // wavy float
        p.rotation += p.rotationSpeed;

        // Reset if boundary exceeded
        if (p.y > canvas.height + 20 || p.x < -20 || p.x > canvas.width + 20) {
          particles[index] = createParticle(true);
          return;
        }

        // Render type
        if (p.type === "diamond") {
          drawDiamond(ctx, p.x, p.y, p.size, p.opacity, p.rotation);
        } else if (p.type === "sparkle") {
          drawSparkle(ctx, p.x, p.y, p.size, p.opacity, p.rotation);
        } else if (p.type === "ring") {
          drawRing(ctx, p.x, p.y, p.size, p.opacity, p.rotation);
        } else {
          drawGold(ctx, p.x, p.y, p.size, p.opacity);
        }
      });

      animationFrameId = requestAnimationFrame(updateAndRender);
    };

    updateAndRender();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 w-full h-full select-none"
    />
  );
};
