import React, { useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';

const Shirt = () => {
  const { nodes, materials } = useGLTF('/robocat.glb');
  const [scale, setScale] = useState([0.005, 0.005, 0.005]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { // Ukuran mobile
        setScale([0.007, 0.007, 0.007]); // Skala untuk mobile
      } else { // Ukuran desktop
        setScale([0.007, 0.007, 0.007]); // Skala untuk desktop
      }
    };

    handleResize(); // Set initial scale
    window.addEventListener('resize', handleResize); // Event listener untuk resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup
    };
  }, []);

  return (
    <group scale={scale} position={[0, 0, 0]}>
      <mesh
        geometry={nodes.defaultMaterial_1.geometry}
        material={materials.wire_134006006}
      />
    </group>
  );
};

export default Shirt;
