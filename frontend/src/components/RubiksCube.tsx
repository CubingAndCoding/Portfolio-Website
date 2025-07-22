/// <reference types="@react-three/fiber" />
import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';

// Classic Rubik's Cube colors (standard orientation)
const COLORS = [
  '#ffffff', // U - White
  '#ffdc00', // D - Yellow
  '#2ecc40', // F - Green
  '#0074d9', // B - Blue
  '#ff851b', // L - Orange
  '#ff4136', // R - Red
];

function getSolvedState() {
  return Array(6)
    .fill(0)
    .map((_, face) => Array(9).fill(face));
}

function scrambleCube(state: number[][], turns = 20): number[][] {
  const newState = state.map(face => [...face]);
  for (let i = 0; i < turns; i++) {
    const face = Math.floor(Math.random() * 6);
    newState[face].push(newState[face].shift()!);
  }
  return newState;
}

// Helper to rotate a face clockwise in the cube state (full turn logic)
function rotateFace(state: number[][], face: number): number[][] {
  // Copy state
  const newState = state.map(faceArr => [...faceArr]);
  // Rotate the face itself (3x3 array, indices 0-8)
  const f = [...newState[face]];
  newState[face][0] = f[6];
  newState[face][1] = f[3];
  newState[face][2] = f[0];
  newState[face][3] = f[7];
  newState[face][4] = f[4];
  newState[face][5] = f[1];
  newState[face][6] = f[8];
  newState[face][7] = f[5];
  newState[face][8] = f[2];

  // Adjacent stickers (U=0, D=1, F=2, B=3, L=4, R=5)
  // Each entry: [face, indices...]
  // Indices are in the order they should be cycled
  // For each face, define the 12 stickers (3 from each adjacent face) that cycle
  // The order is important and matches the physical cube
  // See: https://ruwix.com/the-rubiks-cube/notation/
  if (face === 2) { // F
    // U 6,7,8 -> R 0,3,6 -> D 2,1,0 -> L 8,5,2 -> U 6,7,8
    const temp = [newState[0][6], newState[0][7], newState[0][8]];
    newState[0][6] = newState[4][8];
    newState[0][7] = newState[4][5];
    newState[0][8] = newState[4][2];
    newState[4][8] = newState[1][2];
    newState[4][5] = newState[1][1];
    newState[4][2] = newState[1][0];
    newState[1][2] = newState[5][0];
    newState[1][1] = newState[5][3];
    newState[1][0] = newState[5][6];
    newState[5][0] = temp[0];
    newState[5][3] = temp[1];
    newState[5][6] = temp[2];
  } else if (face === 3) { // B
    // U 2,1,0 -> L 0,3,6 -> D 6,7,8 -> R 8,5,2 -> U 2,1,0
    const temp = [newState[0][2], newState[0][1], newState[0][0]];
    newState[0][2] = newState[5][8];
    newState[0][1] = newState[5][5];
    newState[0][0] = newState[5][2];
    newState[5][8] = newState[1][6];
    newState[5][5] = newState[1][7];
    newState[5][2] = newState[1][8];
    newState[1][6] = newState[4][0];
    newState[1][7] = newState[4][3];
    newState[1][8] = newState[4][6];
    newState[4][0] = temp[0];
    newState[4][3] = temp[1];
    newState[4][6] = temp[2];
  } else if (face === 0) { // U
    // B 0,1,2 -> R 0,1,2 -> F 0,1,2 -> L 0,1,2 -> B 0,1,2
    const temp = [newState[3][0], newState[3][1], newState[3][2]];
    newState[3][0] = newState[4][0];
    newState[3][1] = newState[4][1];
    newState[3][2] = newState[4][2];
    newState[4][0] = newState[2][0];
    newState[4][1] = newState[2][1];
    newState[4][2] = newState[2][2];
    newState[2][0] = newState[5][0];
    newState[2][1] = newState[5][1];
    newState[2][2] = newState[5][2];
    newState[5][0] = temp[0];
    newState[5][1] = temp[1];
    newState[5][2] = temp[2];
  } else if (face === 1) { // D
    // F 6,7,8 -> R 6,7,8 -> B 6,7,8 -> L 6,7,8 -> F 6,7,8
    const temp = [newState[2][6], newState[2][7], newState[2][8]];
    newState[2][6] = newState[5][6];
    newState[2][7] = newState[5][7];
    newState[2][8] = newState[5][8];
    newState[5][6] = newState[3][6];
    newState[5][7] = newState[3][7];
    newState[5][8] = newState[3][8];
    newState[3][6] = newState[4][6];
    newState[3][7] = newState[4][7];
    newState[3][8] = newState[4][8];
    newState[4][6] = temp[0];
    newState[4][7] = temp[1];
    newState[4][8] = temp[2];
  } else if (face === 4) { // L
    // U 0,3,6 -> F 0,3,6 -> D 0,3,6 -> B 8,5,2 -> U 0,3,6
    const temp = [newState[0][0], newState[0][3], newState[0][6]];
    newState[0][0] = newState[3][8];
    newState[0][3] = newState[3][5];
    newState[0][6] = newState[3][2];
    newState[3][8] = newState[1][6];
    newState[3][5] = newState[1][3];
    newState[3][2] = newState[1][0];
    newState[1][6] = newState[2][6];
    newState[1][3] = newState[2][3];
    newState[1][0] = newState[2][0];
    newState[2][6] = temp[0];
    newState[2][3] = temp[1];
    newState[2][0] = temp[2];
  } else if (face === 5) { // R
    // U 8,5,2 -> B 0,3,6 -> D 8,5,2 -> F 8,5,2 -> U 8,5,2
    const temp = [newState[0][8], newState[0][5], newState[0][2]];
    newState[0][8] = newState[2][8];
    newState[0][5] = newState[2][5];
    newState[0][2] = newState[2][2];
    newState[2][8] = newState[1][8];
    newState[2][5] = newState[1][5];
    newState[2][2] = newState[1][2];
    newState[1][8] = newState[3][0];
    newState[1][5] = newState[3][3];
    newState[1][2] = newState[3][6];
    newState[3][0] = temp[0];
    newState[3][3] = temp[1];
    newState[3][6] = temp[2];
  }
  return newState;
}

