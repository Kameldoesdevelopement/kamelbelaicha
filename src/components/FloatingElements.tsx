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

  const glyphs = [
    { t: "</>", top: "12%", left: "8%", d: 1.5, c: "text-primary/20", dur: "16s" },
    { t: "{ }", top: "30%", left: "82%", d: 2.2, c: "text-crt-blue/20", dur: "19s" },
    { t: "=>", top: "68%", left: "14%", d: 1.2, c: "text-moss/25", dur: "22s" },
    { t: "01", top: "52%", left: "56%", d: 2.8, c: "text-accent/15", dur: "18s" },
    { t: "fn()", top: "82%", left: "74%", d: 1.8, c: "text-primary/15", dur: "21s" },
    { t: "&&", top: "20%", left: "45%", d: 0.9, c: "text-crt-blue/15", dur: "24s" },
    { t: "null", top: "88%", left: "38%", d: 2.4, c: "text-moss/20", dur: "17s" },
  ];
  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {glyphs.map((g, i) => (
        <div key={g.t + i} data-depth={g.d} className="absolute transition-transform duration-1000 ease-out" style={{ top: g.top, left: g.left }}>
          <span
            className={`block font-mono text-lg md:text-2xl ${g.c} animate-[floatDrift_16s_ease-in-out_infinite]`}
            style={{ animationDuration: g.dur, textShadow: "0 0 12px hsl(var(--glow-crt) / 0.25)" }}
          >
            {g.t}
          </span>
        </div>
      ))}

      {/* Faint code grid */}
      <div
        data-depth="0.4"
        className="absolute inset-0 opacity-[0.04] transition-transform duration-700"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--glow-crt) / 0.6) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--glow-crt) / 0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Ambient glow */}
      <div
        data-depth="0.3"
        className="absolute bottom-[-20%] left-[40%] w-[500px] h-[500px] rounded-full opacity-[0.03] transition-transform duration-700"
        style={{ background: "radial-gradient(circle, hsl(var(--glow-primary) / 0.2), transparent 60%)" }}
      />
    </div>
  );
};

export default FloatingElements;
