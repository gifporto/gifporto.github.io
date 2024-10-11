import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Shirt from "./Shirt";
import CameraRig from "./CameraRig";

const CanvasModel = () => {
  return (
    <Canvas camera={{ position: [0, 0, -10], fov: 50 }}>
      <ambientLight intensity={1.0} />
      <Environment preset="city" />
      <CameraRig>
        <Shirt />
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