const Cubelet: React.FC<{
  position: [number, number, number];
  stickers: (number | null)[]; // [U, D, F, B, L, R]
}> = ({ position, stickers }) => {
  return (
    <group position={position as [number, number, number]}>
      {/* Cubelet body first */}
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#222" metalness={0.2} roughness={0.7} />
      </mesh>
      {/* U (white) */}
      {stickers[0] !== null && (
        <mesh position={[0, 0.501, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.96, 0.96]} />
          <meshStandardMaterial color={COLORS[stickers[0]!]} />
        </mesh>
      )}
      {/* D (yellow) */}
      {stickers[1] !== null && (
        <mesh position={[0, -0.501, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.96, 0.96]} />
          <meshStandardMaterial color={COLORS[stickers[1]!]} />
        </mesh>
      )}
      {/* F (green) */}
      {stickers[2] !== null && (
        <mesh position={[0, 0, 0.501]} rotation={[0, 0, 0]}>
          <planeGeometry args={[0.96, 0.96]} />
          <meshStandardMaterial color={COLORS[stickers[2]!]} />
        </mesh>
      )}
      {/* B (blue) */}
      {stickers[3] !== null && (
        <mesh position={[0, 0, -0.501]} rotation={[0, Math.PI, 0]}>
          <planeGeometry args={[0.96, 0.96]} />
          <meshStandardMaterial color={COLORS[stickers[3]!]} />
        </mesh>
      )}
      {/* L (orange) */}
      {stickers[4] !== null && (
        <mesh position={[-0.505, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <planeGeometry args={[0.96, 0.96]} />
          <meshStandardMaterial color={COLORS[stickers[4]!]} />
        </mesh>
      )}
      {/* R (red) */}
      {stickers[5] !== null && (
        <mesh position={[0.505, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <planeGeometry args={[0.96, 0.96]} />
          <meshStandardMaterial color={COLORS[stickers[5]!]} />
        </mesh>
      )}
    </group>
  );
};

const buttonStyle: React.CSSProperties = {
  background: 'var(--primary-blue, #3b82f6)',
  color: '#fff',
  border: 'none',
  borderRadius: '12px',
  padding: '0.7rem 2rem',
  fontSize: '1.1rem',
  fontWeight: 600,
  cursor: 'pointer',
  boxShadow: '0 2px 8px rgba(37,99,235,0.10)',
  margin: '0 0.5rem',
  transition: 'background 0.15s, transform 0.15s',
};

const buttonHoverStyle: React.CSSProperties = {
  background: 'var(--primary-blue-hover, #2563eb)',
  transform: 'scale(1.05)',
};

type RubiksCubeProps = { canvasKey?: number };

const RubiksCube: React.FC<RubiksCubeProps> = ({ canvasKey }) => {
  const [cubeState, setCubeState] = useState(getSolvedState());
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);

  const handleScramble = () => {
    setCubeState(scrambleCube(getSolvedState()));
  };
  const handleReset = () => {
    setCubeState(getSolvedState());
  };
  const handleTurn = (face: number) => {
    setCubeState(prev => rotateFace(prev, face));
  };

  // Helper to get the sticker for a given face and cubelet position
  function getSticker(face: number, x: number, y: number, z: number) {
    // U (0): y === 1, indices: [x = -1,0,1], [z = -1,0,1] → [0,1,2,3,4,5,6,7,8]
    if (face === 0 && y === 1) return cubeState[0][(x+1)+(z+1)*3];
    // D (1): y === -1, indices: [x+1 + (z+1)*3]
    if (face === 1 && y === -1) return cubeState[1][(x+1) + (z+1)*3];
    // F (2): z === 1, indices: [x+1 + (1-y)*3]
    if (face === 2 && z === 1) return cubeState[2][(x+1) + (1-y)*3];
    // B (3): z === -1, indices: [2-(x+1) + (1-y)*3]
    if (face === 3 && z === -1) return cubeState[3][2-(x+1) + (1-y)*3];
    // L (4): x === -1, indices: [z = -1,0,1], [y = 1,0,-1] → [0,1,2,3,4,5,6,7,8]
    if (face === 4 && x === -1) return cubeState[4][(z+1)+(1-y)*3];
    // R (5): x === 1, indices: [2-(z+1) + (1-y)*3]
    if (face === 5 && x === 1) return cubeState[5][2-(z+1) + (1-y)*3];
    return null;
  }

  const cubelets = [];
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        const stickers: (number | null)[] = [
          getSticker(0, x, y, z), // U
          getSticker(1, x, y, z), // D
          getSticker(2, x, y, z), // F
          getSticker(3, x, y, z), // B
          getSticker(4, x, y, z), // L
          getSticker(5, x, y, z), // R
        ];
        cubelets.push(
          <Cubelet key={`${x},${y},${z}`} position={[x, y, z]} stickers={stickers} />
        );
      }
    }
  }

  return (
    <div
      style={{ width: '100%', maxWidth: 320, aspectRatio: '1 / 1', position: 'relative', margin: '0 auto' }}
    >
      <style>{`canvas.r3f-cube-canvas { width: 100% !important; height: 100% !important; display: block; margin: 0 auto; }`}</style>
      <Canvas key={canvasKey} className="r3f-cube-canvas" camera={{ position: [5, 5, 5], fov: 50 }} shadows>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 10]} intensity={0.7} />
        <group>
          {cubelets}
        </group>
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default RubiksCube;