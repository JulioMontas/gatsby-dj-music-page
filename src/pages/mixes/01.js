import React from 'react'
import { Canvas } from '@react-three/fiber'
import Layout from "../../components/layout"
import { PerspectiveCamera, OrbitControls, Stars, Text, Text3D, Cone, Float, Center } from '@react-three/drei'
import SongMP3 from "../../assets/test.mp3"
import Liquido from "../../assets/LIQUIDO_Fluid_Regular.json"


function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="yellow" wireframe />
    </mesh>
  );
}
export default function MusicPage() {
  return (
    <Layout>
      <Canvas className="w-[100vw] h-[100vh]">
      <PerspectiveCamera makeDefault fox={75} position={[0,0,15]} />
        <OrbitControls autoRotate />
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[10,15,10]} angle={0.3} />
        <Center>
          <Float floatIntensity={5} speed={2}>
           <Text3D font={Liquido} bevelEnabled bevelSize={0.06}>
              Half And Half - Raw Studio Mix
              <meshNormalMaterial />
            </Text3D>
          </Float>
        </Center>
      </Canvas>
    </Layout>
  )
}
