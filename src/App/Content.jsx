import { OrbitControls } from "@react-three/drei";
import ClockAnalogue from "./components/Clock/Analogue";

const Content = () => {
  return (
    <>
      <group name="Helpers">
        <OrbitControls enablePan={true} enableRotate={true} enableZoom={true} />
      </group>
      <group name="Lighting">
        <ambientLight color={0xffffff} intensity={1} />
      </group>
      <group name="Components">
        <ClockAnalogue />
      </group>
    </>
  );
};

export default Content;
