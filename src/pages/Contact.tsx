import Layout from "../components/Layout";
import { Mail, Github, Linkedin } from "lucide-react";
import atmosphereTexture from "@/assets/atmosphere-texture.jpg";

const Contact = () => {
  return (
    <Layout>
      <section className="px-6 py-20 min-h-[80vh] flex items-center relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img src={atmosphereTexture} alt="" className="w-full h-full object-cover opacity-[0.05]" />
        </div>

        <div className="max-w-5xl mx-auto w-full relative z-10">
          <div className="tape-label inline-block mb-4">index / contact</div>
          <h1 className="font-display text-4xl md:text-6xl font-light text-foreground mb-4 text-glow">
            Contact
          </h1>
          <p className="font-body text-base text-muted-foreground mb-20 max-w-lg">
            Want to work together, or just say hello? Every message gets read.
            This inbox is monitored by a real human.
          </p>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact methods */}
            <div className="space-y-4">
              <a
                href="mailto:kamel@example.com"
                className="group flex items-center gap-5 p-5 border border-border/50 hover:border-primary/30 bg-card/30 backdrop-blur-sm transition-all duration-500"
              >
                <Mail size={14} className="text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                <div>
                  <div className="font-mono text-[9px] text-moss tracking-[0.25em] uppercase mb-1">email</div>
                  <div className="font-body text-sm text-foreground group-hover:text-primary transition-colors duration-500">
                    kamel@example.com
                  </div>
                </div>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 p-5 border border-border/50 hover:border-accent/30 bg-card/30 backdrop-blur-sm transition-all duration-500"
              >
                <Github size={14} className="text-accent opacity-60 group-hover:opacity-100 transition-opacity" />
                <div>
                  <div className="font-mono text-[9px] text-moss tracking-[0.25em] uppercase mb-1">github</div>
                  <div className="font-body text-sm text-foreground group-hover:text-accent transition-colors duration-500">
                    github.com/kamelbelaicha
                  </div>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 p-5 border border-border/50 hover:border-accent/30 bg-card/30 backdrop-blur-sm transition-all duration-500"
              >
                <Linkedin size={14} className="text-accent opacity-60 group-hover:opacity-100 transition-opacity" />
                <div>
                  <div className="font-mono text-[9px] text-moss tracking-[0.25em] uppercase mb-1">linkedin</div>
                  <div className="font-body text-sm text-foreground group-hover:text-accent transition-colors duration-500">
                    linkedin.com/in/kamelbelaicha
                  </div>
                </div>
              </a>
            </div>

            {/* CRT-style status panel */}
            <div className="crt-frame p-10 bg-card/40 backdrop-blur-sm scanlines">
              <div className="font-mono text-[9px] text-crt-blue tracking-[0.3em] uppercase mb-6 text-glow-crt">
                transmission status
              </div>
              <div className="font-body text-sm text-muted-foreground space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-moss animate-pulse" />
                  <span>inbox: <span className="text-moss">online</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>response time: <span className="text-primary">~24h</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-crt-pulse" />
                  <span>timezone: <span className="text-accent">UTC+1</span></span>
                </div>
              </div>
              <div className="mt-10 pt-5 border-t border-border/30">
                <p className="font-display text-sm text-primary/60 italic">
                  "this too shall rot — but not today."
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
