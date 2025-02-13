import React from 'react';
import * as THREE from 'three';

interface BoxProps {
  vertices: number[];
  indices: number[];
}

export const Box: React.FC<BoxProps> = ({ vertices, indices }) => {
  const geometry = new THREE.BufferGeometry();
  const newVertices = new Float32Array(vertices);
  geometry.setIndex(indices);
  geometry.setAttribute('position', new THREE.BufferAttribute(newVertices, 3));
  const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true,
  });
  return <mesh geometry={geometry} material={material} />;
};
