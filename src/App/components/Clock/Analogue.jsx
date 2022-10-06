import { useRef } from "react";
import { DoubleSide, MathUtils } from "three";

const HH = 12;
const MM = 60;
const SS = 60;
const CLOCK_SIZE = 2;

const CLOCK = Object.freeze({
    HAND: {
        HH: {
            LENGTH: 0.6 * CLOCK_SIZE,
            WIDTH: 0.02 * CLOCK_SIZE,
        },
        MM: {
            LENGTH: 0.7 * CLOCK_SIZE,
        },
        SS: {
            COLOR:  0xffcc66,
            LENGTH: 0.8 * CLOCK_SIZE,
            WIDTH: 0.02 * CLOCK_SIZE,
        },
        THICKNESS: 0.02 * CLOCK_SIZE
   } 
})

const ClockAnalogue = (props) => {

    const handHoursRef = useRef();

    const angleStart = MathUtils.degToRad(90)

    return (
        <group>
            <group rotation={[0, 0, angleStart]}>
                <mesh>
                    <circleGeometry args={[CLOCK_SIZE, MM]} />
                    <meshStandardMaterial
                        opacity={0.25} 
                        side={DoubleSide}
                        transparent={true}
                    />
                </mesh>
                <group position={[0, 0, CLOCK.HAND.THICKNESS / 2]}>
                    <group position={[0, 0, CLOCK.HAND.THICKNESS / 2]} ref={handHoursRef}>
                        <mesh></mesh>
                    </group>
                </group>
            </group>
        </group>
        );
}

export default ClockAnalogue;