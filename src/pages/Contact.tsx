import Layout from "../components/Layout";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <section className="px-6 py-20 min-h-[80vh] flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="tape-label inline-block mb-4">index / contact</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 text-glow">
            Contact
          </h1>
          <p className="font-mono text-sm text-muted-foreground mb-16 max-w-lg">
            Want to work together, or just say hello? Every message gets read.
            This inbox is monitored by a real human.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact methods */}
            <div className="space-y-6">
              <a
                href="mailto:kamel@example.com"
                className="group flex items-center gap-4 old-border p-5 bg-card hover:bg-muted/50 transition-all duration-300"
              >
                <Mail size={16} className="text-primary" />
                <div>
                  <div className="font-label text-[10px] text-dim tracking-[0.2em] uppercase mb-1">
                    email
                  </div>
                  <div className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                    kamel@example.com
                  </div>
                </div>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 old-border p-5 bg-card hover:bg-muted/50 transition-all duration-300"
              >
                <Github size={16} className="text-primary" />
                <div>
                  <div className="font-label text-[10px] text-dim tracking-[0.2em] uppercase mb-1">
                    github
                  </div>
                  <div className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                    github.com/kamelbelaicha
                  </div>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 old-border p-5 bg-card hover:bg-muted/50 transition-all duration-300"
              >
                <Linkedin size={16} className="text-primary" />
                <div>
                  <div className="font-label text-[10px] text-dim tracking-[0.2em] uppercase mb-1">
                    linkedin
                  </div>
                  <div className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                    linkedin.com/in/kamelbelaicha
                  </div>
                </div>
              </a>
            </div>

            {/* Decorative panel */}
            <div className="old-border p-8 bg-card flex flex-col justify-center scanlines">
              <div className="font-label text-[10px] text-dim tracking-[0.2em] uppercase mb-4">
                transmission status
              </div>
              <div className="font-mono text-sm text-muted-foreground space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span>inbox: <span className="text-accent">online</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span>response time: <span className="text-primary">~24h</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-muted-foreground" />
                  <span>timezone: <span className="text-foreground">UTC+1</span></span>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-border">
                <p className="font-mono text-xs text-dim italic">
                  "The internet used to be a place. Let's keep it that way."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
