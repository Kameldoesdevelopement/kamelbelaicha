import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const Navigation = () => {
  const location = useLocation();

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
                {item.label}
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
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
