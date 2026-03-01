import { useEffect, useRef, useCallback } from "react";

interface TrailDot {
  x: number;
  y: number;
  opacity: number;
  size: number;
  hue: number;
}

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<TrailDot[]>([]);
  const mouseRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Add new dot at mouse position
    const { x, y } = mouseRef.current;
    if (x > 0 && y > 0) {
      dotsRef.current.push({
        x,
        y,
        opacity: 0.4,
        size: 3 + Math.random() * 2,
        hue: Math.random() > 0.5 ? 350 : 175, // rose or teal
      });
    }

    // Update and draw dots
    dotsRef.current = dotsRef.current.filter((dot) => {
      dot.opacity -= 0.008;
      dot.y -= 0.2 + Math.random() * 0.3; // slow upward drift
      dot.x += (Math.random() - 0.5) * 0.5; // slight horizontal wander
      dot.size *= 0.997;

      if (dot.opacity <= 0) return false;

      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
      const saturation = dot.hue === 350 ? "40%" : "30%";
      const lightness = dot.hue === 350 ? "45%" : "40%";
      ctx.fillStyle = `hsla(${dot.hue}, ${saturation}, ${lightness}, ${dot.opacity})`;
      ctx.fill();

      return true;
    });

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleLeave = () => {
      mouseRef.current = { x: -100, y: -100 };
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[999]"
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default CursorTrail;
