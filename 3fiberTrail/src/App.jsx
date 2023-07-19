import "./App.css";
import { Canvas } from "@react-three/fiber";
import React, { useMemo } from "react";

import {
  OrbitControls,
  SoftShadows,
  Stage,
  Stats,
  Shadow,
  KeyboardControls,
} from "@react-three/drei";
import { useControls } from "leva";
import { Car } from "./components/Car";
import { House } from "./components/House";

function App() {
  const { color, carColor } = useControls({
    color: "#101622",
    carColor: "#000000",
  });

  return (
    <div className="container" style={{ background: color }}>
      <div className="absolute bg-white bg-opacity-50 top-10 left-10 p-4">
        <h1>
          use A W S D to move around and Q E to do flips, click on the car to go
          turbo boost
        </h1>
      </div>
      <Canvas shadows camera={{ position: [4, 0, -12], fov: 12 }}>
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
          {/* <Sky
            distance={450000}
            sunPosition={[0, 1, 0]}
            inclination={0}
            azimuth={0.25}
          /> */}

          <mesh position={[0, -2, 0]}>
            <meshStandardMaterial color={"aquamarine"} />
          </mesh>
          <Car carColor={carColor} position={[5, 2, 3]} castShadows />
          <House position={[0, 0, 0]} castShadows />
          {/* <Lighthouse /> */}
          {/* <Ocean position={[0, -5, 0]} /> */}
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
          quaternion={[1, 69, 5, 1]}
          // minPolarAngle={Map.PI / 2}
          // maxPolarAngle={Map.PI / 2}
        />
        <Stats />
      </Canvas>
    </div>
  );
}

export default App;
