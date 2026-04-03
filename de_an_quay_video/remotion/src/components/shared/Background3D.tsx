import { ThreeCanvas } from "@remotion/three";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { useMemo } from "react";

interface Background3DProps {
  accentColor?: string;
}

export const Background3D: React.FC<Background3DProps> = ({
  accentColor = "#D97706",
}) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const t = frame * 0.02;

  const particles = useMemo(() => {
    const arr = new Float32Array(300 * 3);
    for (let i = 0; i < 300; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, []);

  return (
    <ThreeCanvas
      width={width}
      height={height}
      camera={{ fov: 50, position: [0, 0, 8], near: 0.1, far: 50 }}
      className="absolute top-0 left-0"
    >
      {/* Warm off-white background matching light theme */}
      <color attach="background" args={["#F7F3EE"]} />
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} />

      {/* Floating wireframe octahedron - amber gold */}
      <mesh
        position={[-4, 2, -2]}
        rotation={[t * 0.5, t * 0.3, t * 0.2]}
        scale={1.2}
      >
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color={accentColor} wireframe transparent opacity={0.18} />
      </mesh>

      {/* Floating wireframe icosahedron - warm gold */}
      <mesh
        position={[4, -1, -3]}
        rotation={[t * 0.3, t * 0.5, t * 0.1]}
        scale={1.0}
      >
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#B45309" wireframe transparent opacity={0.15} />
      </mesh>

      {/* Floating torus - amber */}
      <mesh
        position={[-2, -2.5, -1]}
        rotation={[t * 0.4, t * 0.2, t * 0.6]}
        scale={0.8}
      >
        <torusGeometry args={[1, 0.35, 8, 16]} />
        <meshStandardMaterial color={accentColor} wireframe transparent opacity={0.15} />
      </mesh>

      {/* Small octahedron top-right - warm taupe */}
      <mesh
        position={[5, 3, -4]}
        rotation={[t * 0.6, t * 0.4, 0]}
        scale={0.6}
      >
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#78716C" wireframe transparent opacity={0.12} />
      </mesh>

      {/* Large slow icosahedron center-back - faint bronze */}
      <mesh
        position={[0, 0, -5]}
        rotation={[t * 0.1, t * 0.15, t * 0.05]}
        scale={2.0}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#92400E" wireframe transparent opacity={0.06} />
      </mesh>

      {/* Torus top-left - warm taupe */}
      <mesh
        position={[-5, 1, -4]}
        rotation={[t * 0.2, t * 0.6, t * 0.3]}
        scale={0.7}
      >
        <torusGeometry args={[1, 0.3, 8, 16]} />
        <meshStandardMaterial color="#78716C" wireframe transparent opacity={0.1} />
      </mesh>

      {/* Particle field */}
      <points rotation={[0, t * 0.1, 0]}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particles, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color={accentColor}
          size={0.06}
          transparent
          opacity={0.2}
          sizeAttenuation
        />
      </points>
    </ThreeCanvas>
  );
};
