import Layout from "../components/Layout";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: "001",
    title: "BookBerries",
    category: "e-commerce",
    description:
      "An online bookstore experience — curated reads, warm design, and a browsing flow that feels like wandering the aisles of a real shop.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://bookberries.vercel.app/",
    status: "live",
  },
  {
    id: "002",
    title: "Shakespeare Bookstore",
    category: "e-commerce",
    description:
      "A bookstore steeped in literary tradition — classic catalog presentation with timeless character and old-world charm.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://shakespearebookstore.com/",
    status: "live",
  },
  {
    id: "003",
    title: "Ouedkniss",
    category: "marketplace",
    description:
      "Algeria's largest classifieds marketplace — millions of listings, fast search, and a platform built for everyday commerce.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://www.ouedkniss.com/",
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
                <div className="p-8">
                  <div className="flex items-center justify-end gap-2 font-label text-xs text-crt-blue tracking-[0.1em] uppercase opacity-60 group-hover:opacity-100 transition-opacity -mt-2 mb-2">
                    <span>visit</span>
                    <ExternalLink size={12} />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-label text-[10px] text-dim tracking-[0.2em] uppercase">
                      {project.id} — {project.category}
                    </span>
                    <span className="tape-label text-[9px]">{project.status}</span>
                  </div>

                  <h2 className="font-display text-3xl text-foreground mb-3 group-hover:text-primary transition-colors text-corrupt">
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
            <div className="font-label text-xs text-moss tracking-[0.2em] uppercase mb-2 breathe">
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
