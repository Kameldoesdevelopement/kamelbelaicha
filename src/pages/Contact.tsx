import { useLang } from "@/lib/i18n";
import Layout from "../components/Layout";
import { Mail, Github, Phone, Instagram } from "lucide-react";

const Contact = () => {
  const { t } = useLang();
  return (
    <Layout>
      <section className="px-6 py-20 min-h-[80vh] flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="tape-label inline-block mb-4">{t("contact.label")}</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 text-glow">
            {t("contact.title")}
          </h1>
          <p className="font-mono text-sm text-muted-foreground mb-16 max-w-lg">
            {t("contact.intro")}
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact methods */}
            <div className="space-y-6">
              <a
                href="mailto:belaichakamel1312@outlook.com"
                className="group flex items-center gap-4 old-border p-5 bg-card hover:bg-muted/50 transition-all duration-300"
              >
                <Mail size={16} className="text-primary" />
                <div>
                  <div className="font-label text-[10px] text-moss tracking-[0.2em] uppercase mb-1">
                    {t("contact.email")}
                  </div>
                  <div className="font-mono text-sm text-foreground group-hover:text-primary transition-colors break-all">
                    belaichakamel1312@outlook.com
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/kamelbelaicha"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 old-border p-5 bg-card hover:bg-muted/50 transition-all duration-300"
              >
                <Github size={16} className="text-crt-blue" />
                <div>
                  <div className="font-label text-[10px] text-moss tracking-[0.2em] uppercase mb-1">
                    github
                  </div>
                  <div className="font-mono text-sm text-foreground group-hover:text-crt-blue transition-colors">
                    github.com/kamelbelaicha
                  </div>
                </div>
              </a>

              <a
                href="https://instagram.com/labmember137"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 old-border p-5 bg-card hover:bg-muted/50 transition-all duration-300"
              >
                <Instagram size={16} className="text-primary" />
                <div>
                  <div className="font-label text-[10px] text-moss tracking-[0.2em] uppercase mb-1">
                    instagram
                  </div>
                  <div className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                    @labmember137
                  </div>
                </div>
              </a>

              <a
                href="tel:+213776722140"
                className="group flex items-center gap-4 old-border p-5 bg-card hover:bg-muted/50 transition-all duration-300"
              >
                <Phone size={16} className="text-accent" />
                <div>
                  <div className="font-label text-[10px] text-moss tracking-[0.2em] uppercase mb-1">
                    {t("contact.phone")}
                  </div>
                  <div className="font-mono text-sm text-foreground group-hover:text-accent transition-colors">
                    0776 72 21 40
                  </div>
                </div>
              </a>
            </div>

            {/* CRT-style status panel */}
            <div className="crt-frame p-5 sm:p-8 bg-card scanlines">
              <div className="font-label text-[10px] text-crt-blue tracking-[0.2em] uppercase mb-4 text-glow-crt">
                {t("contact.availability")}
              </div>
              <div className="font-mono text-sm text-muted-foreground space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-moss animate-pulse" />
                  <span>{t("contact.inbox")} <span className="text-moss">{t("contact.open")}</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span>{t("contact.response")} <span className="text-primary">~2h</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-crt-blue animate-crt-pulse" />
                  <span>{t("contact.timezone")} <span className="text-crt-blue">UTC+1</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
