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
import { CarOP } from "./asset-components/CarOP";
import { House } from "./asset-components/House.jsx";

function CanvasComponent({ players }) {
  const { color, carColor } = useControls({
    color: "#101622",
    carColor: "#000000",
  });
  console.log(players);
  return (
    <div className="w-screen h-screen" style={{ background: color }}>
      <Canvas
        shadows
        camera={{ position: [4, 0, -12], fov: 12, makeDefault: true }}
      >
        <Stage
          intensity={0.2}
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

          <CarOP carColor={carColor} position={[5, 2, 3]} castShadows />
          {players.map((player) => (
            <Car
              key={player[0]}
              position={player[1].position}
              rotation={player[1].rotation}
              carColor={player[1].color}
            />
          ))}
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
