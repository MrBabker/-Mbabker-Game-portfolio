"use client";

import { Html, useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function Home() {
  const { scene } = useGLTF("/assets/3D/Cons.glb");

  const coinRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const { size, viewport } = useThree();

  const handlePointerDown = () => setIsDragging(true);
  const handlePointerUp = () => setIsDragging(false);
  const handlePointerMove = (e) => {
    if (!isDragging) return;

    const deltaX = e.movementX;
    const deltaY = e.movementY;

    // تدوير الكوين بناءً على حركة الماوس
    coinRef.current.rotation.y += deltaX * 0.01;
    coinRef.current.rotation.x += deltaY * 0.01;
  };

  const [frontVisible, setFrontVisible] = useState(true);
  const { camera } = useThree();

  useFrame((_, delta) => {
    if (!coinRef.current) return;

    coinRef.current.rotation.y += delta * 1.5; // سرعة مستقرة حسب الوقت
    // نحصل على اتجاه الكوين بالنسبة للكاميرا
    const coinWorldPosition = coinRef.current.getWorldPosition(
      new THREE.Vector3()
    );
    const cameraPosition = camera.position;

    // متجه من الكوين إلى الكاميرا
    const vectorToCamera = cameraPosition
      .clone()
      .sub(coinWorldPosition)
      .normalize();

    // متجه أمام الكوين (نقدر نفترض أنه محوره z أو حسب موديلك)
    const coinForward = new THREE.Vector3(0, 0, 1);
    coinForward.applyQuaternion(coinRef.current.quaternion);

    // نحسب الزاوية بين متجه الكوين ومتجه الكاميرا
    const dot = coinForward.dot(vectorToCamera);

    // إذا الدوت موجب (قريب من 1) يعني الجهة الأمامية باتجاه الكاميرا
    setFrontVisible(dot > 0);
  });

  return (
    <group>
      <mesh
        scale={[0.1, 0.1, 0.1]}
        position={[0, -0.3, 0]}
        ref={coinRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onPointerMove={handlePointerMove}
      >
        <primitive object={scene} />
      </mesh>

      {/* النصوص */}
      {frontVisible ? (
        <Html position={[0, 1.2, 0]}>
          <div></div>
        </Html>
      ) : (
        <Html position={[0, 1.2, 0]}>
          <div></div>
        </Html>
      )}
    </group>
  );
}
