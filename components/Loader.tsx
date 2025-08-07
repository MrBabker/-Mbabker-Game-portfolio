"use client";
import { Html } from "@react-three/drei";

export default function Home() {
  return (
    <Html>
      <div className="w-full h-full flex justify-center items-center">
        <div
          className="w-10 h-10 border-8 border-blue-400/20
     rounded-full animate-spin"
        ></div>
      </div>
    </Html>
  );
}
