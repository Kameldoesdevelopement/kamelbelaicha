import { useLang } from "@/lib/i18n";
import Layout from "../components/Layout";
import ProjectTiltCard, { type Project } from "../components/ProjectTiltCard";

const projects: Project[] = [
  {
    id: "001",
    key: "bb",
    title: "BookBerries",
    category: "e-commerce",
    description:
      "An online bookstore experience — curated reads, warm design, and a browsing flow that feels like wandering the aisles of a real shop.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://bookberries.vercel.app/",
    status: "live",
    preview: "books",
  },
  {
    id: "002",
    key: "ummto",
    title: "UMMTO Share",
    category: "student platform",
    description:
      "A sharing platform created for the UMMTO community, bringing useful student resources together in one accessible place.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://ummtoshare.vercel.app/",
    status: "live",
    preview: "resources",
  },
  {
    id: "003",
    key: "tiny",
    title: "Tiny Explorer",
    category: "educational game",
    description:
      "A playful learning experience for toddlers, designed around simple interactions, discovery, and age-appropriate activities.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://toddlersgame.vercel.app/",
    status: "live",
    preview: "learning",
  },
];

const Projects = () => {
  const { t } = useLang();
  return (
    <Layout>
      <section className="px-6 py-20 min-h-[80vh]">
        <div className="max-w-6xl mx-auto">
          <div className="tape-label inline-block mb-4">{t("projects.label")}</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 text-glow">
            {t("projects.title")}
          </h1>
          <p className="font-mono text-sm text-muted-foreground mb-16 max-w-lg">
            {t("projects.intro")}
          </p>

          <div className="space-y-8">
            {projects.map((project) => (
              <ProjectTiltCard key={project.id} project={project} />
            ))}
          </div>

          {/* Empty state */}
          <div className="mt-8 botanical-border p-6 sm:p-12 bg-card flex flex-col items-center justify-center text-center">
            <div className="font-label text-xs text-moss tracking-[0.2em] uppercase mb-2 breathe">
              {t("projects.expanding")}
            </div>
            <p className="font-mono text-xs text-dim">
              {t("projects.expandingText")}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
