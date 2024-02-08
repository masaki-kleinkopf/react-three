import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Text from './Text.jsx'
import './App.css'

export default function App() {
  return (
    <main>
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[0, 0, 0]} angle={0.15} penumbra={2} decay={0} intensity={Math.PI} />
        <pointLight position={[-0, -0, -0]} decay={0} intensity={Math.PI} />
        <Text position={[0, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </main>
  )
}



