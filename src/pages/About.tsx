import Layout from "../components/Layout";
import botanicalArchive from "@/assets/botanical-archive.jpg";

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
            {/* Left column - metadata + image */}
            <div className="space-y-8">
              <div className="botanical-border overflow-hidden">
                <img
                  src={botanicalArchive}
                  alt="Botanical archive specimens"
                  className="w-full aspect-square object-cover opacity-60"
                />
              </div>

              <div>
                <div className="font-label text-[10px] text-moss tracking-[0.2em] uppercase mb-2">name</div>
                <div className="font-mono text-sm text-foreground">Kamel Belaicha</div>
              </div>
              <div>
                <div className="font-label text-[10px] text-moss tracking-[0.2em] uppercase mb-2">role</div>
                <div className="font-mono text-sm text-foreground">Full-Stack Web Developer</div>
              </div>
              <div>
                <div className="font-label text-[10px] text-moss tracking-[0.2em] uppercase mb-2">focus</div>
                <div className="font-mono text-sm text-foreground">
                  Full-Stack Development<br />Responsive Interfaces<br />APIs & Databases
                </div>
              </div>
              <div>
                <div className="font-label text-[10px] text-moss tracking-[0.2em] uppercase mb-2">tools</div>
                <div className="font-mono text-sm text-foreground">
                  React · TypeScript<br />Node.js · PostgreSQL<br />Tailwind CSS · Git
                </div>
              </div>
            </div>

            {/* Right column - bio */}
            <div className="md:col-span-2 space-y-6">
              <div className="crt-frame p-8 bg-card scanlines">
                <p className="font-mono text-sm text-muted-foreground leading-loose">
                  I'm Kamel, a passionate full-stack web developer. I first became interested in
                  development because I wanted to understand how the websites I used every day were built.
                </p>
                <p className="font-mono text-sm text-muted-foreground leading-loose mt-4">
                  I earned my bachelor's degree from Université Mouloud Mammeri de Tizi-Ouzou,
                  and continued learning through technical books, online courses, and hands-on projects.
                  That mix of formal study and independent practice has shaped the way I solve problems.
                </p>
                <p className="font-mono text-sm text-muted-foreground leading-loose mt-4">
                  Today, I enjoy working across the full stack, from thoughtful interfaces to the systems
                  behind them. I care about writing clear code, learning from each project, and creating
                  digital experiences that are useful, reliable, and enjoyable to use.
                </p>
              </div>

              {/* Timeline */}
              <div className="border-l border-primary/20 pl-6 space-y-6 ml-4">
                <div>
                  <div className="font-label text-[10px] text-primary tracking-[0.2em] uppercase mb-1">present</div>
                  <div className="font-mono text-sm text-foreground">Building practical, thoughtful web applications</div>
                </div>
                <div>
                  <div className="font-label text-[10px] text-crt-blue tracking-[0.2em] uppercase mb-1">education</div>
                  <div className="font-mono text-sm text-muted-foreground">Bachelor's degree · Université Mouloud Mammeri de Tizi-Ouzou</div>
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
