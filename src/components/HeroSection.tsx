import { useEffect, useState } from "react";

const HeroSection = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 relative scanlines">
      <div className="max-w-6xl mx-auto w-full">
        {/* Tape label */}
        <div className="tape-label inline-block mb-8">
          web developer / digital craftsman
        </div>

        {/* Main title */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.9] mb-6 text-glow">
          Kamel
          <br />
          <span className="text-primary">Belaicha</span>
        </h1>

        {/* Terminal line - CRT style */}
        <div className="crt-frame inline-block px-4 py-2 mt-6 bg-card">
          <div className="font-mono text-sm text-crt-blue flex items-center gap-2 text-glow-crt">
            <span className="text-accent">{">"}</span>
            <span>building things for the web</span>
            <span className={`text-accent ${showCursor ? "opacity-100" : "opacity-0"}`}>█</span>
          </div>
        </div>

        {/* Decorative layers - botanical feel */}
        <div className="absolute top-20 right-10 w-32 h-32 border border-moss/20 opacity-20 rotate-12 hidden md:block" />
        <div className="absolute top-28 right-16 w-24 h-24 border border-primary/15 opacity-15 rotate-6 hidden md:block" />
        <div className="absolute bottom-32 right-20 font-label text-[10px] text-dim tracking-[0.3em] uppercase rotate-90 hidden lg:block">
          scroll down
        </div>

        {/* Decorative horizontal line */}
        <div className="mt-16 flex items-center gap-4">
          <div className="h-px bg-secondary flex-1" />
          <span className="font-label text-[10px] text-moss tracking-[0.2em] uppercase">
            est. 2024
          </span>
          <div className="h-px bg-secondary flex-1" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
