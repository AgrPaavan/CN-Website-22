import {
  Html,
  Image as ImageImpl,
  Preload,
  Scroll,
  ScrollControls,
  Text3D,
  useScroll,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import * as THREE from "three";
import Footer from "../Footer/Footer";
import { Cloud1, Cloud2 } from "../Smoke/Smoke";
// import style from "./Team.module.css";

function Texts() {
  const angleToRadians = (angleInDeg) => (Math.PI / 180) * angleInDeg;
  const { width, height } = useThree((state) => state.viewport);
  const data = useScroll();
  const text = useRef();
  useFrame(({ mouse }) => {
    text.current.children[1].position.x = (mouse.x * width) / 2;
    text.current.children[1].position.y =
      -(data.scroll.current * 31) + (mouse.y * height) / 2;
    text.current.children[1].position.z = data.scroll.current * 6.5;
    text.current.children[0].position.x = (mouse.x * width) / 2;
    text.current.children[0].position.y =
      -(data.scroll.current * 31) + (mouse.y * height) / 2;
    text.current.children[9].position.x = -16.6;
    text.current.children[9].position.y = -110;
    text.current.children[9].position.z = -5;
  });
  return (
    <>
      <group ref={text}>
        <pointLight
          position={[0, 0, 0.6]}
          color="#F26E26"
          intensity={6}
          rotation={[-angleToRadians(90), 0, 0]}
        />
        <spotLight
          position={[0, 0, 0.6]}
          color="#EE4623"
          intensity={6}
          rotation={[-angleToRadians(90), 0, 0]}
        />
        <Text3D
          letterSpacing={0}
          size={0.5}
          height={0.05}
          font="Inter_bold.json"
          position={[-width * 0.055, 1, 0]}
        >
          Team
          <meshStandardMaterial color="white" metalness={1} opacity={0} />
        </Text3D>
        <Text3D
          letterSpacing={0}
          bevelEnabled
          bevelThickness={0}
          size={0.3}
          font="Inter_bold.json"
          height={0.05}
          position={[-width * 0.055, -6.3, 0]}
        >
          President
          <meshStandardMaterial color="white" metalness={1} opacity={0} />
        </Text3D>
        <Text3D
          letterSpacing={0.01}
          bevelEnabled
          height={0.01}
          bevelThickness={0}
          bevelSize={0.001}
          size={width * 0.009}
          font="Inter_bold.json"
          position={[-width * 0.25, -11, 2]}
        >
          Vice President
          <meshStandardMaterial color="white" metalness={1} opacity={0} />
        </Text3D>
        <Text3D
          letterSpacing={0.01}
          bevelEnabled
          height={0.05}
          bevelSize={0.001}
          bevelThickness={0}
          size={width * 0.009}
          font="Inter_bold.json"
          position={[-width * 0.055, -11, 2]}
        >
          {`Outreach Officer`}
          <meshStandardMaterial color="white" metalness={1} opacity={0} />
        </Text3D>
        <Text3D
          letterSpacing={0.01}
          bevelEnabled
          height={0.01}
          bevelSize={0.001}
          bevelThickness={0}
          size={width * 0.009}
          font="Inter_bold.json"
          position={[width * 0.16, -11, 2]}
        >
          {`Project Lead`}
          <meshStandardMaterial color="white" metalness={1} opacity={0} />
        </Text3D>
        <Text3D
          letterSpacing={0.01}
          bevelEnabled
          height={0.01}
          bevelSize={0.001}
          bevelThickness={0}
          size={width * 0.009}
          font="Inter_bold.json"
          position={[-width * 0.15, -15.3, 2.5]}
        >
          {`Tech Lead`}
          <meshStandardMaterial color="white" metalness={1} opacity={0} />
        </Text3D>
        <Text3D
          letterSpacing={0.01}
          bevelEnabled
          height={0.01}
          bevelSize={0.001}
          bevelThickness={0}
          size={width * 0.009}
          font="Inter_bold.json"
          position={[width * 0.06, -15.3, 2.5]}
        >
          {`Non-Tech Lead`}
          <meshStandardMaterial color="white" metalness={1} opacity={0} />
        </Text3D>
        <Html>
          <Footer />
        </Html>
      </group>
    </>
  );
}
function Image({ c = new THREE.Color(), ...props }) {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  useFrame(() => {
    ref.current.material.color.lerp(
      c.set(hovered ? "#ccc" : "#aaa"),
      hovered ? 0.4 : 0.05,
    );
  });
  return (
    <ImageImpl
      ref={ref}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...props}
    />
  );
}
function Images() {
  const { width, height } = useThree((state) => state.viewport);
  const data = useScroll();
  const group = useRef();
  useFrame(() => {
    group.current.children[0].material.zoom = data.range(0, 0.1);
    group.current.children[1].material.zoom = data.range(0.15, 0.2);
    group.current.children[2].material.zoom = data.range(0.15, 0.2);
    group.current.children[3].material.zoom = data.range(0.15, 0.2);
    group.current.children[4].material.zoom = data.range(0.25, 0.2);
    group.current.children[5].material.zoom = data.range(0.25, 0.2);
    group.current.children[6].material.zoom = data.range(0.3, 0.31);
    group.current.children[7].material.zoom = data.range(0.3, 0.31);
    group.current.children[8].material.zoom = data.range(0.3, 0.31);
    group.current.children[9].material.zoom = data.range(0.3, 0.31);
    group.current.children[10].material.zoom = data.range(0.3, 0.31);
    group.current.children[11].material.zoom = data.range(0.3, 0.31);
    group.current.children[12].material.zoom = data.range(0.3, 0.31);
    group.current.children[13].material.zoom = data.range(0.5, 0.31);
  });
  return (
    <>
      <group ref={group}>
        <Image
          position={[0, -height / 2.5, 0]}
          scale={5}
          url="./assetsTeam/img1.jpg"
        />
        <Image
          position={[-width * 0.2, -height / 0.8, 2]}
          scale={width * 0.12}
          url="./assetsTeam/img1.jpg"
        />
        <Image
          position={[width * 0, -height / 0.8, 2]}
          scale={width * 0.12}
          url="./assetsTeam/trip2.jpg"
        />
        <Image
          position={[width * 0.2, -height / 0.8, 2]}
          scale={width * 0.12}
          url="./assetsTeam/img8.jpg"
        />
        <Image
          position={[-width * 0.11, -height / 0.55, 2.5]}
          scale={width * 0.12}
          url="./assetsTeam/trip4.jpg"
        />
        <Image
          position={[width * 0.11, -height / 0.55, 2.5]}
          scale={width * 0.12}
          url="./assetsTeam/trip4.jpg"
        />
        <Image
          position={[-width * 0.14, -height * 2.2, 3]}
          scale={width * 0.06}
          url="./assetsTeam/img3.jpg"
        />
        <Image
          position={[-width * 0.045, -height * 2.2, 3]}
          scale={width * 0.06}
          url="./assetsTeam/img3.jpg"
        />
        <Image
          position={[width * 0.05, -height * 2.2, 3]}
          scale={width * 0.06}
          url="./assetsTeam/img3.jpg"
        />
        <Image
          position={[width * 0.145, -height * 2.2, 3]}
          scale={width * 0.06}
          url="./assetsTeam/img3.jpg"
        />
        <Image
          position={[-width * 0.1, -height * 2.4, 3]}
          scale={width * 0.06}
          url="./assetsTeam/img3.jpg"
        />
        <Image
          position={[width * 0, -height * 2.4, 3]}
          scale={width * 0.06}
          url="./assetsTeam/img3.jpg"
        />
        <Image
          position={[width * 0.1, -height * 2.4, 3]}
          scale={width * 0.06}
          url="./assetsTeam/img3.jpg"
        />
        <Image
          position={[0, -height * 3 - height / 4, 0]}
          scale={[width * 0.9, height * 0.7, 1]}
          url="./assetsTeam/img7.jpg"
        />
      </group>
    </>
  );
}

