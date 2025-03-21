import { useState, useEffect } from "react";
import type { Route } from "./+types/home";
import { ResourceLibrary } from "~/resource_library/library";
import {Goals} from "../goals/goalsetting";
import {Profile} from "../account/profile";
import logo from "./logo.png";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Carbon Footprint Tracker" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [selectedGoals, setSelectedGoals] = useState<number[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      console.log("now dark")
      document.body.classList.add("dark");
    } else {
      console.log("now light")
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div id="main_container">
      <img
          src={logo}
          alt="React Router"
          className="block w-full object-fill"
        />
      <div id="customize" className="shadow-lg rounded-t-md text-center mb-5 ml-10 mr-10 mt-0">
        <div id="customizeHeader" className={`rounded-t-md text-lg font-extrabold p-2 ${darkMode ? "bg-gray-700 text-white" : "bg-emerald-200 text-black"}`}>
          Customize Appearance
        </div>
        
        <div id="customizeContainer" className={`${darkMode ? "bg-gray-800 text-white" : "bg-emerald-100 text-black"} p-5 `}>
          <button className="mb-4 px-4 py-2 rounded-md shadow-md font-bold transition bg-green-500 text-white hover:bg-green-700" onClick={() => setDarkMode(!darkMode)}>
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </button>
        </div>
      </div>
      <Profile selectedGoals={selectedGoals} setSelectedGoals={setSelectedGoals} darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Goals selectedGoals={selectedGoals} setSelectedGoals={setSelectedGoals} darkMode={darkMode} setDarkMode={setDarkMode}/>
      <ResourceLibrary darkMode={darkMode} setDarkMode={setDarkMode}/>
      <div id="pageFooter" className={`text-center text-sm ${darkMode ? "text-white" : "text-black"}"`}>
        <a>Marco Diaz Moore - CS426 - 2025</a>
      </div>
    </div>
  );
}