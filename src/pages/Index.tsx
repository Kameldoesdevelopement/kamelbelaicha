import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      <HeroSection />

      {/* Featured section */}
      <section className="px-6 py-20 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="tape-label inline-block mb-8">featured work</div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link
              to="/projects"
              className="group old-border p-6 bg-card hover:bg-muted/50 transition-all duration-500 layered-card relative"
            >
              <div className="font-label text-[10px] text-dim tracking-[0.2em] uppercase mb-4">
                001 — e-commerce
              </div>
              <h3 className="font-display text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                SparkStore DZ
              </h3>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                A vintage notebook store. Curated stationery for those who still believe in putting pen to paper.
              </p>
              <div className="mt-4 font-label text-[10px] text-primary tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                → view project
              </div>
            </Link>

            <div className="old-border p-6 bg-card flex items-center justify-center">
              <span className="font-label text-xs text-dim tracking-[0.2em] uppercase">
                [ more projects coming ]
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Brief about */}
      <section className="px-6 py-20 border-t border-border">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <div className="tape-label inline-block mb-4">about</div>
          </div>
          <div className="md:col-span-2">
            <p className="font-mono text-sm text-muted-foreground leading-loose">
              I'm a web developer who builds digital experiences with care and intention.
              Every project is an archive — a snapshot of craft, code, and curiosity.
              I believe the web should feel like a <span className="text-primary">place</span>,
              not just a platform.
            </p>
            <Link
              to="/about"
              className="inline-block mt-6 font-label text-[10px] text-primary tracking-[0.15em] uppercase border-b border-primary/30 pb-0.5 hover:border-primary transition-colors"
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
