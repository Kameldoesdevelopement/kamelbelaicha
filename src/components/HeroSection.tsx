import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroDecay from "@/assets/hero-decay.jpg";
import ArchiveScene from "./ArchiveScene";

const HeroSection = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 relative scanlines overflow-hidden">
      {/* Background decay image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroDecay}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>
      <ArchiveScene />

      <div className="max-w-6xl mx-auto w-full relative z-10 pointer-events-none">
        {/* Tape label */}
        <Link
          to="/about"
          aria-label="About Kamel Belaicha"
          className="tape-label group inline-flex items-center gap-0 mb-8 transition-all duration-300 hover:border-primary/70 hover:shadow-[0_0_16px_hsl(var(--glow-primary)/0.18)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring pointer-events-auto"
        >
          <span>web developer / digital archaeologist</span>
          <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:max-w-16 group-hover:opacity-100 group-focus-visible:ml-2 group-focus-visible:max-w-16 group-focus-visible:opacity-100">
            → about
          </span>
        </Link>

        {/* Main title */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-[6.5rem] font-bold text-foreground leading-[0.85] mb-6 text-glow">
          <span className="text-corrupt">Kamel</span>
          <br />
          <span className="text-primary italic glitch-hover" data-text="Belaicha">Belaicha</span>
        </h1>

        {/* Terminal line */}
        <div className="crt-frame inline-block px-4 py-2 mt-6 bg-card/80 backdrop-blur-sm">
          <div className="font-mono text-sm text-crt-blue flex items-center gap-2 text-glow-crt">
            <span className="text-accent">{">"}</span>
            <span>building things that remember</span>
            <span className={`text-accent ${showCursor ? "opacity-100" : "opacity-0"}`}>█</span>
          </div>
        </div>

        {/* Ghost elements */}
        <div className="absolute top-16 right-8 w-40 h-40 border border-primary/10 opacity-15 rotate-12 hidden md:block drift-slow" />
        <div className="absolute top-24 right-14 w-28 h-28 border border-accent/10 opacity-10 -rotate-6 hidden md:block drift-medium" />
        <div className="absolute bottom-32 right-20 font-label text-[9px] text-dim tracking-[0.3em] uppercase rotate-90 hidden lg:block flicker">
          scroll ↓
        </div>

        {/* Bottom line */}
        <div className="mt-20 flex items-center gap-4">
          <div className="h-px bg-primary/20 flex-1" />
          <span className="font-label text-[9px] text-decay-cream/60 tracking-[0.25em] uppercase">
            archived · 2026
          </span>
          <div className="h-px bg-primary/20 flex-1" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
