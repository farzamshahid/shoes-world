import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });
    const Nav = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault();
        let valid = true;
        const newErrors = { email: '', password: '' };

        if (!email) {
            newErrors.email = 'Email is required';
            valid = false;
        }
        if (!password) {
            newErrors.password = 'Password is required';
            valid = false;
        }

        setErrors(newErrors);

        if (valid) {
            Nav('/productDashboard')
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
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-1 ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-[#89089F]`}
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>

                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`w-full pl-10 pr-10 py-2 border rounded-md focus:outline-none focus:ring-1 ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:ring-[#89089F]`}
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
                            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                        </div>

                        <div className="flex justify-end">
                            <a href="/" className="text-blue-500 text-sm">
                                Forgot Password?
                            </a>
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
                            Don't have an account yet?
                        </p>
                        <button
                            className="w-full py-2 px-4 bg-white text-[#89089F] font-semibold rounded-2xl border border-[#89089F] hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-[#89089F] focus:ring-opacity-50"
                        >
                            <a href="/signUp">
                                Register
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
