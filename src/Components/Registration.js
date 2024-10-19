import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../features/auth/authSlice";
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";

const Registration = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !password || !rePassword) {
            setError("Please fill in all fields");
            return;
        }
        if (password !== rePassword) {
            setError("Passwords don't match");
            return;
        }
        if (password.length < 8) {
            setError("Password must be at least 8 characters long");
            return;
        }
        if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
            setError("Password must contain both letters and numbers");
            return;
        }
        dispatch(register({ name, email, password }));
        navigate("/");
    };

    return (
        <div className="flex flex-col md:flex-row h-screen bg-white overflow-hidden">
            <div className="w-full md:w-1/2  pt-1 flex flex-col justify-center items-center">
                <img src='/registration page.png' alt="Registration " />
            </div>

            <div className="w-full md:w-1/2 pt-1 flex items-center justify-center">
                <div className="w-full max-w-md">
                    <h1 className="text-2xl font-semibold mb-[35px] text-center">Registration</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {error && <p className="text-red-500">{error}</p>}
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                value={name}
                                type="text"
                                placeholder="Name"
                                onChange={(e) => setName(e.target.value)}
                                className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#89089F]"
                            />
                        </div>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                value={email}
                                type="email"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#89089F]"
                            />
                        </div>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                value={password}
                                type={showPassword ? "text" : "password"}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className="w-full pl-10 pr-10 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#89089F]"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                            >
                                {showPassword ? (
                                    <EyeOff className="text-gray-400" size={20} />
                                ) : (
                                    <Eye className="text-gray-400" size={20} />
                                )}
                            </button>
                        </div>
                        <div className="relative ">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                value={rePassword}
                                type={showRePassword ? "text" : "password"}
                                onChange={(e) => setRePassword(e.target.value)}
                                placeholder="Re-enter password"
                                className="w-full  pl-10 pr-10 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#89089F]"
                            />
                            <button
                                type="button"
                                onClick={() => setShowRePassword(!showRePassword)}
                                className="absolute   right-3 top-1/2 transform -translate-y-1/2"
                            >
                                {showRePassword ? (
                                    <EyeOff className="text-gray-400" size={20} />
                                ) : (
                                    <Eye className="text-gray-400" size={20} />
                                )}
                            </button>
                        </div>
                        <div >

                            <button
                                type="submit"
                                className="w-full mt-[3px]   py-2 px-4 bg-[#89089F] text-white font-semibold rounded-2xl hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-[#89089F] focus:ring-opacity-50"
                            >
                                Create Account
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-center text-sm text-gray-600">
                        <p className="mt-4 text-center">
                            Already have an account?{" "}
                            <Link to="/" className="text-purple-600">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
