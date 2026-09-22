import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

type Palette = {
  background: string;
  foreground: string;
  primary: string;
  accent: string;
  moss: string;
};

const FALLBACK_PALETTE: Palette = {
  background: "hsl(20 15% 4%)",
  foreground: "hsl(35 15% 72%)",
  primary: "hsl(350 40% 45%)",
  accent: "hsl(175 30% 40%)",
  moss: "hsl(80 20% 25%)",
};

const cssColor = (styles: CSSStyleDeclaration, name: string, fallback: string) => {
  const value = styles.getPropertyValue(name).trim();
  return value ? `hsl(${value})` : fallback;
};

function usePalette() {
  const [palette, setPalette] = useState(FALLBACK_PALETTE);

  useEffect(() => {
    const styles = getComputedStyle(document.documentElement);
    setPalette({
      background: cssColor(styles, "--background", FALLBACK_PALETTE.background),
      foreground: cssColor(styles, "--foreground", FALLBACK_PALETTE.foreground),
      primary: cssColor(styles, "--primary", FALLBACK_PALETTE.primary),
      accent: cssColor(styles, "--accent", FALLBACK_PALETTE.accent),
      moss: cssColor(styles, "--moss", FALLBACK_PALETTE.moss),
    });
  }, []);

  return palette;
}

function CameraDrift({ reducedMotion }: { reducedMotion: boolean }) {
  const { camera, pointer } = useThree();

  useFrame((_, rawDelta) => {
    if (reducedMotion) return;
    const delta = Math.min(rawDelta, 0.05);
    const amount = 1 - Math.exp(-2.4 * delta);
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.7, amount);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 0.35, amount);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function ArchivePane({
  position,
  rotation,
  size,
  color,
  speed,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  size: [number, number];
  color: string;
  speed: number;
}) {
  return (
    <Float speed={speed} rotationIntensity={0.12} floatIntensity={0.28} floatingRange={[-0.12, 0.12]}>
      <group position={position} rotation={rotation}>
        <mesh>
          <boxGeometry args={[size[0], size[1], 0.035]} />
          <meshPhysicalMaterial
            color={color}
            transparent
            opacity={0.07}
            roughness={0.42}
            metalness={0.2}
            transmission={0.12}
          />
        </mesh>
        <Line
          points={[
            [-size[0] / 2, size[1] / 2, 0.03],
            [size[0] / 2, size[1] / 2, 0.03],
            [size[0] / 2, -size[1] / 2, 0.03],
            [-size[0] / 2, -size[1] / 2, 0.03],
            [-size[0] / 2, size[1] / 2, 0.03],
          ]}
          color={color}
          transparent
          opacity={0.32}
          lineWidth={0.65}
        />
        <Line
          points={[
            [-size[0] * 0.42, size[1] * 0.32, 0.04],
            [size[0] * 0.08, size[1] * 0.32, 0.04],
          ]}
          color={color}
          transparent
          opacity={0.4}
          lineWidth={0.5}
        />
        <Line
          points={[
            [-size[0] * 0.42, size[1] * 0.18, 0.04],
            [size[0] * 0.34, size[1] * 0.18, 0.04],
          ]}
          color={color}
          transparent
          opacity={0.19}
          lineWidth={0.45}
        />
      </group>
    </Float>
  );
}

function Reliquary({ palette, reducedMotion }: { palette: Palette; reducedMotion: boolean }) {
  const coreRef = useRef<THREE.Group>(null);
  const dust = useMemo(() => {
    const points: number[] = [];
    for (let index = 0; index < 70; index += 1) {
      const angle = index * 2.39996;
      const radius = 2.5 + (index % 11) * 0.39;
      points.push(Math.cos(angle) * radius, ((index * 17) % 41) / 5 - 4, Math.sin(angle) * 2 - 2);
    }
    return new Float32Array(points);
  }, []);

  useFrame((state, rawDelta) => {
    if (!coreRef.current || reducedMotion) return;
    const delta = Math.min(rawDelta, 0.05);
    coreRef.current.rotation.y += delta * 0.035;
    coreRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.22) * 0.025;
  });

  return (
    <group ref={coreRef} position={[1.7, 0, -1]}>
      <ArchivePane position={[2.7, 1.2, -1.3]} rotation={[0.08, -0.28, 0.04]} size={[3.8, 2.5]} color={palette.accent} speed={0.7} />
      <ArchivePane position={[0.2, -1.5, -0.5]} rotation={[-0.05, 0.2, -0.08]} size={[3.1, 1.9]} color={palette.primary} speed={0.55} />
      <ArchivePane position={[3.8, -2.2, -2.1]} rotation={[0.03, -0.18, 0.1]} size={[2.3, 3]} color={palette.foreground} speed={0.42} />

      <Float speed={0.45} rotationIntensity={0.08} floatIntensity={0.2}>
        <group position={[2.15, 0, 0.25]} rotation={[0.02, -0.35, 0.04]}>
          <mesh>
            <boxGeometry args={[3.7, 2.75, 0.18]} />
            <meshStandardMaterial color={palette.background} roughness={0.82} metalness={0.16} />
          </mesh>
          <mesh position={[0, 0.03, 0.12]}>
            <planeGeometry args={[3.15, 2.16]} />
            <meshBasicMaterial color={palette.accent} transparent opacity={0.085} />
          </mesh>
          <Line points={[[-1.25, 0.62, 0.14], [0.55, 0.62, 0.14]]} color={palette.accent} opacity={0.5} transparent lineWidth={0.8} />
          <Line points={[[-1.25, 0.22, 0.14], [1.08, 0.22, 0.14]]} color={palette.primary} opacity={0.3} transparent lineWidth={0.55} />
          <Line points={[[-1.25, -0.18, 0.14], [0.35, -0.18, 0.14]]} color={palette.foreground} opacity={0.18} transparent lineWidth={0.5} />
          <mesh position={[0, -1.72, -0.08]} rotation-x={-0.15}>
            <boxGeometry args={[2.4, 0.18, 1.25]} />
            <meshStandardMaterial color={palette.background} roughness={0.9} metalness={0.1} />
          </mesh>
        </group>
      </Float>

      <mesh position={[3.1, 1.8, -2.7]} rotation={[0.4, 0.2, 0.3]}>
        <torusGeometry args={[0.72, 0.018, 8, 40]} />
        <meshBasicMaterial color={palette.primary} transparent opacity={0.32} />
      </mesh>
      <mesh position={[-1.4, 1.8, -1.5]} rotation={[0.1, 0.4, 0.5]}>
        <octahedronGeometry args={[0.5, 0]} />
        <meshBasicMaterial color={palette.moss} transparent opacity={0.2} wireframe />
      </mesh>

      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[dust, 3]} />
        </bufferGeometry>
        <pointsMaterial color={palette.foreground} size={0.025} transparent opacity={0.24} sizeAttenuation />
      </points>
    </group>
  );
}

const ArchiveScene = () => {
  const palette = usePalette();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden="true">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 9], fov: 48 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.65} />
        <pointLight position={[4, 4, 5]} intensity={2.2} color={palette.accent} />
        <pointLight position={[-4, -2, 4]} intensity={1.5} color={palette.primary} />
        <fog attach="fog" args={[palette.background, 8, 17]} />
        <CameraDrift reducedMotion={reducedMotion} />
        <Reliquary palette={palette} reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
};

export default ArchiveScene;