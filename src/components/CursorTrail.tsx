import { useEffect, useRef } from "react";

type Glyph = { x: number; y: number; life: number; char: string; hue: number; vx: number; vy: number };
const CHARS = ["0", "1", "<", "/", ">", "{", "}", ";", "_"];

// CRT ring that lags behind the pointer, leaving faint decaying code glyphs.
const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mouse = { x: -200, y: -200, active: false };
    const ring = { x: -200, y: -200, r: 14 };
    let glyphs: Glyph[] = [];
    let last = { x: -200, y: -200 };
    let raf = 0;
    let pressed = false;
    let hovering = false;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = innerWidth * dpr;
      canvas.height = innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const frame = () => {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      ring.x += (mouse.x - ring.x) * 0.12;
      ring.y += (mouse.y - ring.y) * 0.12;
      ring.r += ((pressed ? 7 : hovering ? 22 : 12) - ring.r) * 0.14;

      ctx.font = "11px 'Space Mono', monospace";
      glyphs = glyphs.filter((g) => {
        g.life -= 0.012;
        g.vx *= 0.98;
        g.x += g.vx;
        g.y += g.vy;
        if (g.life <= 0) return false;
        const flick = Math.random() > 0.94 ? 0.3 : 1;
        ctx.fillStyle = `hsla(${g.hue}, 35%, 58%, ${g.life * g.life * 0.5 * flick})`;
        ctx.fillText(g.char, g.x, g.y);
        return true;
      });

      if (mouse.active) {
        ctx.save();
        ctx.shadowBlur = 12;
        ctx.shadowColor = "hsla(175, 35%, 50%, 0.6)";
        ctx.strokeStyle = hovering ? "hsla(350, 40%, 60%, 0.6)" : "hsla(175, 35%, 55%, 0.5)";
        if (hovering) { ctx.fillStyle = "hsla(350, 40%, 50%, 0.08)"; ctx.beginPath(); ctx.arc(ring.x, ring.y, ring.r, 0, Math.PI * 2); ctx.fill(); }
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(ring.x, ring.y, ring.r, 0, Math.PI * 2);
        ctx.stroke();
        // tick marks
        const t = performance.now() / 1400;
        for (let i = 0; i < 4; i++) {
          const a = t + (i * Math.PI) / 2;
          ctx.beginPath();
          ctx.moveTo(ring.x + Math.cos(a) * (ring.r + 3), ring.y + Math.sin(a) * (ring.r + 3));
          ctx.lineTo(ring.x + Math.cos(a) * (ring.r + 7), ring.y + Math.sin(a) * (ring.r + 7));
          ctx.stroke();
        }
        ctx.restore();
        ctx.fillStyle = "hsla(350, 40%, 55%, 0.8)";
        ctx.fillRect(mouse.x - 1, mouse.y - 1, 2, 2);
      }
      raf = requestAnimationFrame(frame);
    };

    const move = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      hovering = !!(e.target as Element | null)?.closest?.("a, button, [role=button]");
      if (!mouse.active) { ring.x = mouse.x; ring.y = mouse.y; mouse.active = true; }
      if (Math.hypot(mouse.x - last.x, mouse.y - last.y) > 34) {
        last = { x: mouse.x, y: mouse.y };
        glyphs.push({
          x: mouse.x + (Math.random() - 0.5) * 16, y: mouse.y + (Math.random() - 0.5) * 16, life: 1,
          char: CHARS[Math.floor(Math.random() * CHARS.length)], hue: Math.random() > 0.5 ? 350 : 175,
          vx: (Math.random() - 0.5) * 0.2, vy: -0.25 - Math.random() * 0.2,
        });
        if (glyphs.length > 40) glyphs.shift();
      }
    };
    const leave = () => { mouse.active = false; };
    const down = () => { pressed = true; };
    const up = () => { pressed = false; };

    resize();
    addEventListener("resize", resize);
    addEventListener("mousemove", move);
    addEventListener("mousedown", down);
    addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);
    raf = requestAnimationFrame(frame);
    return () => {
      removeEventListener("resize", resize);
      removeEventListener("mousemove", move);
      removeEventListener("mousedown", down);
      removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-screen h-screen pointer-events-none z-[999]" style={{ mixBlendMode: "screen" }} />;
};

export default CursorTrail;
