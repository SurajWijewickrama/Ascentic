import { Canvas } from "@react-three/fiber";
import React from "react";

import {
  OrbitControls,
  Shadow,
  SoftShadows,
  Stage,
  Stats,
} from "@react-three/drei";
import { useControls } from "leva";
import { Car } from "./asset-components/Car";
import { House } from "./asset-components/House.jsx";

function CanvasComponent() {
  const { color, carColor } = useControls({
    color: "#101622",
    carColor: "#000000",
  });

  return (
    <div className="w-screen h-screen" style={{ background: color }}>
      <Canvas
        shadows
        camera={{ position: [4, 0, -12], fov: 12, makeDefault: true }}
      >
        <Stage
          intensity={0.2}
          environment="sunset"
          shadows={{
            type: "accumlative",
            color,
            colorBlend: 2,
            opacity: 2,
          }}
          adjustCamera={0.5}
        >
          <mesh position={[0, -2, 0]}>
            <meshStandardMaterial color={"aquamarine"} />
          </mesh>

          <Car carColor={carColor} position={[5, 2, 3]} castShadows />
          <House position={[0, 0, 0]} />

          <SoftShadows size={10} focus={2} />
          <Shadow
            color="black"
            colorStop={0}
            opacity={0.5}
            fog={false} // Reacts to fog (default=false)
          />
        </Stage>

        <OrbitControls
          makeDefault
          enableRotate={true}
          enablePan={true}
          enableZoom={true}
          quaternion={[1, 69, 5, 1]}
          // minPolarAngle={Map.PI / 2}
          // maxPolarAngle={Map.PI / 2}
        />
        <Stats />
      </Canvas>
    </div>
  );
}

export default CanvasComponent;
