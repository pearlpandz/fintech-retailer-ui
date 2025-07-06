import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth.context';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ email, password });
        navigate('/dashboard')
    };

    return (
        <div className="flex flex-col justify-center w-full md:w-1/2 p-8">
            <div className="max-w-md w-full mx-auto">
                <h2 className="text-2xl font-bold text-center text-blue-900 mb-2">Welcome Back</h2>
                <p className="text-center text-gray-600 mb-6">Sign In to continue</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-1" htmlFor="email">Email or Username</label>
                        <div className="flex items-center border rounded-md px-3 py-2 bg-white">
                            <span className="text-gray-400 mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12A4 4 0 118 12a4 4 0 018 0zM12 14v7m0 0H5a2 2 0 01-2-2v-5a2 2 0 012-2h14a2 2 0 012 2v5a2 2 0 01-2 2h-7z" /></svg>
                            </span>
                            <input
                                id="email"
                                type="text"
                                className="w-full outline-none bg-transparent"
                                placeholder="Email or Username"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
                        <div className="flex items-center border rounded-md px-3 py-2 bg-white">
                            <span className="text-gray-400 mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.104 0 2-.896 2-2V7a2 2 0 10-4 0v2c0 1.104.896 2 2 2zm6 2v7a2 2 0 01-2 2H8a2 2 0 01-2-2v-7m12 0a2 2 0 00-2-2H8a2 2 0 00-2 2m12 0H6" /></svg>
                            </span>
                            <input
                                id="password"
                                type="password"
                                className="w-full outline-none bg-transparent"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex justify-end mt-1">
                            <Link to="/forgot-password" className="text-xs text-blue-500 hover:underline">Forget Password?</Link>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 rounded-md bg-gradient-to-r from-fuchsia-600 to-purple-500 text-white font-semibold text-lg shadow mt-2 hover:from-fuchsia-700 hover:to-purple-600 transition"
                    >
                        Log In
                    </button>
                </form>
                <p className="text-center text-gray-600 mt-4">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-purple-600 font-semibold hover:underline">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
