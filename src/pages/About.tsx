import { useLang } from "@/lib/i18n";
import Layout from "../components/Layout";
import portrait from "@/assets/kamel-portrait.jpg";

const About = () => {
  const { t } = useLang();
  return (
    <Layout>
      <section className="px-6 py-20 min-h-[80vh]">
        <div className="max-w-6xl mx-auto">
          <div className="tape-label inline-block mb-4">{t("about.label")}</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 text-glow">
            {t("about.title")}
          </h1>

          <div className="grid md:grid-cols-3 gap-12 mt-12">
            {/* Left column - metadata + image */}
            <div className="space-y-8">
              <div className="botanical-border overflow-hidden relative scanlines">
                <img
                  src={portrait}
                  alt={t("about.portraitAlt")}
                  className="w-full aspect-[4/5] object-cover object-top opacity-50 grayscale sepia-[0.35] contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-primary/10 to-transparent mix-blend-multiply pointer-events-none" />
              </div>

              <div>
                <div className="font-label text-[10px] text-moss tracking-[0.2em] uppercase mb-2">{t("about.name")}</div>
                <div className="font-mono text-sm text-foreground">Kamel Belaicha</div>
              </div>
              <div>
                <div className="font-label text-[10px] text-moss tracking-[0.2em] uppercase mb-2">{t("about.role")}</div>
                <div className="font-mono text-sm text-foreground">{t("about.roleValue")}</div>
              </div>
              <div>
                <div className="font-label text-[10px] text-moss tracking-[0.2em] uppercase mb-2">{t("about.focus")}</div>
                <div className="font-mono text-sm text-foreground">
                  {t("about.focus1")}<br />{t("about.focus2")}<br />{t("about.focus3")}
                </div>
              </div>
              <div>
                <div className="font-label text-[10px] text-moss tracking-[0.2em] uppercase mb-2">{t("about.tools")}</div>
                <div className="font-mono text-sm text-foreground">
                  React · TypeScript<br />Node.js · PostgreSQL<br />Tailwind CSS · Git
                </div>
              </div>
            </div>

            {/* Right column - bio */}
            <div className="md:col-span-2 space-y-6">
              <div className="crt-frame p-5 sm:p-8 bg-card scanlines">
                <p className="font-mono text-sm text-muted-foreground leading-loose">
                  {t("about.p1")}
                </p>
                <p className="font-mono text-sm text-muted-foreground leading-loose mt-4">
                  {t("about.p2")}
                </p>
                <p className="font-mono text-sm text-muted-foreground leading-loose mt-4">
                  {t("about.p3")}
                </p>
              </div>

              {/* Timeline */}
              <div className="border-l border-primary/20 pl-6 space-y-6 ml-4">
                <div>
                  <div className="font-label text-[10px] text-primary tracking-[0.2em] uppercase mb-1">{t("about.present")}</div>
                  <div className="font-mono text-sm text-foreground">{t("about.presentText")}</div>
                </div>
                <div>
                  <div className="font-label text-[10px] text-crt-blue tracking-[0.2em] uppercase mb-1">{t("about.education")}</div>
                  <div className="font-mono text-sm text-muted-foreground">{t("about.educationText")}</div>
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
