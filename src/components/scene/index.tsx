/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 -t ghost.glb
*/
import { useStore } from "@/lib/store"
import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"
import { useRef } from "react"
import * as THREE from "three"

export function Scene(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>()
  const store = useStore()
  const { scene } = useGLTF(`/scenes/${store.scene}.glb`)
  const scale = store.sceneConfig[store.scene]
  return (
    <RigidBody position={[0.5, 0, 0]} type="fixed" colliders="trimesh">
      <group ref={group} {...props} scale={[scale, scale, scale]} dispose={null}>
        <primitive object={scene} dispose={null} />
      </group>
    </RigidBody>
  )
}
export const allScenes = ["farm", "house", "park", "town", "gallery"] as const
allScenes.forEach((type) => {
  useGLTF.preload(`/scenes/${type}.glb`)
})
