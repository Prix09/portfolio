'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AvatarCard() {
  const meshRef = useRef();
  const texture = useTexture('/images/profile.jpg');
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={meshRef}>
        {/* Main image plane */}
        <mesh>
          <planeGeometry args={[2, 2.5]} />
          <meshStandardMaterial 
            map={texture} 
            side={THREE.DoubleSide}
            roughness={0.4}
            metalness={0.1}
          />
        </mesh>
        
        {/* Glow effect */}
        <mesh position={[0, 0, -0.1]}>
          <planeGeometry args={[2.3, 2.8]} />
          <meshBasicMaterial 
            color="#3B82F6" 
            transparent 
            opacity={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>
        
        {/* Rim light effect */}
        <mesh position={[0, 0, -0.15]}>
          <planeGeometry args={[2.4, 2.9]} />
          <meshBasicMaterial 
            color="#8B5CF6" 
            transparent 
            opacity={0.2}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function Avatar3D() {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#3B82F6" />
        <pointLight position={[-5, -5, 5]} intensity={0.5} color="#8B5CF6" />
        <spotLight position={[0, 0, 5]} intensity={0.5} />
        <AvatarCard />
      </Canvas>
    </div>
  );
}