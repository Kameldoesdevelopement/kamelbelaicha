import { useLang } from "@/lib/i18n";
import { Link, useLocation } from "react-router-dom";

const navItems: { path: string; label: "nav.home" | "nav.projects" | "nav.about" | "nav.contact" }[] = [
  { path: "/", label: "nav.home" },
  { path: "/projects", label: "nav.projects" },
  { path: "/about", label: "nav.about" },
  { path: "/contact", label: "nav.contact" },
];

const Navigation = () => {
  const location = useLocation();
  const { t, lang, setLang } = useLang();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(20,18%,8%)] backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-label text-xs tracking-[0.2em] uppercase text-primary flicker">
          K.B
        </Link>

        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-label text-xs tracking-[0.15em] uppercase px-3 py-1.5 transition-all duration-300 group ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-decay-cream"
                }`}
              >
                {t(item.label)}
                {/* Underline */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px transition-all duration-300 ${
                    isActive
                      ? "w-full bg-primary shadow-[0_0_8px_hsl(var(--glow-primary)/0.5)]"
                      : "w-0 group-hover:w-full bg-decay-cream shadow-[0_0_6px_hsl(var(--decay-cream)/0.3)]"
                  }`}
                />
              </Link>
            );
          })}
          <button
            type="button"
            onClick={() => setLang(lang === "en" ? "fr" : "en")}
            aria-label={t("nav.switch")}
            title={t("nav.switch")}
            className="ml-2 font-label text-[10px] tracking-[0.15em] uppercase border border-border px-2 py-1 text-muted-foreground hover:text-primary hover:border-primary/60 hover:shadow-[0_0_8px_hsl(var(--glow-primary)/0.35)] transition-all duration-300"
          >
            <span className={lang === "en" ? "text-primary" : ""}>EN</span>
            <span className="mx-1 text-dim">/</span>
            <span className={lang === "fr" ? "text-primary" : ""}>FR</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
