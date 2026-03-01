import Layout from "../components/Layout";
import botanicalArchive from "@/assets/botanical-archive.jpg";
import heroDecay from "@/assets/hero-decay.jpg";

const About = () => {
  return (
    <Layout>
      <section className="px-6 py-20 min-h-[80vh] relative">
        <div className="max-w-5xl mx-auto">
          <div className="tape-label inline-block mb-4">index / about</div>
          <h1 className="font-display text-4xl md:text-6xl font-light text-foreground mb-4 text-glow">
            About
          </h1>

          <div className="grid md:grid-cols-3 gap-12 mt-16">
            {/* Left column - images & metadata */}
            <div className="space-y-6">
              {/* Stacked images */}
              <div className="relative">
                <div className="overflow-hidden">
                  <img
                    src={heroDecay}
                    alt="Wilting roses"
                    className="w-full aspect-[3/4] object-cover opacity-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
              </div>

              <div className="overflow-hidden botanical-border">
                <img
                  src={botanicalArchive}
                  alt="Botanical archive"
                  className="w-full aspect-square object-cover opacity-40"
                />
              </div>

              <div className="space-y-6 pt-4">
                <div>
                  <div className="font-mono text-[9px] text-moss tracking-[0.25em] uppercase mb-2">name</div>
                  <div className="font-body text-base text-foreground">Kamel Belaicha</div>
                </div>
                <div>
                  <div className="font-mono text-[9px] text-moss tracking-[0.25em] uppercase mb-2">role</div>
                  <div className="font-body text-base text-foreground">Web Developer</div>
                </div>
                <div>
                  <div className="font-mono text-[9px] text-moss tracking-[0.25em] uppercase mb-2">focus</div>
                  <div className="font-body text-base text-foreground leading-relaxed">
                    Frontend Development<br />UI/UX Design<br />E-Commerce
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[9px] text-moss tracking-[0.25em] uppercase mb-2">tools</div>
                  <div className="font-body text-base text-foreground leading-relaxed">
                    React · TypeScript<br />Tailwind CSS · Node.js<br />Figma · Git
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - bio */}
            <div className="md:col-span-2 space-y-8">
              <div className="crt-frame p-10 bg-card/50 backdrop-blur-sm scanlines">
                <p className="font-body text-base text-muted-foreground leading-loose">
                  I'm Kamel — a web developer who treats every project like an artifact worth preserving.
                  I build websites and web applications that feel intentional, layered, and alive.
                </p>
                <p className="font-body text-base text-muted-foreground leading-loose mt-5">
                  I believe the best digital work carries weight — it has texture, it has depth,
                  it remembers where it came from. The internet used to be a <span className="text-primary italic">place</span>.
                  I'm trying to keep building it that way.
                </p>
                <p className="font-body text-base text-muted-foreground leading-loose mt-5">
                  When I'm not coding, I'm probably deep in a rabbit hole — researching forgotten web pages,
                  bookmarking things that might disappear, or thinking about how design shapes memory.
                </p>
              </div>

              {/* Timeline */}
              <div className="border-l border-primary/15 pl-8 space-y-8 ml-4">
                <div>
                  <div className="font-mono text-[9px] text-primary tracking-[0.25em] uppercase mb-2">present</div>
                  <div className="font-body text-base text-foreground">Building for the web, one archive at a time</div>
                </div>
                <div>
                  <div className="font-mono text-[9px] text-crt-blue tracking-[0.25em] uppercase mb-2">ongoing</div>
                  <div className="font-body text-base text-muted-foreground">Learning, iterating, shipping</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
