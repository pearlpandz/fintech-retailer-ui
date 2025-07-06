import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PanVerification = () => {
    const navigate = useNavigate();
    const [panNumber, setPanNumber] = useState('');
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle PAN upload logic here
        console.log(file)
        navigate('/end-verification')
    };

    return (
        <div className="flex flex-col justify-center w-full md:w-1/2 p-8">
            <div className="max-w-md w-full mx-auto">
                <h2 className="text-2xl font-bold text-center text-blue-900 mb-2">Upload Your PAN Card</h2>
                <p className="text-center text-gray-600 mb-6">Complete your KYC verification</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Upload Box */}
                    <div className="bg-gray-100 border-dashed border-2 border-gray-300 rounded-xl flex flex-col items-center justify-center py-8 mb-4">
                        <div className="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="12" rx="2" fill="#e0e7ff" /><rect x="7" y="7" width="3" height="3" rx="1.5" fill="#a5b4fc" /><rect x="12" y="7" width="5" height="2" rx="1" fill="#a5b4fc" /></svg>
                        </div>
                        <div className="font-semibold text-gray-700 mb-1">Upload PAN Card</div>
                        <div className="text-xs text-gray-500 mb-4">PDF, JPG, or PNG (Max 5MB)</div>
                        <div className="flex gap-2">
                            <label className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-50">
                                <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" onChange={handleFileChange} />
                                <span className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10l5-5 5 5M12 5v12" /></svg>
                                </span>
                                Gallery
                            </label>
                            <button type="button" className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium shadow hover:bg-blue-700 transition">Upload</button>
                        </div>
                    </div>
                    {file && (
                        <div className="text-sm text-gray-700 text-center mb-2">
                            Selected file: <span className="font-medium">{file.name}</span>
                        </div>
                    )}
                    {/* PAN Number Input */}
                    <div>
                        <label className="block text-gray-700 mb-1" htmlFor="panNumber">PAN Number</label>
                        <input
                            id="panNumber"
                            type="text"
                            className="w-full border-2 border-purple-400 rounded-md px-3 py-2 outline-none focus:border-purple-600"
                            placeholder="Enter your PAN number"
                            value={panNumber}
                            onChange={(e) => setPanNumber(e.target.value)}
                            required
                        />
                        <div className="text-xs text-gray-400 mt-1 text-center">PAN is required for KYC verification</div>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 rounded-md bg-gradient-to-r from-fuchsia-600 to-purple-500 text-white font-semibold text-lg shadow mt-2 hover:from-fuchsia-700 hover:to-purple-600 transition"
                    >
                        Continue
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PanVerification;
