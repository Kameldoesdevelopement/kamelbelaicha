import { useEffect, useState } from "react";
import heroDecay from "@/assets/hero-decay.jpg";
import atmosphereTexture from "@/assets/atmosphere-texture.jpg";

const HeroSection = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 relative overflow-hidden">
      {/* Layered backgrounds */}
      <div className="absolute inset-0 z-0">
        <img src={heroDecay} alt="" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      </div>
      <div className="absolute inset-0 z-0 mix-blend-screen">
        <img src={atmosphereTexture} alt="" className="w-full h-full object-cover opacity-10" />
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Tape label */}
        <div className="tape-label inline-block mb-10">
          web developer · digital archaeologist
        </div>

        {/* Main title */}
        <h1 className="font-display text-6xl md:text-8xl lg:text-[9rem] font-light text-foreground leading-[0.85] mb-8 text-glow tracking-[-0.02em]">
          Kamel
          <br />
          <span className="text-primary italic font-light">Belaicha</span>
        </h1>

        {/* Terminal line */}
        <div className="crt-frame inline-block px-5 py-3 mt-4 bg-card/60 backdrop-blur-sm">
          <div className="font-mono text-xs text-crt-blue flex items-center gap-2 text-glow-crt tracking-wide">
            <span className="text-accent">{">"}</span>
            <span>building things that remember</span>
            <span className={`text-accent ${showCursor ? "opacity-100" : "opacity-0"}`}>█</span>
          </div>
        </div>

        {/* Ghost elements */}
        <div className="absolute top-16 right-8 w-48 h-48 border border-primary/5 rotate-12 hidden md:block" />
        <div className="absolute top-28 right-20 w-32 h-32 border border-accent/5 -rotate-6 hidden md:block" />
        <div className="absolute bottom-40 right-16 font-mono text-[8px] text-dim tracking-[0.4em] uppercase rotate-90 hidden lg:block flicker">
          scroll ↓
        </div>

        {/* Bottom line */}
        <div className="mt-24 flex items-center gap-6">
          <div className="h-px bg-border flex-1" />
          <span className="font-mono text-[8px] text-muted-foreground tracking-[0.3em] uppercase">
            archived · 2026
          </span>
          <div className="h-px bg-border flex-1" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
