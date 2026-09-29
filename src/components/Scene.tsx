import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/* ─────────────────────────────────────────────────────
   Cinematic Color Palette
   Layered: near-black → deep crimson → warm moon glow
───────────────────────────────────────────────────── */
const C = {
  bg:         '#050105',   // near-black, barely warm
  skyMid:     '#1a0508',   // deep crimson atmosphere
  skyHorizon: '#3d0a10',   // horizon glow
  moon:       '#f1ebdd',   // warm ivory
  moonGlow1:  '#c4704a',   // amber inner glow
  moonGlow2:  '#7a2a1a',   // dim outer halo
  moonGlow3:  '#3d1008',   // faint furthest halo
  silhouette: '#080408',   // near-pure black for silhouettes
  fog:        '#2e0810',   // deep crimson fog
  leaf:       '#1a0305',   // dark petal
} as const;

/* ─────────────────────────────────────────────────────
   Atmospheric Background — 3 sphere layers
───────────────────────────────────────────────────── */
const AtmosphericBackground: React.FC = () => (
  <>
    {/* Outer dark void */}
    <mesh position={[0, 0, -50]}>
      <sphereGeometry args={[60, 32, 32]} />
      <meshBasicMaterial color={C.bg} side={THREE.BackSide} />
    </mesh>
    {/* Mid atmosphere — deep crimson */}
    <mesh position={[0, -10, -40]}>
      <sphereGeometry args={[48, 32, 32]} />
      <meshBasicMaterial color={C.skyMid} side={THREE.BackSide} transparent opacity={0.55} />
    </mesh>
    {/* Horizon blush near moon */}
    <mesh position={[4, -2, -35]}>
      <sphereGeometry args={[22, 32, 32]} />
      <meshBasicMaterial color={C.skyHorizon} side={THREE.BackSide} transparent opacity={0.30} />
    </mesh>
  </>
);

/* ─────────────────────────────────────────────────────
   Moon — Layer 5 (center-right, behind samurai)
   Warm ivory disc with 3 glow halos
───────────────────────────────────────────────────── */
const Moon: React.FC = () => (
  <group position={[3.2, 0.8, -15]}>
    {/* Furthest halo */}
    <mesh position={[0, 0, -0.4]}>
      <circleGeometry args={[9.5, 64]} />
      <meshBasicMaterial color={C.moonGlow3} transparent opacity={0.18} />
    </mesh>
    {/* Mid halo */}
    <mesh position={[0, 0, -0.25]}>
      <circleGeometry args={[7.0, 64]} />
      <meshBasicMaterial color={C.moonGlow2} transparent opacity={0.28} />
    </mesh>
    {/* Inner warm glow */}
    <mesh position={[0, 0, -0.1]}>
      <circleGeometry args={[5.2, 64]} />
      <meshBasicMaterial color={C.moonGlow1} transparent opacity={0.38} />
    </mesh>
    {/* Moon disc */}
    <mesh>
      <circleGeometry args={[4.0, 64]} />
      <meshBasicMaterial color={C.moon} />
    </mesh>
  </group>
);

/* ─────────────────────────────────────────────────────
   Distant Mountains — Layer 6
   Two overlapping mountain ranges for depth
───────────────────────────────────────────────────── */
const Mountains: React.FC = () => {
  const farColor  = '#0e0307';
  const nearColor = '#0a0205';
  return (
    <group position={[0, -3.5, -22]}>
      {/* Far range */}
      {[
        [-7, 0, 0, 3.2, 5],
        [-3, 0, 0, 2.8, 4.5],
        [1,  0, 0, 3.5, 5.5],
        [5,  0, 0, 2.5, 4],
        [9,  0, 0, 3.0, 4.8],
      ].map(([x, y, z, rx, h], i) => (
        <mesh key={`fm-${i}`} position={[x as number, y as number, z as number]}>
          <coneGeometry args={[rx as number, h as number, 3, 1]} />
          <meshBasicMaterial color={farColor} />
        </mesh>
      ))}
      {/* Near range (slightly darker) */}
      {[
        [-9,  -1, 2, 3.5, 4.5],
        [-4,  -1, 2, 2.5, 3.8],
        [0,   -1, 2, 4.0, 5.0],
        [5,   -1, 2, 3.0, 4.2],
        [10,  -1, 2, 2.8, 3.5],
      ].map(([x, y, z, rx, h], i) => (
        <mesh key={`nm-${i}`} position={[x as number, y as number, z as number]}>
          <coneGeometry args={[rx as number, h as number, 3, 1]} />
          <meshBasicMaterial color={nearColor} />
        </mesh>
      ))}
    </group>
  );
};

