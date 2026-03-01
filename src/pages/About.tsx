import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <section className="px-6 py-20 min-h-[80vh]">
        <div className="max-w-6xl mx-auto">
          <div className="tape-label inline-block mb-4">index / about</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 text-glow">
            About
          </h1>

          <div className="grid md:grid-cols-3 gap-12 mt-12">
            {/* Left column - metadata */}
            <div className="space-y-8">
              <div>
                <div className="font-label text-[10px] text-dim tracking-[0.2em] uppercase mb-2">
                  name
                </div>
                <div className="font-mono text-sm text-foreground">
                  Kamel Belaicha
                </div>
              </div>
              <div>
                <div className="font-label text-[10px] text-dim tracking-[0.2em] uppercase mb-2">
                  role
                </div>
                <div className="font-mono text-sm text-foreground">
                  Web Developer
                </div>
              </div>
              <div>
                <div className="font-label text-[10px] text-dim tracking-[0.2em] uppercase mb-2">
                  focus
                </div>
                <div className="font-mono text-sm text-foreground">
                  Frontend Development
                  <br />
                  UI/UX Design
                  <br />
                  E-Commerce
                </div>
              </div>
              <div>
                <div className="font-label text-[10px] text-dim tracking-[0.2em] uppercase mb-2">
                  tools
                </div>
                <div className="font-mono text-sm text-foreground">
                  React · TypeScript
                  <br />
                  Tailwind CSS · Node.js
                  <br />
                  Figma · Git
                </div>
              </div>
            </div>

            {/* Right column - bio */}
            <div className="md:col-span-2 space-y-6">
              <div className="old-border p-8 bg-card scanlines">
                <p className="font-mono text-sm text-muted-foreground leading-loose">
                  I'm Kamel — a web developer who treats every project like an artifact worth preserving.
                  I build websites and web applications that feel intentional, layered, and alive.
                </p>
                <p className="font-mono text-sm text-muted-foreground leading-loose mt-4">
                  I believe the best digital work carries weight — it has texture, it has depth,
                  it remembers where it came from. The internet used to be a <span className="text-primary">place</span>.
                  I'm trying to keep building it that way.
                </p>
                <p className="font-mono text-sm text-muted-foreground leading-loose mt-4">
                  When I'm not coding, I'm probably deep in a rabbit hole — researching forgotten web pages,
                  bookmarking things that might disappear, or thinking about how design shapes memory.
                </p>
              </div>

              {/* Timeline-ish */}
              <div className="border-l border-border pl-6 space-y-6 ml-4">
                <div>
                  <div className="font-label text-[10px] text-primary tracking-[0.2em] uppercase mb-1">
                    present
                  </div>
                  <div className="font-mono text-sm text-foreground">
                    Building for the web, one archive at a time
                  </div>
                </div>
                <div>
                  <div className="font-label text-[10px] text-dim tracking-[0.2em] uppercase mb-1">
                    ongoing
                  </div>
                  <div className="font-mono text-sm text-muted-foreground">
                    Learning, iterating, shipping
                  </div>
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
