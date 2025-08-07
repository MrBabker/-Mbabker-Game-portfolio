"use client";

import { Html, useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { motion } from "framer-motion";

export default function Home() {
  const { scene } = useGLTF("/assets/3D/rubk.glb");

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

  const [frontVisible, setFrontVisible] = useState(0);
  const { camera } = useThree();

  useFrame((_, delta) => {
    if (!coinRef.current) return;

    coinRef.current.rotation.y += delta * 0.5; // سرعة مستقرة حسب الوقت
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

    if (dot > 0.7) {
      setFrontVisible(0); // مواجه تمامًا
    } else if (dot > 0) {
      setFrontVisible(1); // شبه مواجه
    } else if (dot > -0.7) {
      setFrontVisible(2); // شبه خلف
    } else {
      setFrontVisible(3); // خلف تمامًا
    }
  });

  return (
    <group>
      <mesh
        scale={[0.25, 0.25, 0.25]}
        position={[0, 0, 0]}
        rotation={[0.3, 0, 0]}
        ref={coinRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onPointerMove={handlePointerMove}
      >
        <primitive object={scene} />
      </mesh>

      {/* النصوص */}
      {frontVisible === 0 ? (
        <Html position={[0, 1.2, 0]}>
          <motion.button
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 250 }}
            viewport={{ once: false, amount: 0 }}
            className="  top-61  fixed overflow-hidden px-9 py-2  mr-2  rounded-xl m-2 hover:text-white text-cyan-200 font-semibold shadow-md group bg-blue-900"
          >
            {/* النص فوق الطبقة */}
            {/*<span className="select-none relative ">React.js</span>*/}
            <span className="select-none relative ">Unity 3D </span>
            {/* طبقة التعبئة */}
          </motion.button>
        </Html>
      ) : (
        <></>
      )}
      {frontVisible === 1 ? (
        <Html position={[0, 1.2, 0]}>
          <motion.button
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 250 }}
            viewport={{ once: false, amount: 0 }}
            className="  top-61  fixed overflow-hidden px-9 py-2  mr-2  rounded-xl m-2 hover:text-white text-cyan-200 font-semibold shadow-md group bg-blue-900 "
          >
            {/* النص فوق الطبقة */}
            <span className="select-none relative ">UI/UX</span>

            {/* طبقة التعبئة */}
          </motion.button>
        </Html>
      ) : (
        <></>
      )}
      {frontVisible === 2 ? (
        <Html position={[0, 1.2, 0]}>
          <motion.button
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 250 }}
            viewport={{ once: false, amount: 0 }}
            className="  top-61  fixed overflow-hidden px-9 py-2  mr-2  rounded-xl m-2 hover:text-white text-cyan-200 font-semibold shadow-md group bg-blue-900 "
          >
            {/* النص فوق الطبقة */}
            {/*<span className="select-none relative ">Framework</span>*/}
            <span className="select-none relative ">multiplayer</span>
            {/* طبقة التعبئة */}
          </motion.button>
        </Html>
      ) : (
        <></>
      )}
      {frontVisible === 3 ? (
        <Html position={[0, 1.2, 0]}>
          <motion.button
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 250 }}
            viewport={{ once: false, amount: 0 }}
            className="  top-61 fixed overflow-hidden px-9 py-2  mr-2  rounded-xl m-2 hover:text-white text-cyan-200 font-semibold shadow-md group bg-blue-900 "
          >
            {/* النص فوق الطبقة */}
            <span className="select-none relative  w-200">3D moduling</span>

            {/* طبقة التعبئة */}
          </motion.button>
        </Html>
      ) : (
        <></>
      )}
    </group>
  );
}