export default function Team() {
  return (
    <>
      <div className="h-screen">
        <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
          <Cloud1 />
          <Cloud2 />
          <Suspense fallback={null}>
            <ScrollControls damping={4} pages={5}>
              <Scroll>
                <Images />
              </Scroll>

              <Scroll>
                <Texts />
              </Scroll>
            </ScrollControls>

            <Preload />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

// import React from 'react'
// import style1 from './Team.module.css'
// import rect from './assets/Rectangle 59.svg'
// import element from './assets/Group 57.svg'
// import rectblur from './assets/Rectangle 68.svg'
// import rectblur2 from './assets/Rectangle 73.svg'
// import { motion } from "framer-motion"
// import bg from './assets/bg.svg'
// import studio from '@theatre/studio'
// import { Canvas } from '@react-three/fiber'
// import extension from '@theatre/r3f/dist/extension'
// import { Html, Stats, Text3D } from "@react-three/drei";
// import Cloud from '../Smoke/Smoke'
// import Navbar from '../Navbar/Navbar'
// function Team() {

//     return (
//         <>
//         <div>
//             <Navbar/>
//         </div>
//         <div className='h-[500vh] w-full'>
//         <Canvas>
//             <Cloud/>

//             <ambientLight intensity={2} />
//             <pointLight theatreKey="pLight" position={[40, 40,40]} />
//             <group position={[-.25,3.9,0]} scale={1}>
//                 <mesh>
//                 <meshStandardMaterial color={"red"} />
//                 <Html>

//                     <div>
//                     <div className={`relative md:text-8xl text-5xl text-transparent bg-clip-text text-center font-extrabold md:mb-10 md:pt-20 mt-12 ${style1.teamheading}`}>TEAM</div>
//                     <div className='relative p-10 text-center mt-20'>
//                         <img src={rect} className='mx-auto'/>
//                         <img src={element} className='mx-auto'/>
//                     </div>
//                     <div className='relative md:flex justify-center pb-20'>
//                         <img src={rect} className='mx-auto'/>
//                         <img src={rect} className='mx-auto'/>
//                         <img src={rect} className='mx-auto'/>
//                         <img src={rect} className='mx-auto'/>
//                     </div>

//                     <div className='relative md:flex blur-md justify-center pt-10 pb-20'>
//                         <img src={rectblur} className='mx-auto'/>
//                         <img src={rectblur} className='mx-auto'/>
//                         <img src={rectblur} className='mx-auto'/>
//                     </div>
//                     <div className='relative md:flex blur-md px-20 mx-2 justify-center pt-10 pb-20 mb-10'>
//                         <img src={rectblur2} className='mx-auto'/>
//                         <img src={rectblur2} className='mx-auto'/>
//                         <img src={rectblur2} className='mx-auto'/>
//                         <img src={rectblur2} className='mx-auto'/>
//                         <img src={rectblur2} className='mx-auto'/>
//                     </div>
//                     </div>
//                 </Html>
//                 </mesh>
//             </group>
//         </Canvas>
//         </div>

//         </>

//     )
// }

// export default Team;
