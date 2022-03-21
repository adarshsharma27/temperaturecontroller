import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Generator = () => {
    const [temperature, setTemperature] = useState(25);
    const [darkMode, setDarkMode] = useState();
    const [color, setColor] = useState("normal");
    const [convertedTemp, setConvertedTemp] = useState("");
    const [showConvertedTemp, setShowConvertedTemp] = useState("");

    const addDarkMode = () => {
        let darkmode = document.querySelector("html");
        darkmode.classList.toggle("dark");
        setDarkMode(!darkMode);
    };

    const increaseTemp = () => {
        setTemperature(temperature + 1);
        if (temperature > 35) {
            setColor("hot");
        }
    };
    const decreaseTemp = () => {
        if (temperature <= -5) {
            setColor("lightblue");
            return;
        }
        setTemperature(temperature - 1);
        if (temperature < 28) setColor("cold");
    };

    const toCelsius = () => {
        const cel = Math.round((convertedTemp - 32) * (5 / 9)) + "°C";
        setShowConvertedTemp(cel);
    };
    const toFahrenheit = () => {
        const cel = Math.round(convertedTemp * (9 / 5) + 32) + "°F";
        setShowConvertedTemp(cel);
    };
    return (
        <>
            <div className="bg-gray-100  dark:bg-gray-700">
                <header className="font-acme sticky top-0 ">
                    <div className="flex  justify-between items-center  w-full  px-10 py-4 bg-gray-100 dark:bg-gray-700">
                        <button
                            onClick={() => {
                                addDarkMode();
                            }}
                        >
                            {darkMode ? <FaSun className="dark:text-yellow-400 text-lg" /> : <FaMoon className="dark:text-slate-400 text-lg" />}
                        </button>
                    </div>
                </header>
                <div className="container font-acme p-4 mx-auto flex justify-center space-x-4 md:flex-row flex-col md:space-y-0 space-y-6 items-center  md:h-screen  h-full">
                    <div className=" w-full  md:w-1/2  py-6 shadow-lg bg-white rounded-md flex flex-col justify-center items-center text-left hover:shadow-xl cursor-pointer dark:bg-gray-700 dark:text-white">
                        <h2 className=" text-gray-700  pb-4 text-lg md:text-2xl text-center font-bold dark:text-white">Temperature Controller</h2>
                        <img src="images/logo.png" className="md:h-40 h-24" alt="temperature" />
                        <div className="px-4 w-full">
                            <section className="flex justify-center items-center py-4">
                                <h3 className={`text-xl font-bold  bg-blue-500 text-white px-24 py-4  rounded-md ${color}`}>{temperature}</h3>
                            </section>

                            <div className="flex  justify-center space-x-4 items-center ">
                                <button className="btn-color  text-white  text-2xl px-8 py-2 rounded-md hover:bg-blue-500" onClick={() => increaseTemp()}>
                                    +
                                </button>
                                <button className="btn-color text-white  text-2xl px-8 py-2  rounded-md hover:bg-blue-500" onClick={() => decreaseTemp()}>
                                    -
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full  md:w-1/2  py-6 shadow-lg bg-white rounded-md flex flex-col justify-center items-center text-left hover:shadow-xl cursor-pointer dark:bg-gray-700 dark:text-white">
                        <h2 className=" text-gray-700  pb-4 text-lg md:text-2xl text-center font-bold dark:text-white">Temperature Convertor</h2>
                        <img src="images/temperatureconvertor.png" className="md:h-40 h-24" alt="temperature" />
                        <div className="px-4 w-full">
                            <section className="flex justify-center items-center flex-col py-5">
                                <input
                                    type="number"
                                    className="px-5  py-2 text-black-900 text-lg w-1/2 shadow-lg bg-gray-100 dark:bg-gray-700 rounded-md focus:outline-none"
                                    placeholder="Enter Temperature"
                                    onChange={(e) => setConvertedTemp(e.target.value)}
                                />
                                {showConvertedTemp !== "" ? <h3 className={`text-xl font-bold  bg-blue-500 text-white px-8 py-2  mt-4 mb-0 rounded-md ${color}`}>{showConvertedTemp}</h3> : ""}
                            </section>

                            <div className="flex  justify-center space-x-4 items-center ">
                                <button className="btn-color  text-white  text-2xl px-8 py-2 rounded-md hover:bg-blue-500" onClick={() => toCelsius()}>
                                    °C
                                </button>
                                <button className="btn-color text-white  text-2xl px-8 py-2  rounded-md hover:bg-blue-500" onClick={() => toFahrenheit()}>
                                    °F
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Generator;
