import { Text } from "@react-three/drei";
import { useRef } from "react";
import { DoubleSide, MathUtils } from "three";

import { CLOCK } from "./Analogue.config";

const SAFE_OFFSET = 0.001;

const angleStart = 90;

function isFirstHour(mark) {
  return !(mark % CLOCK.HH);
}

function isHour(mark) {
  return !(mark % (CLOCK.MM / CLOCK.HH));
}

const ClockAnalogue = (props) => {
  const handHoursRef = useRef();

  return (
    <group name="Analogue Clock" {...props}>
      <group name="Face">
        <group name="Plate">
          <mesh receiveShadows={true}>
            <circleGeometry args={[CLOCK.SIZE, CLOCK.MM]} />
            <meshStandardMaterial
              color={0x999999}
              opacity={0.75}
              side={DoubleSide}
              transparent={true}
            />
          </mesh>
        </group>
        <group name="Marks" rotation={[0, 0, MathUtils.degToRad(angleStart)]}>
          {Array(CLOCK.MM)
            .fill(null)
            .map((value, index) => {
              const angle = -(360 / CLOCK.MM) * index;

              return (
                <group name="Mark" rotation={[0, 0, MathUtils.degToRad(angle)]}>
                  <mesh position={[CLOCK.SIZE - CLOCK.MARK.OFFSET * 1.5, 0, 0]}>
                    <boxGeometry
                      args={[
                        CLOCK.MARK.MM.LENGTH,
                        CLOCK.MARK.MM.WIDTH,
                        CLOCK.MARK.THICKNESS,
                      ]}
                    />
                    <meshStandardMaterial
                      color={
                        isHour(index)
                          ? isFirstHour(index)
                            ? CLOCK.MARK.HH.COLOR_FIRST
                            : CLOCK.MARK.HH.COLOR
                          : CLOCK.MARK.MM.COLOR
                      }
                    />
                  </mesh>
                </group>
              );
            })}
        </group>
        <group name="Numbers"></group>
        <group name="Brand" position={[0, -CLOCK.SIZE / 3, SAFE_OFFSET]}>
          <Text color={0x333333} fontSize={CLOCK.SIZE / 18}>
            Artevelde University of Applied Sciences
          </Text>
        </group>
      </group>

      <group rotation={[0, 0, MathUtils.degToRad(angleStart)]}>
        <group position={[0, 0, CLOCK.HAND.THICKNESS / 2]}>
          <group position={[0, 0, CLOCK.HAND.THICKNESS / 2]} ref={handHoursRef}>
            <mesh></mesh>
          </group>
        </group>
      </group>
    </group>
  );
};

export default ClockAnalogue;
