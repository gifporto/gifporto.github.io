import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

const CameraRig = ({ children }) => {
  const group = useRef();
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window;
      setPointer({
        x: (event.clientX / innerWidth) * 1.5 - 0.5,  // Nilai antara -1 dan 1
        y: -(event.clientY / innerHeight) * 1.5 + 0.5 // Nilai antara -1 dan 1
      });
    };

    // Pasang event listener di window
    window.addEventListener('mousemove', handleMouseMove);

    // Bersihkan event listener saat komponen di-unmount
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    easing.dampE(
      group.current.rotation,
      [pointer.y, pointer.x, 0],
      0.20,
      delta
    );
  });

  return <group ref={group}>{children}</group>;
};

export default CameraRig;
