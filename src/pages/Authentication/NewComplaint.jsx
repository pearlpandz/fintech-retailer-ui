import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NewComplaint = () => {
    const navigate = useNavigate();
    const [formData, setForm] = useState({
        complaintType: '',
        mobileNumber: '',
        transactionId: '',
        complaintDeposition: '',
        complaintDescription: '',
    });

    const handleChange = (e) => {
        setForm({ ...formData, [e.target.name]: e.target.value });
    };

    const onSave = () => {
        // handle Form submit
    };

    const onGoBack = () => {
        navigate(-1)
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSave) onSave(formData);
    };

    return (
        <div className='bg-white'>
            <div className="max-w-xl mt-10 p-8 relative">
                <div className="mb-6">
                    <nav className="text-sm text-gray-500">
                        <Link to="/dashboard" className="hover:underline">Home</Link>
                        <span className="mx-1">&gt;</span>
                        <Link to="/complaints/list" className="hover:underline">Complaints</Link>
                        <span className="mx-1">&gt;</span>
                        <span className="text-gray-700">Add New Complaint</span>
                    </nav>
                    <h2 className="text-3xl font-bold text-gray-800 mt-2">Raise a New Complaint</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="complaintType" className="font-medium mb-1 block">Complaint Type</label>
                        <select
                            id="complaintType"
                            name="complaintType"
                            value={formData.complaintType}
                            onChange={handleChange}
                            className="w-full p-2 rounded-md border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            <option value="">Select a type</option>
                            <option value="transaction">Transaction Issue</option>
                            <option value="service">Service Issue</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="mobileNumber" className="font-medium mb-1 block">Mobile Number</label>
                        <input
                            type="text"
                            id="mobileNumber"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            className="w-full p-2 rounded-md border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Enter mobile number"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="transactionId" className="font-medium mb-1 block">Transaction ID</label>
                        <input
                            type="text"
                            id="transactionId"
                            name="transactionId"
                            value={formData.transactionId}
                            onChange={handleChange}
                            className="w-full p-2 rounded-md border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Enter transaction ID (optional)"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="complaintDeposition" className="font-medium mb-1 block">Complaint Deposition</label>
                        <input
                            type="text"
                            id="complaintDeposition"
                            name="complaintDeposition"
                            value={formData.complaintDeposition}
                            onChange={handleChange}
                            className="w-full p-2 rounded-md border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Briefly state your complaint"
                        />
                    </div>

                    <div className="mb-8">
                        <label htmlFor="complaintDescription" className="font-medium mb-1 block">Complaint Description</label>
                        <textarea
                            id="complaintDescription"
                            name="complaintDescription"
                            rows="4"
                            value={formData.complaintDescription}
                            onChange={handleChange}
                            className="w-full p-2 rounded-md border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Provide a detailed description of your complaint"
                        ></textarea>
                    </div>

                    <div className="flex justify-center gap-8">
                        <button type="button" className="w-1/2 py-2 rounded  text-white font-semibold" style={{ background: "linear-gradient(90deg, #b100a1 0%, #d13ad1 100%)" }} onClick={onGoBack}>Cancel</button>
                        <button type="submit" className="w-1/2 py-2 rounded bg-purple-700 text-white font-semibold">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewComplaint;