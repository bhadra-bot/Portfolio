"use client";
import { useEffect, useRef } from "react";

export default function CanvasFlowField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = [];
    const numParticles = Math.floor((width * height) / 15000); // density

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.maxLife = Math.random() * 100 + 50;
        this.life = this.maxLife;
        this.size = Math.random() * 1.5 + 0.5;
        // Thermal colors: deep orange to subtle blue
        this.color = Math.random() > 0.8 ? "rgba(0, 210, 255, 0.3)" : "rgba(255, 90, 0, 0.3)";
      }

      update() {
        // Flow field logic (pseudo-perlin noise effect)
        let angle = (this.x * 0.005) + (this.y * 0.005);
        this.vx += Math.cos(angle) * 0.05;
        this.vy += Math.sin(angle) * 0.05;

        // Friction
        this.vx *= 0.98;
        this.vy *= 0.98;

        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height || this.life <= 0) {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.vx = 0;
          this.vy = 0;
          this.life = this.maxLife;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }

    let animationFrameId: number;

    const render = () => {
      ctx.fillStyle = "rgba(10, 10, 12, 0.1)"; // Trails effect
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full -z-10 opacity-60"
    />
  );
}
