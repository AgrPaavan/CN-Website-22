import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
export function Model(props) {
  const { nodes, materials } = useGLTF("/shuriken_1_-_weapon.glb");

  const shu = useRef();
  useFrame(() => (shu.current.rotation.z -= 0.05));
  return (
    <group
      ref={shu}
      {...props}
      dispose={null}
      scale={0.01}
      position={[0, 0, 0]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[13.48, 14.05, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.shuriken1_low_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/shuriken_1_-_weapon.glb");
