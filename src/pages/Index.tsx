import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import { Link } from "react-router-dom";
import sparkstorePreview from "@/assets/sparkstore-preview.jpg";
import botanicalArchive from "@/assets/botanical-archive.jpg";

const Index = () => {
  return (
    <Layout>
      <HeroSection />

      {/* Featured section */}
      <section className="px-6 py-24 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="tape-label inline-block mb-8">featured work</div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link
              to="/projects"
              className="group old-border bg-card hover:bg-muted/50 transition-all duration-500 layered-card relative overflow-hidden"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={sparkstorePreview}
                  alt="SparkStore DZ project"
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700 group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
              </div>
              <div className="p-6 relative">
                <div className="font-label text-[10px] text-dim tracking-[0.2em] uppercase mb-3">
                  001 — e-commerce
                </div>
                <h3 className="font-display text-2xl text-foreground mb-2 group-hover:text-primary transition-colors text-corrupt">
                  SparkStore DZ
                </h3>
                <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                  A vintage notebook store. Curated stationery for those who still believe in putting pen to paper.
                </p>
                <div className="mt-4 font-label text-[10px] text-primary tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  → view project
                </div>
              </div>
            </Link>

            <div className="botanical-border bg-card flex flex-col items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0">
                <img
                  src={botanicalArchive}
                  alt=""
                  className="w-full h-full object-cover opacity-15"
                />
              </div>
              <div className="relative z-10 p-12 text-center">
                <span className="font-label text-xs text-moss tracking-[0.2em] uppercase breathe">
                  [ more specimens pending ]
                </span>
                <p className="font-mono text-[10px] text-dim mt-2">
                  the archive grows slowly
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brief about */}
      <section className="px-6 py-24 border-t border-border relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <div className="tape-label-blue inline-block mb-4">about</div>
          </div>
          <div className="md:col-span-2">
            <p className="font-mono text-sm text-muted-foreground leading-loose">
              I'm a web developer who builds digital experiences with care and intention.
              Every project is an archive — a snapshot of craft, code, and curiosity.
              I believe the web should feel like a <span className="text-primary italic">place</span>,
              not just a platform. Something worth <span className="text-accent">haunting</span>.
            </p>
            <Link
              to="/about"
              className="inline-block mt-6 font-label text-[10px] text-crt-blue tracking-[0.15em] uppercase border-b border-accent/30 pb-0.5 hover:border-accent transition-colors"
            >
              read more →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
