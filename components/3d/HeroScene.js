'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function Particles() {
  const ref = useRef();
  const particlesCount = 2000;
  
  const positions = new Float32Array(particlesCount * 3);
  for (let i = 0; i < particlesCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.075;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#3B82F6"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function FloatingGeometry() {
  return (
    <>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[-2, 0, -3]}>
          <torusGeometry args={[0.4, 0.15, 16, 50]} />
          <meshStandardMaterial color="#8B5CF6" wireframe />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={0.8} floatIntensity={0.3}>
        <mesh position={[2.5, -1, -2]}>
          <octahedronGeometry args={[0.4]} />
          <meshStandardMaterial color="#3B82F6" wireframe />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.4}>
        <mesh position={[1, 2, -4]}>
          <icosahedronGeometry args={[0.3]} />
          <meshStandardMaterial color="#60A5FA" wireframe />
        </mesh>
      </Float>
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <Particles />
        <FloatingGeometry />
      </Canvas>
    </div>
  );
}