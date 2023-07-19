import { useThree } from "@react-three/fiber";

export default function CarBody({ nodes, materials, carColor }) {
  return (
    <group>
      <mesh name="car_Material_0" geometry={nodes.car_Material_0.geometry}>
        <meshStandardMaterial color={carColor} />
      </mesh>
      <mesh
        name="tipodvigatel2003_Material007_0"
        geometry={nodes.tipodvigatel2003_Material007_0.geometry}
        material={materials["Material.007"]}
      />
      <mesh name="car_cvet_0" geometry={nodes.car_cvet_0.geometry}>
        <meshStandardMaterial color={carColor} />
      </mesh>
      <mesh
        name="car_Material003_0"
        geometry={nodes.car_Material003_0.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        name="car_Material004_0"
        geometry={nodes.car_Material004_0.geometry}
        material={materials["Material.004"]}
      />
      <mesh
        name="car_Material005_0"
        geometry={nodes.car_Material005_0.geometry}
        material={materials["Material.005"]}
      />
      <mesh
        name="car_Material007_0"
        geometry={nodes.car_Material007_0.geometry}
        material={materials["Material.007"]}
      >
        <meshStandardMaterial color={carColor} />
      </mesh>
      <mesh
        name="car_Material_0"
        geometry={nodes.car_Material_0.geometry}
        material={materials["Material.001"]}
      >
        <meshStandardMaterial color={carColor} />
      </mesh>
    </group>
  );
}
