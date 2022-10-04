import React from 'react'
import { Canvas } from '@react-three/fiber'
import Layout from "../../components/layout"
import { PerspectiveCamera, PositionalAudio, OrbitControls, Stars, Sphere, Cone } from '@react-three/drei'
import SongMP3 from "../../assets/test.mp3"

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
        <OrbitControls autoRotate />
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[10,15,10]} angle={0.3} />
        <Box />
        <Cone>
          <meshBasicMaterial color="yellow" wireframe />
        </Cone>
        <PositionalAudio autoplay loop url={SongMP3} distance={1} />
      </Canvas>
    </Layout>
  )
}
