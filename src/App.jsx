import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Text from './Text.jsx'

export default function App() {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[20, 20, 20]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-20, -20, -20]} decay={0} intensity={Math.PI} />
      <Text position={[0, 0, 0]} />
      {/* <OrbitControls /> */}
    </Canvas>
  )
}



