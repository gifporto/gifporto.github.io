import React, { useEffect, useState, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Shirt = () => {
  const { nodes, materials } = useGLTF('/robocat.glb');
  const [scale, setScale] = useState([0.005, 0.005, 0.005]);
  const groupRef = useRef();

  useEffect(() => {
    console.log(nodes); // Debugging untuk melihat struktur nodes
    console.log(materials); // Debugging untuk melihat struktur materials
  }, [nodes, materials]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { // Ukuran mobile
        setScale([0.005, 0.005, 0.005]); // Skala untuk mobile
      } else { // Ukuran desktop
        setScale([0.005, 0.005, 0.005]); // Skala untuk desktop
      }
    };

    handleResize(); // Set initial scale
    window.addEventListener('resize', handleResize); // Event listener untuk resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup
    };
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01; // Menambahkan rotasi berputar terus menerus
    }
  });

  return (
    <group ref={groupRef} scale={scale} position={[0, 0, 0]}>
      <mesh
        geometry={nodes.defaultMaterial_1.geometry}
        material={materials.wire_134006006}
      />
    </group>
  );
};

export default Shirt;
