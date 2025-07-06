import React from 'react';
import { useNavigate } from 'react-router-dom';

const Spinner = () => (
    <div className="flex justify-center mb-6">
        <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const EndVerification = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center w-full md:w-1/2 p-8">
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col items-center mx-auto">
                <Spinner />
                <h2 className="text-2xl font-bold text-center text-blue-900 mb-2">We're verifying your details</h2>
                <p className="text-center text-gray-600 mb-6 underline cursor-pointer" style={{ textDecorationThickness: '1.5px' }}>
                    This may take a few minutes. You'll<br />be notified once it's done.
                </p>
                <button
                    className="w-full py-3 rounded-lg text-white font-semibold text-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition mb-2"
                    onClick={() => navigate('/dashboard')}
                >
                    Go to Dashboard
                </button>
            </div>
        </div>
    );
};

export default EndVerification;
