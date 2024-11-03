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
        x: (event.clientX / innerWidth) * 1.5 - 0.5,
        y: -(event.clientY / innerHeight) * 1.5 + 0.5,
      });
    };

    const handleTouchMove = (event) => {
      const touch = event.touches[0]; // Ambil posisi sentuh pertama
      const { innerWidth, innerHeight } = window;
      setPointer({
        x: (touch.clientX / innerWidth) * 1.5 - 0.5,
        y: -(touch.clientY / innerHeight) * 1.5 + 0.5,
      });
    };

    // Pasang event listener di window
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Bersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  useFrame((state, delta) => {
    // Mengatur rotasi berdasarkan pointer dengan damping
    easing.dampE(
      group.current.rotation,
      [pointer.y, pointer.x, 0],
      0.20,
      delta
    );

    // Menambahkan rotasi berputar terus menerus
    group.current.rotation.y += delta; // Ganti delta dengan nilai kecepatan rotasi yang diinginkan
  });

  return <group ref={group}>{children}</group>;
};

export default CameraRig;
