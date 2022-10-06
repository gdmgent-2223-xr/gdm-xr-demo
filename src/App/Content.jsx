import ClockAnalogue from "./components/Clock/Analogue"

const Content = () => {

    return (
        <>
            <ambientLight color={0xffffff} intensity={1} />
            <ClockAnalogue />
        </>
    );
}

export default Content;