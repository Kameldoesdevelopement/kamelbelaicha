import { type CSSProperties, type PointerEvent, useEffect, useRef } from "react";
import { BookOpen, ExternalLink, FileText, Gamepad2, Search, Share2, ShoppingBag } from "lucide-react";

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  link: string;
  status: string;
  preview: "books" | "resources" | "marketplace" | "learning";
};

type TiltStyle = CSSProperties & {
  "--tilt-x": string;
  "--tilt-y": string;
  "--glare-x": string;
  "--glare-y": string;
};

const previewDetails = {
  books: { label: "BookBerries / catalog", icon: BookOpen },
  resources: { label: "UMMTO / resources", icon: Share2 },
  marketplace: { label: "Ouedkniss / listings", icon: ShoppingBag },
  learning: { label: "Tiny Explorer / play", icon: Gamepad2 },
};

const ProjectPreview = ({ type }: { type: Project["preview"] }) => {
  const details = previewDetails[type];
  const PreviewIcon = details.icon;

  return (
    <div className={`project-preview project-preview--${type}`} aria-hidden="true">
      <div className="project-preview__bar">
        <span className="project-preview__lights"><i /><i /><i /></span>
        <span>{details.label}</span>
        <PreviewIcon size={12} />
      </div>

      {type === "books" && (
        <div className="project-preview__books">
          <div className="project-preview__heading"><span>Browse the archive</span><Search size={11} /></div>
          <div className="project-preview__shelf">
            <i /><i /><i /><i /><i />
          </div>
          <div className="project-preview__rule" />
        </div>
      )}

      {type === "resources" && (
        <div className="project-preview__resources">
          <aside><i /><i /><i /></aside>
          <div className="project-preview__files">
            <span><FileText size={12} /> Data structures.pdf</span>
            <span><FileText size={12} /> Semester notes</span>
            <span><FileText size={12} /> Shared resources</span>
          </div>
        </div>
      )}

      {type === "marketplace" && (
        <div className="project-preview__market">
          <div className="project-preview__search"><Search size={11} /><span>What are you looking for?</span></div>
          <div className="project-preview__listings">
            {["12 500 DA", "82 000 DA", "4 800 DA"].map((price) => <span key={price}><i /><b>{price}</b></span>)}
          </div>
        </div>
      )}

      {type === "learning" && (
        <div className="project-preview__learning">
          <span className="project-preview__star">★</span>
          <div><b>1 · 2 · 3</b><small>tap, learn, discover</small></div>
          <span className="project-preview__shape">●</span>
        </div>
      )}
    </div>
  );
};

const ProjectTiltCard = ({ project }: { project: Project }) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const frameRef = useRef<number>();
  const current = useRef({ x: 0, y: 0, glareX: 50, glareY: 50 });
  const target = useRef({ x: 0, y: 0, glareX: 50, glareY: 50 });

  const renderFrame = () => {
    const card = cardRef.current;
    if (!card) return;

    const next = current.current;
    const destination = target.current;
    const ease = 0.12;
    next.x += (destination.x - next.x) * ease;
    next.y += (destination.y - next.y) * ease;
    next.glareX += (destination.glareX - next.glareX) * ease;
    next.glareY += (destination.glareY - next.glareY) * ease;
    card.style.setProperty("--tilt-x", `${next.x.toFixed(2)}deg`);
    card.style.setProperty("--tilt-y", `${next.y.toFixed(2)}deg`);
    card.style.setProperty("--glare-x", `${next.glareX.toFixed(1)}%`);
    card.style.setProperty("--glare-y", `${next.glareY.toFixed(1)}%`);

    const moving = Math.abs(destination.x - next.x) > 0.01 || Math.abs(destination.y - next.y) > 0.01 ||
      Math.abs(destination.glareX - next.glareX) > 0.1 || Math.abs(destination.glareY - next.glareY) > 0.1;
    frameRef.current = moving ? requestAnimationFrame(renderFrame) : undefined;
  };

  const startFrame = () => {
    if (frameRef.current === undefined) frameRef.current = requestAnimationFrame(renderFrame);
  };

  const handlePointerMove = (event: PointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType === "touch" || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    target.current = { x: (0.5 - y) * 9, y: (x - 0.5) * 11, glareX: x * 100, glareY: y * 100 };
    startFrame();
  };

  const resetTilt = () => {
    target.current = { x: 0, y: 0, glareX: 50, glareY: 50 };
    startFrame();
  };

  useEffect(() => () => {
    if (frameRef.current !== undefined) cancelAnimationFrame(frameRef.current);
  }, []);

  const initialStyle: TiltStyle = {
    "--tilt-x": "0deg",
    "--tilt-y": "0deg",
    "--glare-x": "50%",
    "--glare-y": "50%",
  };

  return (
    <div className="project-tilt-stage">
      <a
        ref={cardRef}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-tilt-card group"
        style={initialStyle}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetTilt}
        onBlur={resetTilt}
        aria-label={`Visit ${project.title} project`}
      >
        <span className="project-tilt-card__glare" />
        <span className="project-tilt-card__scanlines" />

        <div className="project-tilt-card__layout">
          <div className="project-tilt-card__copy">
            <div className="project-tilt-card__foreground">
              <div className="project-tilt-card__topline">
                <span className="tape-label text-[9px]">{project.status}</span>
                <span className="project-tilt-card__visit">visit <ExternalLink size={12} /></span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground group-hover:text-primary transition-colors text-corrupt">
                {project.title}
              </h2>
            </div>

            <div className="project-tilt-card__midground">
              <span className="font-label text-[10px] text-dim tracking-[0.2em] uppercase">
                {project.id} — {project.category}
              </span>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((technology) => (
                  <span key={technology} className="font-label text-[10px] text-moss tracking-[0.1em] uppercase border border-secondary px-2 py-0.5">
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="project-tilt-card__midground project-tilt-card__preview-wrap">
            <ProjectPreview type={project.preview} />
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectTiltCard;