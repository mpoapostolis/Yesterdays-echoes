/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 -t ghost.glb
*/

import { NpcType } from "@/lib/store"
import { useAnimations, useGLTF } from "@react-three/drei"
import { useEffect, useMemo, useRef } from "react"
import * as THREE from "three"
import { SkeletonUtils } from "three/examples/jsm/Addons.js"

function useGltfMemo(url: string) {
  const gltf = useGLTF(url)
  const scene = useMemo(() => SkeletonUtils.clone(gltf.scene), [gltf.scene])
  return { ...gltf, animations: [...gltf.animations], scene: scene }
}

export function Npc(
  props: JSX.IntrinsicElements["group"] &
    NpcType & {
      isEdit?: boolean
    },
) {
  const group = useRef<THREE.Group>()
  const { scene, animations } = useGltfMemo(`/characters/${props.type}.glb`)
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    const [_, first] = Object.keys(actions)
    actions[first].play()
  }, [actions])
  const commonProps = props.isEdit ? {} : props

  return (
    <group ref={group} {...commonProps} dispose={null}>
      <primitive object={scene} dispose={null} />
    </group>
  )
}
export const allNpcTypes = ["hoodie_guy", "farmer", "woman_1", "woman_2"] as const
allNpcTypes.forEach((type) => {
  useGLTF.preload(`/characters/${type}.glb`)
})
