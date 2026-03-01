import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import { Link } from "react-router-dom";
import projectSparkstore from "@/assets/project-sparkstore.jpg";
import botanicalArchive from "@/assets/botanical-archive.jpg";
import atmosphereTexture from "@/assets/atmosphere-texture.jpg";

const Index = () => {
  return (
    <Layout>
      <HeroSection />

      {/* Featured section */}
      <section className="px-6 py-28 border-t border-border relative overflow-hidden">
        {/* Subtle atmosphere background */}
        <div className="absolute inset-0 z-0">
          <img src={atmosphereTexture} alt="" className="w-full h-full object-cover opacity-[0.04]" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="tape-label inline-block mb-10">featured work</div>

          <div className="grid md:grid-cols-5 gap-6">
            {/* Main project card */}
            <Link
              to="/projects"
              className="group md:col-span-3 block relative overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={projectSparkstore}
                  alt="SparkStore DZ — vintage notebook store"
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-all duration-1000 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="font-mono text-[9px] text-muted-foreground tracking-[0.25em] uppercase mb-3">
                  001 — e-commerce
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-light text-foreground mb-2 group-hover:text-primary transition-colors duration-500">
                  SparkStore DZ
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-md">
                  A vintage notebook store for lovers of analog. Curated stationery, beautiful typography.
                </p>
                <div className="mt-4 font-mono text-[9px] text-primary tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  → view project
                </div>
              </div>
            </Link>

            {/* Side column */}
            <div className="md:col-span-2 flex flex-col gap-6">
              {/* Botanical image card */}
              <div className="relative overflow-hidden flex-1">
                <img
                  src={botanicalArchive}
                  alt="Botanical specimens"
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="font-mono text-[9px] text-moss tracking-[0.25em] uppercase">
                    [ more specimens pending ]
                  </span>
                </div>
              </div>

              {/* Archive note */}
              <div className="botanical-border p-6 bg-card/50 backdrop-blur-sm">
                <p className="font-mono text-[10px] text-muted-foreground leading-loose">
                  the archive grows slowly. each project is pressed & preserved like a botanical specimen — 
                  something to return to.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brief about */}
      <section className="px-6 py-28 border-t border-border">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-16">
          <div>
            <div className="tape-label-blue inline-block mb-4">about</div>
          </div>
          <div className="md:col-span-2">
            <p className="font-body text-lg text-muted-foreground leading-loose">
              I'm a web developer who builds digital experiences with care and intention.
              Every project is an archive — a snapshot of craft, code, and curiosity.
              I believe the web should feel like a <span className="text-primary italic">place</span>,
              not just a platform. Something worth <span className="text-accent">haunting</span>.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 font-mono text-[10px] text-crt-blue tracking-[0.2em] uppercase border-b border-accent/20 pb-1 hover:border-accent transition-colors duration-500"
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
