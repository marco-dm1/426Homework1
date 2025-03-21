import { useState,useEffect } from "react";
import avatar from "./avatar.jpg"; // Default avatar
import { goals } from "../goals/goalsetting";

interface ProfileProps {
    selectedGoals: number[];
    setSelectedGoals: React.Dispatch<React.SetStateAction<number[]>>;
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Profile({ selectedGoals, setSelectedGoals, darkMode, setDarkMode }: ProfileProps) {
    useEffect(() => {
        if(isLoggedIn){ // If selectedGoals changed and user is logged in
            localStorage.setItem("goals-" + name.trim(), selectedGoals.toString());
            console.log("Saving user's goals in localStorage")
        }
    }, [selectedGoals]);
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [profilePic, setProfilePic] = useState<string | null>(null);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if(localStorage.getItem("user-" + name.trim())){ // If account exists
            if(localStorage.getItem("user-" + name.trim()) && email.trim() != localStorage.getItem("user-" + name.trim())){
                alert("Email associated with existing account does not match!")
            }else{
                if (name.trim() && email.trim()) {
                    setIsLoggedIn(true);
                    console.log("ran2");
                    if(localStorage.getItem("pfp-" + name.trim())){
                        setProfilePic(localStorage.getItem("pfp-" + name.trim()));
                    }
                }
            }
        }else{
            if (name.trim() && email.trim()) {
                localStorage.setItem("user-" + name.trim(), email.trim());
                console.log("Ran");
                setIsLoggedIn(true);
            }
        }

        if(localStorage.getItem("goals-" + name.trim())){ // If the user has goals saved then load those into the state
            setSelectedGoals(JSON.parse('[' + localStorage.getItem("goals-" + name.trim()) + ']'))
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setName("");
        setEmail("");
        setProfilePic(null);
        setSelectedGoals([]);
    };

    const handlePFPUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result as string);
                localStorage.setItem("pfp-" + name.trim(), reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div id="profile" className={`shadow-lg rounded-md bg-emerald-100 text-center m-10 mt-0 text-black`}>
            <div id="profileHeader" className={`${darkMode ? "bg-gray-700 text-white" : "bg-emerald-100 text-black"} rounded-t-md bg-emerald-200 text-lg font-extrabold p-2`}>
                My Account
            </div>
            <div id="profileContainer" className={`${darkMode ? "bg-gray-800 text-white" : "bg-emerald-100 text-black"} p-5`}>
                {!isLoggedIn ? (
                    <form onSubmit={handleLogin} className="flex flex-col items-center space-y-3">
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={`w-64 p-2 border ${darkMode ? "bg-gray-700 placeholder-gray-300 text-white" : "bg-white placeholder-black text-black"} rounded shadow-sm`}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-64 p-2 border ${darkMode ? "bg-gray-700 placeholder-gray-300 text-white" : "bg-white placeholder-black text-black"} rounded shadow-sm`}
                            required
                        />
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition shadow-sm"
                        >
                            Log In
                        </button>
                    </form>
                ) : (
                    <div className="flex flex-col items-center">
                        <img
                            src={profilePic || avatar}
                            alt="User Avatar"
                            className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
                        />
                        <h2 className="mt-3 text-xl font-semibold">{name}</h2>
                        <p className={`${darkMode ? "text-white bg-gray-800" : "bg-emerald-100 text-gray-700"} p-5`}>{email}</p>

                        <div className={`${darkMode ? "bg-gray-600 text-white" : "bg-emerald-200 text-black"} mt-5 p-4 rounded-lg shadow-md`}>
                            <h3 className="text-lg font-semibold">
                                Goals Completed: {selectedGoals.length}/{goals.length}
                            </h3>
                        </div>

                        <input
                            type="file"
                            accept="image/*"
                            id="fileInput"
                            className="hidden"
                            onChange={handlePFPUpload}
                        />
                        <label
                            htmlFor="fileInput"
                            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition cursor-pointer mt-3"
                        >
                            Upload Profile Picture
                        </label>

                        <button
                            onClick={handleLogout}
                            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
                        >
                            Log Out
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
