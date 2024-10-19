import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../features/auth/authSlice";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector((state) => state.auth.users);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Please fill in all fields");
            return;
        }
        const user = users.find(
            (u) => u.email === email && u.password === password
        );
        if (user) {
            dispatch(login({ email: user.email, name: user.name }));
            navigate("/dashboard");
        } else {
            setError("Invalid email or password");
        }
    };


    return (
        <div className="flex flex-col md:flex-row h-screen bg-white overflow-hidden">
            <div className="w-full md:w-1/2 flex justify-center items-center p-4 md:p-0">
                <img
                    src='/registration page.png'
                    alt="Registration"
                    className="w-full h-auto max-h-full object-cover"
                />
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center p-4">
                <div className="w-full max-w-md space-y-6">
                    <h1 className="text-2xl font-semibold mb-6 text-center">Welcome</h1>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {error && <p className="text-red-500">{error}</p>}
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-1  focus:ring-[#89089F]`}
                            />
                        </div>

                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`w-full pl-10 pr-10 py-2 border rounded-md focus:outline-none focus:ring-1  focus:ring-[#89089F]`}
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

                        <div className="flex justify-end">
                            <Link to="/forgot-password" className="text-purple-600 text-sm">
                                Forgot password?
                            </Link>

                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-[#89089F] text-white font-semibold rounded-2xl hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-[#89089F] focus:ring-opacity-50"
                            >
                                Log in
                            </button>
                        </div>
                    </form>

                    <div className="mt-4 text-center text-sm text-gray-600">
                        <p className="mb-3 text-gray-400">
                            Have no  account yet?
                        </p>
                        <Link to="/register" className="border-[#89089F] text-[#89089F] rounded-xl border-[2px] px-[195px] py-2">
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
