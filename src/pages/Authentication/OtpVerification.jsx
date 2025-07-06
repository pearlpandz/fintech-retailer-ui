import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdRefresh } from 'react-icons/io';

const OtpVerification = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [timer, setTimer] = useState(35);
    // Simulate masked mobile number
    const mobile = '+91-XXXXXX1234';

    // Handle OTP input
    const handleChange = (e, idx) => {
        const value = e.target.value.replace(/\D/g, '');
        if (value.length > 1) return;
        const newOtp = [...otp];
        newOtp[idx] = value;
        setOtp(newOtp);
        // Move to next input if value entered
        if (value && idx < 5) {
            document.getElementById(`otp-${idx + 1}`).focus();
        }
    };

    // Handle backspace
    const handleKeyDown = (e, idx) => {
        if (e.key === 'Backspace' && !otp[idx] && idx > 0) {
            document.getElementById(`otp-${idx - 1}`).focus();
        }
    };

    // Timer countdown
    React.useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => setTimer(t => t - 1), 1000);
            return () => clearInterval(interval);
        }
    }, [timer]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle OTP verification logic here
        navigate('/pan-verification')
    };

    return (
        <div className="flex flex-col justify-center w-full md:w-1/2 p-8">
            <div className="max-w-md w-full mx-auto">
                <div className="flex flex-col items-center mb-6">
                    <div className="bg-blue-100 rounded-full p-4 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2l4-4m5 2a9 9 0 11-18 0a9 9 0 0118 0z" /></svg>
                    </div>
                    <h2 className="text-2xl font-bold text-center text-blue-900 mb-2">OTP Verification</h2>
                    <p className="text-center text-gray-600 mb-2">Enter the 6-digit OTP sent to your Aadhaar-linked mobile number</p>
                    <input
                        type="text"
                        value={mobile}
                        disabled
                        className="text-center text-gray-700 bg-gray-100 rounded-md px-4 py-2 w-full max-w-xs mb-4 font-medium tracking-wider"
                    />
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex justify-center gap-3 mb-2">
                        {otp.map((digit, idx) => (
                            <input
                                key={idx}
                                id={`otp-${idx}`}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                className="w-12 h-12 text-center border border-gray-300 rounded-lg text-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white shadow-sm"
                                value={digit}
                                onChange={e => handleChange(e, idx)}
                                onKeyDown={e => handleKeyDown(e, idx)}
                                autoFocus={idx === 0}
                            />
                        ))}
                    </div>
                    <div className="text-center text-gray-400 text-sm mb-2">
                        {timer > 0 ? (
                            <>Resend OTP in 00:{timer.toString().padStart(2, '0')}</>
                        ) : (
                            <button
                                type="button"
                                className="flex items-center gap-1 text-blue-600 hover:underline font-medium mx-auto"
                                onClick={() => setTimer(35)}
                            >
                                <IoMdRefresh /> Resend OTP
                            </button>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 rounded-md bg-gradient-to-r from-fuchsia-600 to-purple-500 text-white font-semibold text-lg shadow mt-2 hover:from-fuchsia-700 hover:to-purple-600 transition"
                    >
                        Verify & Continue
                    </button>
                </form>
                <div className="flex flex-col items-center mt-6 space-y-2">
                    <span className="text-sm text-gray-500">Having trouble? <button className="text-blue-600 hover:underline">Contact Support</button></span>
                    <span className="text-sm text-gray-600">Don't have an account? <Link to="/login" className="text-blue-600 hover:underline">Log In</Link></span>
                </div>
            </div>
        </div>
    );
};

export default OtpVerification;
