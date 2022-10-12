import { useHelper } from "@react-three/drei";
import { folder, useControls } from "leva";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

const LightingStudio = () => {
  const { showHelpers, helperSize } = useControls("Lightings", {
    Helpers: folder({
      helperSize: { label: "Size", max: 2, min: 0, value: 0.5 },
      showHelpers: { label: "Show", value: true },
    }),
  });

  const ambientLight = useControls("Lightings", {
    "Ambient Light": folder({
      color: { label: "Color", value: "hsl(0, 0%, 100%)" },
      intensity: { label: "Intensity", max: 2, min: 0, value: 0.01 },
    }),
  });
  const frontLight = useControls("Lightings", {
    "Front Light": folder({
      castShadow: { label: "Cast Shadow", value: true },
      color: { label: "Color", value: "hsl(0, 0%, 70%)" },
      intensity: { label: "Intensity", max: 2, min: 0, value: 0.4 },
      position: { label: "Position", value: { x: 0, y: 2, z: 4 } },
    }),
  });
  const leftLight = useControls("Lightings", {
    "Left Light": folder({
      castShadow: { label: "Cast Shadow", value: false },
      color: { label: "Color", value: "hsl(30, 100%, 70%)" },
      intensity: { label: "Intensity", max: 2, min: 0, value: 1.0 },
      position: { label: "Position", value: { x: -4, y: 0, z: 0 } },
    }),
  });
  const rightLight = useControls("Lightings", {
    "Right Light": folder({
      castShadow: { label: "Cast Shadow", value: false },
      color: { label: "Color", value: "hsl(210, 100%, 70%)" },
      intensity: { label: "Intensity", max: 2, min: 0, value: 1.0 },
      position: { label: "Position", value: { x: 4, y: 0, z: 0 } },
    }),
  });

  const nullRef = { current: null };
  const frontLightRef = useRef();
  const leftLightRef = useRef();
  const rightLightRef = useRef();

  useHelper(
    showHelpers ? frontLightRef : nullRef,
    DirectionalLightHelper,
    helperSize,
    frontLight.color
  );
  useHelper(
    showHelpers ? leftLightRef : nullRef,
    DirectionalLightHelper,
    helperSize,
    leftLight.color
  );
  useHelper(
    showHelpers ? rightLightRef : nullRef,
    DirectionalLightHelper,
    helperSize,
    rightLight.color
  );

  return (
    <group name="Studio Lighting">
      <ambientLight
        color={ambientLight.color}
        intensity={ambientLight.intensity}
        name="Ambient Light"
      />
      <directionalLight
        castShadow={frontLight.castShadow}
        color={frontLight.color}
        intensity={frontLight.intensity}
        name="Front Light"
        position={[
          frontLight.position.x,
          frontLight.position.y,
          frontLight.position.z,
        ]}
        ref={frontLightRef}
      />
      <directionalLight
        castShadow={leftLight.castShadow}
        color={leftLight.color}
        intensity={leftLight.intensity}
        name="Left Light"
        position={[
          leftLight.position.x,
          leftLight.position.y,
          leftLight.position.z,
        ]}
        ref={leftLightRef}
      />
      <directionalLight
        castShadow={leftLight.castShadow}
        color={rightLight.color}
        intensity={rightLight.intensity}
        name="Right Light"
        position={[
          rightLight.position.x,
          rightLight.position.y,
          rightLight.position.z,
        ]}
        ref={rightLightRef}
      />
    </group>
  );
};

export default LightingStudio;
