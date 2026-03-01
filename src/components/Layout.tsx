import { ReactNode } from "react";
import Navigation from "./Navigation";
import FloatingElements from "./FloatingElements";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grain-overlay min-h-screen relative">
      <FloatingElements />
      <Navigation />
      <main className="pt-16 relative z-10">
        {children}
      </main>
      <footer className="border-t border-border py-8 px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="font-label text-xs text-dim tracking-[0.15em] uppercase">
            © 2026 Kamel Belaicha
          </span>
          <span className="font-label text-xs text-rose-mist tracking-[0.15em]">
            [ archived ]
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