/* ─────────────────────────────────────────────────────
   Torii Gate — Layer 3
   Left-center, monumental, grounded, not cropped
   Authentic proportions: tall pillars, curved kasagi
───────────────────────────────────────────────────── */
const ToriiGate: React.FC = () => {
  const s = C.silhouette;
  return (
    <group position={[-2.5, -1.0, -10]} scale={1.4}>
      {/* LEFT PILLAR */}
      <mesh position={[-1.6, 3.5, 0]}>
        <boxGeometry args={[0.45, 10, 0.6]} />
        <meshBasicMaterial color={s} />
      </mesh>
      {/* RIGHT PILLAR */}
      <mesh position={[1.6, 3.5, 0]}>
        <boxGeometry args={[0.45, 10, 0.6]} />
        <meshBasicMaterial color={s} />
      </mesh>

      {/* NUKI — lower crossbar */}
      <mesh position={[0, 5.8, 0]}>
        <boxGeometry args={[4.8, 0.38, 0.6]} />
        <meshBasicMaterial color={s} />
      </mesh>

      {/* KASAGI — top main beam */}
      <mesh position={[0, 7.0, 0]}>
        <boxGeometry args={[6.0, 0.55, 0.7]} />
        <meshBasicMaterial color={s} />
      </mesh>
      {/* Kasagi upswept left corner */}
      <mesh position={[-3.2, 7.25, 0]} rotation={[0, 0, 0.18]}>
        <boxGeometry args={[1.0, 0.45, 0.7]} />
        <meshBasicMaterial color={s} />
      </mesh>
      {/* Kasagi upswept right corner */}
      <mesh position={[3.2, 7.25, 0]} rotation={[0, 0, -0.18]}>
        <boxGeometry args={[1.0, 0.45, 0.7]} />
        <meshBasicMaterial color={s} />
      </mesh>

      {/* SHIMAGI — decorative cap on top of kasagi */}
      <mesh position={[0, 7.55, 0]}>
        <boxGeometry args={[5.4, 0.28, 0.6]} />
        <meshBasicMaterial color={s} />
      </mesh>

      {/* Gakuzuka — centre decorative piece */}
      <mesh position={[0, 6.4, 0]}>
        <boxGeometry args={[0.3, 1.0, 0.5]} />
        <meshBasicMaterial color={s} />
      </mesh>

      {/* Ground base — square plinths */}
      <mesh position={[-1.6, -0.4, 0]}>
        <boxGeometry args={[0.7, 0.8, 0.7]} />
        <meshBasicMaterial color={s} />
      </mesh>
      <mesh position={[1.6, -0.4, 0]}>
        <boxGeometry args={[0.7, 0.8, 0.7]} />
        <meshBasicMaterial color={s} />
      </mesh>
    </group>
  );
};

