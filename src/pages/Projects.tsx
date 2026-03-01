import Layout from "../components/Layout";
import { ExternalLink } from "lucide-react";
import projectSparkstore from "@/assets/project-sparkstore.jpg";
import atmosphereTexture from "@/assets/atmosphere-texture.jpg";

const projects = [
  {
    id: "001",
    title: "SparkStore DZ",
    category: "e-commerce",
    description:
      "A vintage notebook store built for lovers of analog. Curated stationery, beautiful typography, and an experience that feels like browsing a real shop.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://sparkstoredz.lovable.app",
    status: "live",
    image: projectSparkstore,
  },
];

const Projects = () => {
  return (
    <Layout>
      <section className="px-6 py-20 min-h-[80vh] relative overflow-hidden">
        {/* Atmosphere */}
        <div className="absolute inset-0 z-0">
          <img src={atmosphereTexture} alt="" className="w-full h-full object-cover opacity-[0.03]" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="tape-label inline-block mb-4">index / projects</div>
          <h1 className="font-display text-4xl md:text-6xl font-light text-foreground mb-4 text-glow">
            Projects
          </h1>
          <p className="font-body text-base text-muted-foreground mb-20 max-w-lg">
            A collection of things I've built. Each one archived here as a record of process and craft.
          </p>

          <div className="space-y-12">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative overflow-hidden"
              >
                {/* Project image */}
                <div className="aspect-[21/9] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-1000 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
                  <div className="absolute top-6 right-6 flex items-center gap-2 font-mono text-[10px] text-accent tracking-[0.15em] uppercase opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                    <span>visit</span>
                    <ExternalLink size={10} />
                  </div>
                </div>

                <div className="relative -mt-20 px-8 pb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-[9px] text-muted-foreground tracking-[0.25em] uppercase">
                      {project.id} — {project.category}
                    </span>
                    <span className="tape-label text-[8px]">{project.status}</span>
                  </div>

                  <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
                    {project.title}
                  </h2>

                  <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-lg">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[9px] text-moss tracking-[0.15em] uppercase border border-secondary/50 px-2 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Empty state */}
          <div className="mt-12 botanical-border p-16 bg-card/30 backdrop-blur-sm flex flex-col items-center justify-center text-center">
            <div className="font-mono text-[10px] text-moss tracking-[0.25em] uppercase mb-3">
              [ archive expanding ]
            </div>
            <p className="font-body text-sm text-muted-foreground">
              More projects will be catalogued here as they emerge from the workshop.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
