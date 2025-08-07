import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "./Loader";
import Rubiks from "@/moduls/Rubiks";
import { OrbitControls } from "@react-three/drei";

export default function Home() {
  return (
    <div className="  md:hidden absolute w-full ">
      <div className="h-60"></div>
      {/* Mobile Cube */}

      <div className="flex  ">
        <div className="w-200"></div>
        <div className="w-50 h-60">
          {" "}
          <Canvas
            className=" hover:cursor-grab   "
            camera={{ fov: 35, near: 0.1, far: 1000 }}
          >
            <Suspense fallback={<Loader />}>
              <directionalLight position={[1, 1, 1]} intensity={2} />
              <ambientLight intensity={0.5} />
              <pointLight />
              <spotLight />
              <hemisphereLight args={["#b1e1ff", "#000000", 2]} />
              <Rubiks />
              <OrbitControls
                enablePan={false}
                enableZoom={false}
                minDistance={2} // أقرب شي تقدر تزوم فيه
                maxDistance={10} // أبعد شي تقدر تزوم له
                rotateSpeed={0}
              />{" "}
              {/* ✨ هذا المهم */}
            </Suspense>
          </Canvas>
        </div>
        <div className="w-200"></div>
      </div>
    </div>
  );
}