/* ─────────────────────────────────────────────────────
   Samurai — Layer 4
   Entirely procedural geometry — no image dependency.
   Center-right, in front of moon, katana raised left.
───────────────────────────────────────────────────── */
const Samurai: React.FC<{ groupRef: React.RefObject<THREE.Group | null> }> = ({ groupRef }) => {
  const s = C.silhouette;
  return (
    <group ref={groupRef} position={[2.8, -1.8, -3]} scale={1.1}>
      {/* ── LEGS ── */}
      {/* Hakama (wide flowing skirt) */}
      <mesh position={[0, 1.0, 0]}>
        <cylinderGeometry args={[0.55, 0.75, 2.0, 10]} />
        <meshBasicMaterial color={s} />
      </mesh>
      {/* Left shin */}
      <mesh position={[-0.28, 0.1, 0]} rotation={[0, 0, 0.08]}>
        <cylinderGeometry args={[0.11, 0.14, 0.7, 8]} />
        <meshBasicMaterial color={s} />
      </mesh>
      {/* Right shin */}
      <mesh position={[0.28, 0.1, 0]} rotation={[0, 0, -0.05]}>
        <cylinderGeometry args={[0.11, 0.14, 0.7, 8]} />
        <meshBasicMaterial color={s} />
      </mesh>

      {/* ── TORSO / DO (armour breastplate) ── */}
      <mesh position={[0, 2.55, 0]}>
        <cylinderGeometry args={[0.42, 0.38, 1.4, 10]} />
        <meshBasicMaterial color={s} />
      </mesh>

      {/* ── SHOULDERS (Osode / pauldrons) ── */}
      {/* Left pauldron */}
      <mesh position={[-0.68, 2.95, 0]} rotation={[0, 0, 0.5]}>
        <boxGeometry args={[0.55, 0.28, 0.4]} />
        <meshBasicMaterial color={s} />
      </mesh>
      {/* Right pauldron */}
      <mesh position={[0.68, 2.95, 0]} rotation={[0, 0, -0.5]}>
        <boxGeometry args={[0.55, 0.28, 0.4]} />
        <meshBasicMaterial color={s} />
      </mesh>

      {/* ── LEFT ARM — reaching up to hold katana raised high ── */}
      {/* Upper arm */}
      <mesh position={[-0.72, 2.9, 0]} rotation={[0, 0, -1.05]}>
        <capsuleGeometry args={[0.12, 0.65, 4, 8]} />
        <meshBasicMaterial color={s} />
      </mesh>
      {/* Forearm */}
      <mesh position={[-1.28, 3.5, 0]} rotation={[0, 0, -0.65]}>
        <capsuleGeometry args={[0.09, 0.55, 4, 8]} />
        <meshBasicMaterial color={s} />
      </mesh>
      {/* Fist / hand */}
      <mesh position={[-1.68, 3.95, 0]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshBasicMaterial color={s} />
      </mesh>

      {/* ── RIGHT ARM — bent at elbow, resting on scabbard ── */}
      {/* Upper arm */}
      <mesh position={[0.72, 2.65, 0]} rotation={[0, 0, 1.2]}>
        <capsuleGeometry args={[0.12, 0.55, 4, 8]} />
        <meshBasicMaterial color={s} />
      </mesh>
      {/* Forearm */}
      <mesh position={[1.05, 2.2, 0.1]} rotation={[0.1, 0, 0.4]}>
        <capsuleGeometry args={[0.09, 0.5, 4, 8]} />
        <meshBasicMaterial color={s} />
      </mesh>

      {/* ── NECK ── */}
      <mesh position={[0, 3.42, 0]}>
        <cylinderGeometry args={[0.14, 0.18, 0.28, 8]} />
        <meshBasicMaterial color={s} />
      </mesh>

      {/* ── HEAD ── */}
      <mesh position={[0, 3.72, 0]}>
        <sphereGeometry args={[0.26, 16, 16]} />
        <meshBasicMaterial color={s} />
      </mesh>

      {/* ── KABUTO (helmet) ── */}
      {/* Bowl */}
      <mesh position={[0, 3.95, 0]}>
        <sphereGeometry args={[0.30, 16, 8, 0, Math.PI * 2, 0, Math.PI * 0.55]} />
        <meshBasicMaterial color={s} side={THREE.DoubleSide} />
      </mesh>
      {/* Shikoro (neck guard plates — 3 rings) */}
      <mesh position={[0, 3.65, 0]}>
        <cylinderGeometry args={[0.34, 0.40, 0.12, 14]} />
        <meshBasicMaterial color={s} />
      </mesh>
      <mesh position={[0, 3.52, 0]}>
        <cylinderGeometry args={[0.40, 0.46, 0.10, 14]} />
        <meshBasicMaterial color={s} />
      </mesh>
      {/* Maedate (front crest — small vertical fin) */}
      <mesh position={[0.02, 4.25, 0.18]} rotation={[0.2, 0, 0]}>
        <boxGeometry args={[0.06, 0.28, 0.12]} />
        <meshBasicMaterial color={s} />
      </mesh>

      {/* ── KATANA ── */}
      {/* Tsuka (hilt) */}
      <mesh position={[-1.7, 4.05, 0]} rotation={[0, 0, -0.55]}>
        <cylinderGeometry args={[0.03, 0.035, 0.52, 8]} />
        <meshBasicMaterial color={s} />
      </mesh>
      {/* Tsuba (guard) */}
      <mesh position={[-1.95, 4.35, 0]} rotation={[0, 0, -0.55]}>
        <cylinderGeometry args={[0.075, 0.075, 0.04, 8]} />
        <meshBasicMaterial color={s} />
      </mesh>
      {/* Blade — long, narrow, slight taper */}
      <mesh position={[-2.7, 5.45, 0]} rotation={[0, 0, -0.55]}>
        <boxGeometry args={[0.035, 2.4, 0.01]} />
        <meshBasicMaterial color={s} />
      </mesh>

      {/* ── SAYA (scabbard) at hip ── */}
      <mesh position={[0.55, 1.55, 0.1]} rotation={[0.05, 0, 0.52]}>
        <cylinderGeometry args={[0.04, 0.04, 1.4, 8]} />
        <meshBasicMaterial color={s} />
      </mesh>

      {/* ── OBI (sash) — flowing in wind ── */}
      <mesh position={[-0.7, 1.8, 0]} rotation={[0, 0, 1.15]}>
        <capsuleGeometry args={[0.04, 1.1, 4, 8]} />
        <meshBasicMaterial color={s} />
      </mesh>
      <mesh position={[-0.95, 1.45, 0]} rotation={[0, 0, 1.4]}>
        <capsuleGeometry args={[0.03, 0.85, 4, 8]} />
        <meshBasicMaterial color={s} />
      </mesh>

      {/* ── HAORI (coat) flowing behind ── */}
      <mesh position={[0.1, 2.2, -0.1]} rotation={[0.15, 0, -0.2]}>
        <boxGeometry args={[0.7, 1.6, 0.04]} />
        <meshBasicMaterial color={s} side={THREE.DoubleSide} transparent opacity={0.85} />
      </mesh>
    </group>
  );
};

/* ─────────────────────────────────────────────────────
   Ground — Layer 1
   Large curved hill + subtle grass blades
───────────────────────────────────────────────────── */
const Ground: React.FC = () => {
  const s = C.silhouette;
  // Grass blade positions (deterministic — no Math.random in render)
  const blades = useMemo(() => [
    [2.2, -2.25, -1.5, 0.18],
    [1.7, -2.22, -1.5, -0.12],
    [3.0, -2.28, -1.5, 0.22],
    [-0.5, -2.20, -2.5, 0.08],
    [-1.2, -2.18, -2.5, -0.15],
    [4.2, -2.32, -1.5, 0.30],
    [0.8, -2.24, -2.0, 0.10],
    [-2.0, -2.16, -3.0, 0.05],
    [5.5, -2.35, -1.0, -0.20],
    [-3.5, -2.10, -3.5, 0.12],
  ], []);

  return (
    <>
      {/* Primary hill — large sphere, only top visible */}
      <mesh position={[1, -20, -5]}>
        <sphereGeometry args={[18, 48, 48]} />
        <meshBasicMaterial color={s} />
      </mesh>
      {/* Secondary far hill for depth */}
      <mesh position={[-8, -18, -14]}>
        <sphereGeometry args={[14, 32, 32]} />
        <meshBasicMaterial color="#060106" />
      </mesh>
      {/* Far-right hill */}
      <mesh position={[12, -19, -12]}>
        <sphereGeometry args={[15, 32, 32]} />
        <meshBasicMaterial color="#060106" />
      </mesh>
      {/* Grass blades */}
      {blades.map(([x, y, z, rz], i) => (
        <mesh key={i} position={[x, y, z]} rotation={[0, 0, rz]}>
          <coneGeometry args={[0.04, 0.45, 3]} />
          <meshBasicMaterial color={s} />
        </mesh>
      ))}
    </>
  );
};

/* ─────────────────────────────────────────────────────
   Atmospheric Fog Plane — Layer 2
   A horizontal translucent band at horizon
───────────────────────────────────────────────────── */
const FogLayer: React.FC = () => (
  <mesh position={[0, -2.5, -8]} rotation={[-Math.PI * 0.04, 0, 0]}>
    <planeGeometry args={[40, 3]} />
    <meshBasicMaterial color={C.fog} transparent opacity={0.22} side={THREE.DoubleSide} />
  </mesh>
);

/* ─────────────────────────────────────────────────────
   Floating Petals — decorative, not distracting
───────────────────────────────────────────────────── */
const Petals: React.FC = () => {
  const petalData = useMemo(() => Array.from({ length: 12 }, (_, i) => ({
    x: (i % 4 - 1.5) * 5 + (i * 0.7),
    y: (i % 3) * 2.5 - 1,
    z: -6 - (i % 4) * 2.5,
    rx: i * 0.5,
    rz: i * 0.8,
    speed: 0.04 + (i % 5) * 0.012,
    amp:  0.3 + (i % 3) * 0.15,
    phase: i * 1.1,
  })), []);

  const refs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    petalData.forEach((p, i) => {
      const mesh = refs.current[i];
      if (!mesh) return;
      mesh.position.y = p.y + Math.sin(t * p.speed * 2.5 + p.phase) * p.amp;
      mesh.position.x = p.x + Math.cos(t * p.speed + p.phase) * 0.4;
      mesh.rotation.z = p.rz + t * p.speed * 1.5;
    });
  });

  return (
    <group>
      {petalData.map((p, i) => (
        <mesh
          key={i}
          ref={el => { refs.current[i] = el; }}
          position={[p.x, p.y, p.z]}
          rotation={[p.rx, 0, p.rz]}
        >
          <planeGeometry args={[0.09, 0.13]} />
          <meshBasicMaterial color={C.leaf} side={THREE.DoubleSide} transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
};

/* ─────────────────────────────────────────────────────
   Main Scene
───────────────────────────────────────────────────── */
export const Scene: React.FC = () => {
  const { viewport } = useThree();
  const isMobile = viewport.width < 5;

  const cameraGroupRef = useRef<THREE.Group>(null);
  const samuraiRef     = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Subtle mouse parallax — barely perceptible, makes scene feel alive
    if (cameraGroupRef.current) {
      const mx = (state.pointer.x * viewport.width)  * -0.012;
      const my = (state.pointer.y * viewport.height) * -0.012;
      cameraGroupRef.current.position.x += (mx - cameraGroupRef.current.position.x) * 0.04;
      cameraGroupRef.current.position.y += (my - cameraGroupRef.current.position.y) * 0.04;
    }

    // Samurai subtle breathing — very slow, minimal
    if (samuraiRef.current) {
      samuraiRef.current.position.y = -1.8 + Math.sin(t * 0.8) * 0.012;
    }
  });

  return (
    <>
      {/* ── LAYER 7: Atmospheric background ── */}
      <AtmosphericBackground />

      <group ref={cameraGroupRef}>
        {/* ── LAYER 6: Distant mountains ── */}
        <Mountains />

        {/* ── LAYER 5: Moon (center-right, behind samurai) ── */}
        <Moon />

        {/* ── LAYER 3: Torii gate (left/center, depth) ── */}
        <ToriiGate />

        {/* ── LAYER 2: Fog horizon band ── */}
        <FogLayer />

        {/* ── LAYER 4: Samurai (center-right, in front of moon) ── */}
        <Samurai groupRef={samuraiRef} />

        {/* ── LAYER 1: Ground (foreground hill + grass) ── */}
        <Ground />

        {/* ── Floating petals (foreground detail) — desktop only ── */}
        {!isMobile && <Petals />}
      </group>
    </>
  );
};

export default Scene;
