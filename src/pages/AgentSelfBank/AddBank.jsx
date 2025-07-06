import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const banks = [
    { label: 'Select', value: '' },
    { label: 'HDFC Bank', value: 'hdfc' },
    { label: 'ICICI Bank', value: 'icici' },
    { label: 'SBI', value: 'sbi' },
    // Add more banks as needed
];

const beneficiaries = [
    { label: 'Enter Beneficiary name', value: '' },
    { label: 'John Doe', value: 'john' },
    { label: 'Jane Smith', value: 'jane' },
    // Add more beneficiaries as needed
];

const RetailerAddBank = () => {
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

    const onGoBack = () => {
        navigate(-1)
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSave) onSave(form);
    };

    return (
        <div className='bg-white'>
            <div className="max-w-xl mt-10 p-8 relative">
                <div className="mb-6">
                    <nav className="text-sm text-gray-500">
                        <Link to="/dashboard" className="hover:underline">Home</Link>
                        <span className="mx-1">&gt;</span>
                        <Link to="/retailer-bank/list" className="hover:underline">Agent Self Bank</Link>
                        <span className="mx-1">&gt;</span>
                        <span className="text-gray-700">Add New Bank</span>
                    </nav>
                    <h2 className="text-3xl font-bold text-gray-800 mt-2">Add New Bank</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="font-medium mb-1 block">Bank Name</label>
                        <select
                            name="bank"
                            value={form.bank}
                            onChange={handleChange}
                            className="w-full p-2 rounded-md border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            {banks.map((b) => (
                                <option key={b.value} value={b.value}>{b.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="font-medium mb-1 block">Beneficiary name</label>
                        <select
                            name="beneficiary"
                            value={form.beneficiary}
                            onChange={handleChange}
                            className="w-full p-2 rounded-md border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            {beneficiaries.map((b) => (
                                <option key={b.value} value={b.value}>{b.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="font-medium mb-1 block">Branch Name</label>
                        <input
                            name="branch"
                            value={form.branch}
                            onChange={handleChange}
                            placeholder="Enter Branch Name"
                            className="w-full p-2 rounded-md border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="font-medium mb-1 block">IFSC Code</label>
                        <input
                            name="ifsc"
                            value={form.ifsc}
                            onChange={handleChange}
                            placeholder="Enter IFSC Code"
                            className="w-full p-2 rounded-md border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>
                    <div className="mb-8">
                        <label className="font-medium mb-1 block">Account No</label>
                        <input
                            name="account"
                            value={form.account}
                            onChange={handleChange}
                            placeholder="Enter Account No"
                            className="w-full p-2 rounded-md border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-primary"
                        />
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

export default RetailerAddBank;