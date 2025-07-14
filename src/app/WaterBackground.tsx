"use client";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Water } from "three-stdlib";
import { TextureLoader, Texture } from "three";
import { useLoader } from "@react-three/fiber";
import { Sky } from "@react-three/drei";

// Encapsulate mesh in its own component so hooks are inside <Canvas>
function WaterMesh() {
  const ref = useRef<THREE.Mesh>(null);

  // Load normals texture (returns Texture)
  const waterNormals = useLoader(
    TextureLoader,
    "https://threejs.org/examples/textures/waternormals.jpg"
  );
  // Enable repeating
  waterNormals.wrapS = THREE.RepeatWrapping;
  waterNormals.wrapT = THREE.RepeatWrapping;

  // Create Water material once
  const water = useMemo(() => {
    const geometry = new THREE.PlaneGeometry(10000, 10000);
    const material = new Water(geometry, {
      textureWidth: 1024,
      textureHeight: 1024,
      waterNormals: waterNormals as Texture,
      sunDirection: new THREE.Vector3(-1, 0.15, -1).normalize(),
      sunColor: 0xffe6b0,
      waterColor: 0x0a2342,
      distortionScale: 5.5,
      fog: false,
    });
    material.rotation.x = -Math.PI / 2;
    return material;
  }, [waterNormals]);

  // Animate water
  useFrame((_, delta) => {
    if (ref.current) {
      (ref.current.material as any).uniforms.time.value += delta;
    }
  });

  return <primitive ref={ref} object={water} />;
}

export default function WaterBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <Canvas camera={{ position: [0, 6, 30], fov: 70 }}>
        {/* Sky for sunset background */}
        <Sky
          distance={450000}
          sunPosition={[-10, 2, -10]}
          inclination={0.03}
          azimuth={0.22}
          mieCoefficient={0.01}
          mieDirectionalG={0.9}
          rayleigh={2}
          turbidity={10}
        />
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[-10, 2, -10]}
          intensity={1.3}
          color={0xffe6b0}
        />
        {/* Water mesh */}
        <WaterMesh />
      </Canvas>
    </div>
  );
}
