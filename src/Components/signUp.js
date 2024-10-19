import React, { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react'; import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({ email: '', password: '' });
    const Nav = useNavigate()
    const handleSignup = (e) => {
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
            Nav('/login')
        }
    };


    return (
        <div className="flex flex-col md:flex-row h-screen bg-white overflow-hidden">
            <div className="w-full md:w-1/2  pt-1 flex flex-col justify-center items-center">
                <img src='/registration page.png' alt="Registration " />
            </div>

            <div className="w-full md:w-1/2 pt-1 flex items-center justify-center">
                <div className="w-full max-w-md">
                    <h1 className="text-2xl font-semibold mb-[35px] text-center">Registration</h1>
                    <form onSubmit={handleSignup} className="space-y-4">
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#89089F]"
                            />
                        </div>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#89089F]"
                            />
                        </div>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type={showPassword ? "text" : "password"}
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
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Re-enter password"
                                className="w-full  pl-10 pr-10 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#89089F]"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute   right-3 top-1/2 transform -translate-y-1/2"
                            >
                                {showConfirmPassword ? (
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
                        <p className="mb-[9px] mt-[20px] text-gray-400">

                            Already have an account?
                        </p>
                        <button
                            className="w-full mt-[3px]  py-2 px-4 bg-white text-[#89089F] font-semibold rounded-2xl border border-[#89089F] hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-[#89089F] focus:ring-opacity-50"
                        >
                            <a href='/login'>
                                Login
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
