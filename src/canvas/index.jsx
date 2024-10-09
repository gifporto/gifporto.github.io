import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import Shirt from './Shirt';
import CameraRig from './CameraRig';

const CanvasModel = () => {
  return (
    <div className="w-24 h-24 fixed z-50 sm:left-0 bottom-0 md:right-0">
      <Canvas
        camera={{ position: [0, 0, -10], fov: 50 }}
      >
        <ambientLight intensity={1.0} />
        <Environment preset="city" />
        <CameraRig>
          <Shirt/>
        </CameraRig>
      </Canvas>
    </div>
  );
};

export default CanvasModel;
