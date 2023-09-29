import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { BackSide } from "three";

export default function Wheels({ nodes, materials, speed, carColor }) {
  const wheels1Ref = useRef();
  const wheels2Ref = useRef();
  const wheels3Ref = useRef();
  const wheels4Ref = useRef();
  useFrame((_state, delta) => {
    wheels1Ref.current.rotation.y += delta * speed;
    wheels2Ref.current.rotation.y += delta * speed;
    wheels3Ref.current.rotation.y += delta * speed;
    wheels4Ref.current.rotation.y += delta * speed;
  });

  return (
    <group>
      <group
        ref={wheels1Ref}
        name="tipodvigatel2001"
        position={[-1.263, 0.953, -0.51]}
        rotation={[-1.5, 1.36, 1.538]}
        scale={2.114}
      >
        <group
          name="ogonSzadi001"
          position={[0.203, 0, -0.008]}
          rotation={[0, 0.016, 0]}
          scale={[1, 1, 1.465]}
        >
          <mesh
            name="ogonSzadi001_cvet_0"
            geometry={nodes.ogonSzadi001_cvet_0.geometry}
            material={materials.cvet}
          />
        </group>
        <mesh
          name="tipodvigatel2001_Material007_0"
          geometry={nodes.tipodvigatel2001_Material007_0.geometry}
        >
          <meshStandardMaterial color={carColor} side={BackSide} />
        </mesh>
      </group>
      <group
        ref={wheels2Ref}
        name="tipodvigatel2002"
        position={[-1.263, -2.857, -0.457]}
        rotation={[-1.5, 0, 1.538]}
        scale={2.114}
      >
        <group
          name="ogonSzadi002"
          position={[0.203, 0, -0.008]}
          rotation={[0, 0.016, 0]}
          scale={[1, 1, 1.465]}
        >
          <mesh
            name="ogonSzadi002_cvet_0"
            geometry={nodes.ogonSzadi002_cvet_0.geometry}
            material={materials.cvet}
          />
        </group>
        <mesh
          name="tipodvigatel2002_Material007_0"
          geometry={nodes.tipodvigatel2002_Material007_0.geometry}
        >
          <meshStandardMaterial color={carColor} side={BackSide} />
        </mesh>
      </group>
      <group
        ref={wheels3Ref}
        name="tipodvigatel2003"
        position={[1.424, 0.953, -0.497]}
        rotation={[-1.5, 0, 1.538]}
        scale={2.114}
      >
        <group
          name="ogonSzadi003"
          position={[0.203, 0, -0.008]}
          rotation={[0, 0.016, 0]}
          scale={[1, 1, 1.465]}
        >
          <mesh
            name="ogonSzadi003_cvet_0"
            geometry={nodes.ogonSzadi003_cvet_0.geometry}
            material={materials.cvet}
          />
        </group>
        <mesh
          name="tipodvigatel2003_Material007_0"
          geometry={nodes.tipodvigatel2003_Material007_0.geometry}
        >
          <meshStandardMaterial color={carColor} side={BackSide} />
        </mesh>
      </group>
      <group
        ref={wheels4Ref}
        name="tipodvigatel2004"
        position={[1.294, -2.862, -0.41]}
        rotation={[-1.5, 1.36, 1.538]}
        scale={2.114}
      >
        <group
          name="ogonSzadi004"
          position={[0.203, 0, -0.008]}
          rotation={[0, 0.016, 0]}
          scale={[4.613, 1.19, 1.181]}
        >
          <mesh
            name="ogonSzadi004_cvet_0"
            geometry={nodes.ogonSzadi004_cvet_0.geometry}
            material={materials.cvet}
          />
        </group>
        <mesh
          name="tipodvigatel2004_Material007_0"
          geometry={nodes.tipodvigatel2004_Material007_0.geometry}
        >
          <meshStandardMaterial color={carColor} side={BackSide} />
        </mesh>
      </group>
    </group>
  );
}
