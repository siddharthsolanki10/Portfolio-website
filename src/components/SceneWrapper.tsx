import React from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from './Scene';

const SceneWrapper: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 6], fov: 48 }}
      dpr={[1, 1.5]}      // cap at 1.5 for perf — no perceptible quality loss at 60fps
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: false, powerPreference: 'high-performance' }}
    >
      <Scene />
    </Canvas>
  );
};

export default SceneWrapper;
