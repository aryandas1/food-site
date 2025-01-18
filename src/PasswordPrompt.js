import React, { useState } from 'react';

const PasswordPrompt = ({ onLogin }) => {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState(""); // State for error message

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(password, setMessage); // Pass setMessage to handleLogin in App.js
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded shadow-md space-y-4 w-80"
            >
                <h1 className="text-2xl font-bold text-center">Enter Password</h1>
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border rounded w-full p-2"
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-2 top-2 text-sm text-gray-500"
                    >
                        {showPassword ? "Hide" : "Show"}
                    </button>
                </div>
                {message && <p className="text-red-500 text-center">{message}</p>} {/* Error message */}
                <button
                    type="submit"
                    className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default PasswordPrompt;
