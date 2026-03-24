"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Points, PointMaterial } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function WebSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.1;
    meshRef.current.rotation.y = t * 0.15;
    
    // Parallax logic
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, -window.scrollY * 0.003, 0.05);
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -8]}>
      {/* A highly detailed icosahedron creates a web-like sphere when using wireframe */}
      <icosahedronGeometry args={[5, 2]} />
      <meshStandardMaterial color="#E62429" wireframe transparent opacity={0.15} emissive="#E62429" emissiveIntensity={0.5} />
    </mesh>
  );
}

function ShatteredDimensions() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    
    // Parallax
    const targetX = (state.pointer.x * 2);
    const targetY = (state.pointer.y * 2);
    const scrollY = window.scrollY;
    
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetY * 0.1, 0.05);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX * 0.1 + t * 0.05, 0.05);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, -scrollY * 0.005, 0.05);
  });

  return (
    <group ref={groupRef}>
      {/* Hexagon Web Node */}
      <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[2.5, 1.5, -2]} rotation={[Math.PI / 4, 0, 0]}>
          <cylinderGeometry args={[0.8, 0.8, 0.1, 6]} />
          <meshStandardMaterial color="#00ffff" wireframe emissive="#00ffff" emissiveIntensity={0.8} />
        </mesh>
      </Float>
      
      {/* Floating Dimensional Shard (Red) */}
      <Float speed={2.5} rotationIntensity={3} floatIntensity={2}>
        <mesh position={[-3, -1, -3]}>
          <tetrahedronGeometry args={[1.2, 0]} />
          <meshStandardMaterial color="#E62429" wireframe emissive="#E62429" emissiveIntensity={0.8} />
        </mesh>
      </Float>

      {/* Floating Dimensional Shard (Blue) */}
      <Float speed={3} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[1.5, -3, -4]} scale={[0.5, 1.5, 0.5]}>
          <octahedronGeometry args={[1.2, 0]} />
          <meshStandardMaterial color="#0066FF" wireframe emissive="#0066FF" emissiveIntensity={0.8} />
        </mesh>
      </Float>

      {/* Another Hexagon Shard */}
      <Float speed={1.5} rotationIntensity={2.5} floatIntensity={1.5}>
        <mesh position={[-2, 2.5, -4]} rotation={[0, Math.PI / 4, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 0.1, 6]} />
          <meshStandardMaterial color="#E62429" wireframe emissive="#E62429" emissiveIntensity={0.5} />
        </mesh>
      </Float>
    </group>
  );
}

// Colored Particle Fields representing floating dimension dust / multiverse sparks
function MultiverseDust({ count, color, speedScale = 1 }: { count: number; color: string; speedScale?: number }) {
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 20; 
    }
    return pos;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02 * speedScale;
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.01 * speedScale;
      const scrollY = window.scrollY;
      pointsRef.current.position.y = THREE.MathUtils.lerp(pointsRef.current.position.y, -scrollY * 0.003, 0.1);
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color={color} size={0.05} sizeAttenuation={true} depthWrite={false} opacity={0.6} />
    </Points>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-[1] pointer-events-none">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        
        <WebSphere />
        <ShatteredDimensions />
        
        {/* Layered Spider-Verse colored Multiverse Dust */}
        <MultiverseDust count={500} color="#E62429" speedScale={0.8} /> {/* Red dust */}
        <MultiverseDust count={500} color="#0066FF" speedScale={1.2} /> {/* Blue dust */}
        <MultiverseDust count={500} color="#00ffff" speedScale={1.5} /> {/* Cyan dust */}
        <MultiverseDust count={1500} color="#ffffff" speedScale={0.5} /> {/* White background dust */}
      </Canvas>
    </div>
  );
}
