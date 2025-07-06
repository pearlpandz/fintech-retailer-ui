import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FindRecipient = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        bank: '',
        beneficiary: '',
        branch: '',
        ifsc: '',
        account: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onSave = () => {
        // handle Form submit
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSave) onSave(form);
    };

    const onGoBack = () => {
        navigate(-1)
    }

    return (
        <div className="bg-white p-8">
            <div className="mb-6">
                <nav className="text-sm text-gray-500">
                    <Link to="/dashboard" className="hover:underline">Home</Link>
                    <span className="mx-1">&gt;</span>
                    <Link to="/wallet-transfer/history" className="hover:underline">Wallet to Wallet</Link>
                    <span className="mx-1">&gt;</span>
                    <span className="text-gray-700">Find Recipient</span>
                </nav>
                <h2 className="text-3xl font-bold text-gray-800 mt-2">Find Recipient</h2>
            </div>
            <div>
                <div className="flex justify-center">
                    <div className="max-w-3xl w-full mt-10 p-8 rounded-lg shadow-md border border-purple-200">
                        <h2 className="text-center text-lg font-semibold mb-8">Find Recipient</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label className="font-medium mb-2 block">Mobile No.</label>
                                <input
                                    name="mobile"
                                    value={form.mobile || ""}
                                    onChange={handleChange}
                                    placeholder="Enter Mobile Number"
                                    className="w-full p-3 rounded-md border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-primary"
                                    type="text"
                                    maxLength={10}
                                />
                            </div>
                            <div className="flex justify-center gap-8">
                                <button type="submit" className="w-50 py-2 rounded bg-purple-700 text-white font-semibold">Search</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindRecipient;