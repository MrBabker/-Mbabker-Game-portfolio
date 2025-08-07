"use client";

import { useGLTF } from "@react-three/drei";

export default function Home({ isRotating, ...props }) {
  const sky = useGLTF("/assets/3D/plane.glb");

  return (
    <mesh {...props}>
      <primitive object={sky.scene} />
    </mesh>
  );
}
