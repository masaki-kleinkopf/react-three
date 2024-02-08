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
  const helvetikerRegular = new FontLoader().parse(helvetiker)
  let isPositiveRotate;
  // Subscribe this component to the render-loop, rotate the mesh every frame
useFrame((state, delta) => (meshRef.current.rotation.y += delta / 5))
// useFrame((state, delta) => {
//   if (meshRef.current.rotation.x > .1) {isPositiveRotate = false}
//   if (meshRef.current.rotation.x < -.1) {isPositiveRotate = true}
//   if (isPositiveRotate) {
//     return meshRef.current.rotation.x += delta / 8
//   } else {
//     return meshRef.current.rotation.x -= delta / 8
//   }
// })
const handleClick = () => {
  meshRef.current.rotation.x += 100
}
// Return view, these are regular three.js elements expressed in JSX
return (
  <mesh
    {...props}
    ref={meshRef}
    scale={active ? 1 : 1}
    // onClick={(event) => setActive(!active)}
    onClick={handleClick}
    onPointerOver={(event) => setHover(true)}
    onPointerOut={(event) => setHover(false)}
    >
    {/* <cylinderGeometry args={[1, 1, 1, 10, 10]} /> */}
    <textGeometry args={['MK', { font: helvetikerRegular, size:1, height: .5}]}/>
    <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
  </mesh>
)
}
