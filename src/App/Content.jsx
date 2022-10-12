import { OrbitControls } from "@react-three/drei";
import ClockAnalogue from "./components/Clock/Analogue";
import LightingStudio from "./components/Lighting/Studio";

const Content = () => {
  return (
    <>
      <group name="Helpers">
        <OrbitControls enablePan={true} enableRotate={true} enableZoom={true} />
      </group>
      <group name="Lighting">
        <LightingStudio />
      </group>
      <group name="Components">
        <ClockAnalogue />
      </group>
    </>
  );
};

export default Content;
