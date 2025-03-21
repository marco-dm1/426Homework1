import { useState, useEffect } from "react";

const tips = [
    "You don’t have to be perfect; even small eco-friendly choices add up to a big impact over time.",
    "Living sustainably not only helps the planet but also saves you money and improves your health.",
    "Your sustainable habits can inspire friends, family, and your community to make greener choices too.",
    "Focus on what you’re doing right rather than feeling guilty about what you haven’t changed yet.",
    "Every action you take contributes to a healthier planet for future generations—your efforts truly matter!"
];

export function LibraryTips() {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % tips.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="libraryTips" className="italic font-light text-base">
            <p>Daily Tips:</p><p>{tips[index]}</p>
        </div>
    );
}