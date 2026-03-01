import Layout from "../components/Layout";
import { ExternalLink } from "lucide-react";
import sparkstorePreview from "@/assets/sparkstore-preview.jpg";

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
  },
];

const Projects = () => {
  return (
    <Layout>
      <section className="px-6 py-20 min-h-[80vh]">
        <div className="max-w-6xl mx-auto">
          <div className="tape-label inline-block mb-4">index / projects</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 text-glow">
            Projects
          </h1>
          <p className="font-mono text-sm text-muted-foreground mb-16 max-w-lg">
            A collection of things I've built. Each one archived here as a record of process and craft.
          </p>

          <div className="space-y-8">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block old-border bg-card hover:bg-muted/50 transition-all duration-500 layered-card relative overflow-hidden"
              >
                {/* Project image */}
                <div className="aspect-[21/9] overflow-hidden relative">
                  <img
                    src={sparkstorePreview}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700 group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <div className="absolute top-4 right-4 flex items-center gap-2 font-label text-xs text-crt-blue tracking-[0.1em] uppercase opacity-60 group-hover:opacity-100 transition-opacity">
                    <span>visit</span>
                    <ExternalLink size={12} />
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-label text-[10px] text-dim tracking-[0.2em] uppercase">
                      {project.id} — {project.category}
                    </span>
                    <span className="tape-label text-[9px]">{project.status}</span>
                  </div>

                  <h2 className="font-display text-3xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>

                  <p className="font-mono text-sm text-muted-foreground leading-relaxed max-w-lg">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-label text-[10px] text-moss tracking-[0.1em] uppercase border border-secondary px-2 py-0.5"
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
          <div className="mt-8 botanical-border p-12 bg-card flex flex-col items-center justify-center text-center">
            <div className="font-label text-xs text-moss tracking-[0.2em] uppercase mb-2">
              [ archive expanding ]
            </div>
            <p className="font-mono text-xs text-dim">
              More projects will be catalogued here as they emerge from the workshop.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
