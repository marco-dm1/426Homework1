// Imports
import { LibraryTips } from "./tips";
import resource1 from "./resource1.jpg";
import resource2 from "./resource2.jpg";
import resource3 from "./resource3.jpg";

interface LibraryProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ResourceLibrary({ darkMode, setDarkMode }: LibraryProps) {
  return (
    <div id="library" className="shadow-lg rounded-t-md text-center mb-5 mx-4 md:mx-10 mt-0">
      <div id="libraryHeader" className={`rounded-t-md text-lg font-extrabold p-2 ${darkMode ? "bg-gray-700 text-white" : "bg-emerald-200 text-black"}`}>
        Resource Library
        <LibraryTips />
      </div>
      
      <div id="libraryResources" className={`${darkMode ? "bg-gray-800 text-white" : "bg-emerald-100 text-black"} p-5`}>
        <div id="resource1" className="m-2 text-wrap text-left flex flex-col md:flex-row">
          <img src={resource1} alt="Tree" className="rounded-md w-full md:w-1/3 object-cover mb-4 md:mb-0" />
          <p className="m-5 text-base md:text-lg">
            Sustainable living is about making choices that reduce our environmental impact and promote a healthier planet. It involves conserving resources, minimizing waste, and opting for eco-friendly alternatives in daily life—such as using renewable energy, reducing plastic use, and supporting sustainable food sources. By adopting sustainable habits, individuals contribute to a more balanced ecosystem and help ensure future generations can thrive.
          </p>
        </div>
        <div id="resource2" className="m-2 text-wrap text-left flex flex-col md:flex-row">
          <p className="m-5 text-base md:text-lg">
            Sustainable water living focuses on using and managing water resources responsibly to protect the environment and ensure long-term availability. This includes conserving water through efficient usage, reducing pollution by limiting chemical runoff, and protecting natural water sources like rivers and wetlands. Practices such as rainwater harvesting, wastewater recycling, and using drought-resistant landscaping help reduce water waste. By making conscious choices, individuals and communities can maintain clean and plentiful water supplies for future generations.
          </p>
          <img src={resource2} alt="Water" className="rounded-md w-full md:w-1/3 object-cover mb-4 md:mb-0" />
        </div>
        <div id="resource3" className="m-2 text-wrap text-left flex flex-col md:flex-row">
          <img src={resource3} alt="Waste" className="rounded-md w-full md:w-1/3 object-cover mb-4 md:mb-0" />
          <p className="m-5 text-base md:text-lg">
            Sustainable waste living is about reducing, reusing, and recycling to minimize the environmental impact of waste. It involves making conscious choices to reduce waste production, such as using reusable products, composting organic materials, and properly recycling plastics, metals, and paper. Sustainable waste practices also include supporting a circular economy by repurposing items and choosing products with minimal or biodegradable packaging. By managing waste responsibly, individuals and communities can help reduce pollution, conserve resources, and create a cleaner, more sustainable future.
          </p>
        </div>
      </div>
    </div>
  );
}
