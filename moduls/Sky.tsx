"use client";

import { useGLTF } from "@react-three/drei";

export default function Home() {
  const sky = useGLTF("/assets/3D/sky.glb");

  return (
    <mesh>
      <primitive object={sky.scene} />
    </mesh>
  );
}
