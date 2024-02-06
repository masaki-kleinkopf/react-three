import { createRoot } from 'react-dom/client'
import  { useRef, useState } from 'react'
import { Canvas, useFrame, extend } from '@react-three/fiber'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import helvetiker from "three/examples/fonts/helvetiker_regular.typeface.json"
import { FontLoader } from "three/examples/jsm/loaders/FontLoader"
extend({ TextGeometry })


export default function Text(props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef(0)
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const [isPositiveRotate, setIsPositiveRotate] = useState(true)
  const helvetikerRegular = new FontLoader().parse(helvetiker)
  // Subscribe this component to the render-loop, rotate the mesh every frame
// useFrame((state, delta) => (meshRef.current.rotation.x += delta))
useFrame((state, delta) => {
  if (meshRef.current.rotation.z > .1) {setIsPositiveRotate(false)}
  if (meshRef.current.rotation.z < -.1) {setIsPositiveRotate(true)}
  console.log(meshRef.current.rotation)
  if (isPositiveRotate) {
    return meshRef.current.rotation.z += delta / 5
  } else {
    return meshRef.current.rotation.z -= delta / 5
  }
})
const handleClick = () => {
  meshRef.current.rotation.x += 100
}
// Return view, these are regular three.js elements expressed in JSX
return (
  <mesh
    {...props}
    ref={meshRef}
    scale={active ? 2 : 1}
    // onClick={(event) => setActive(!active)}
    onClick={handleClick}
    onPointerOver={(event) => setHover(true)}
    onPointerOut={(event) => setHover(false)}
    >
    {/* <cylinderGeometry args={[1, 1, 1, 10, 10]} /> */}
    <textGeometry args={['MK', { font: helvetikerRegular, size:2, height: 1}]}/>
    <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
  </mesh>
)
}

createRoot(document.getElementById('root')).render(
<Canvas>
  <ambientLight intensity={Math.PI / 2} />
  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
  <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
  <Text position={[-1.2, 0, 0]} />
  <Text position={[1.2, 0, 0]} />
</Canvas>,
)
