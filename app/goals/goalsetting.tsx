import { useState } from "react";

export const goals = [
    "Reduce single-use plastics in daily life.",
    "Switch to reusable shopping bags and water bottles.",
    "Conserve energy by turning off lights when not in use.",
    "Use public transportation, biking, or walking whenever possible.",
    "Reduce food waste by planning meals and composting leftovers."
];

interface GoalsProps {
    selectedGoals: number[];
    setSelectedGoals: React.Dispatch<React.SetStateAction<number[]>>;
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Goals({ selectedGoals, setSelectedGoals, darkMode, setDarkMode}: GoalsProps) {
    //const [darkMode, setDarkMode] = useState(false);

    const handleClick = (index: number) => {
        if (!selectedGoals.includes(index)) {
            alert("Great work completing a sustainable living goal!");
        }
        setSelectedGoals((prevSelected) =>
            prevSelected.includes(index)
                ? prevSelected.filter((i) => i !== index)
                : [...prevSelected, index]
        );
    };

    return (
        <div id="goals" className="m-10 rounded-md shadow-lg transition-all text-center">
            <div id="goalsHeader" className={`${darkMode ? "bg-gray-700" : "bg-emerald-200"} rounded-t-md text-lg font-extrabold p-2`}>
                Set my Goals:
            </div>
            <div id="goalContainer" className={`${darkMode ? "bg-gray-800 text-white" : "bg-emerald-100 text-black"}  p-5`}>
                <p className="pb-5">
                    Set a sustainable living goal from the list below and come back to mark it completed once you are done!
                </p>

                <div className={`${darkMode ? "bg-gray-700" : "bg-green-100"} max-w-md mx-auto p-4 rounded-lg shadow-md`}>
                    <h2 className="text-lg font-semibold mb-2">
                        Sustainable Living Goals ({selectedGoals.length}/{goals.length} completed)
                    </h2>
                    <ul className="space-y-2">
                        {goals.map((goal, index) => (
                            <button
                                key={index}
                                className={`w-full p-3 text-left rounded-lg shadow transition ${
                                    selectedGoals.includes(index)
                                        ? "bg-green-500 text-white"
                                        : darkMode
                                        ? "bg-gray-600 hover:bg-gray-600"
                                        : "bg-white hover:bg-green-200"
                                }`}
                                onClick={() => handleClick(index)}
                            >
                                {goal}
                            </button>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
