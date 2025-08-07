"use client";

import { useGLTF } from "@react-three/drei";

export default function Home() {
  const { scene, animations } = useGLTF("/assets/3D/bird.glb");

  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
}
