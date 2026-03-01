import { useEffect, useRef } from "react";

const FloatingElements = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const layers = container.querySelectorAll<HTMLElement>("[data-depth]");
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const offsetX = (e.clientX - centerX) / centerX;
      const offsetY = (e.clientY - centerY) / centerY;

      layers.forEach((layer) => {
        const depth = parseFloat(layer.dataset.depth || "0");
        const moveX = offsetX * depth * 20;
        const moveY = offsetY * depth * 20;
        layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Drifting rose ghost */}
      <div
        data-depth="1.5"
        className="absolute top-[15%] left-[10%] w-32 h-32 rounded-full opacity-[0.04] animate-[floatDrift_8s_ease-in-out_infinite] transition-transform duration-700"
        style={{
          background: "radial-gradient(circle, hsl(var(--glow-primary) / 0.3), transparent 70%)",
        }}
      />

      {/* CRT orb */}
      <div
        data-depth="2"
        className="absolute top-[40%] right-[15%] w-48 h-48 rounded-full opacity-[0.03] animate-[floatDrift_10s_ease-in-out_infinite_reverse] transition-transform duration-700"
        style={{
          background: "radial-gradient(circle, hsl(var(--glow-crt) / 0.25), transparent 70%)",
        }}
      />

      {/* Decay particles - small dots drifting */}
      <div
        data-depth="3"
        className="absolute top-[60%] left-[30%] w-1 h-1 bg-primary/20 rounded-full animate-[floatDrift_12s_ease-in-out_infinite] transition-transform duration-700"
      />
      <div
        data-depth="2.5"
        className="absolute top-[25%] right-[35%] w-1.5 h-1.5 bg-accent/15 rounded-full animate-[floatDrift_9s_ease-in-out_infinite_reverse] transition-transform duration-700"
      />
      <div
        data-depth="1"
        className="absolute top-[70%] left-[60%] w-1 h-1 bg-rose-mist/20 rounded-full animate-[floatDrift_14s_ease-in-out_infinite] transition-transform duration-700"
      />

      {/* Haunted grid lines */}
      <div
        data-depth="0.5"
        className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent transition-transform duration-700"
      />
      <div
        data-depth="0.8"
        className="absolute top-0 right-[30%] w-px h-full bg-gradient-to-b from-transparent via-accent/[0.03] to-transparent transition-transform duration-700"
      />

      {/* Large ambient glow bottom */}
      <div
        data-depth="0.3"
        className="absolute bottom-[-20%] left-[40%] w-[500px] h-[500px] rounded-full opacity-[0.025] transition-transform duration-700"
        style={{
          background: "radial-gradient(circle, hsl(var(--glow-primary) / 0.2), transparent 60%)",
        }}
      />

      {/* Rotating border fragments */}
      <div
        data-depth="1.8"
        className="absolute top-[35%] left-[5%] w-20 h-20 border border-primary/[0.04] rotate-45 animate-[spin_60s_linear_infinite] transition-transform duration-700"
      />
      <div
        data-depth="2.2"
        className="absolute bottom-[20%] right-[10%] w-16 h-16 border border-accent/[0.04] -rotate-12 animate-[spin_45s_linear_infinite_reverse] transition-transform duration-700"
      />
    </div>
  );
};

export default FloatingElements;
