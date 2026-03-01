import { ReactNode } from "react";
import Navigation from "./Navigation";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grain-overlay min-h-screen">
      <Navigation />
      <main className="pt-20">
        {children}
      </main>
      <footer className="border-t border-border/50 py-10 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="font-mono text-[9px] text-muted-foreground tracking-[0.2em] uppercase">
            © 2026 Kamel Belaicha
          </span>
          <span className="font-mono text-[9px] text-primary/40 tracking-[0.2em]">
            [ archived ]
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
