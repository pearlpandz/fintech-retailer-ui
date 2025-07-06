import React, { useState } from "react";
import { CiMobile1 } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";

const operators = [
    {
        value: '', label: 'Select Operator', icon: (
            <svg className="inline mr-2" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="9" r="8" /><path d="M6 9h6" /></svg>
        )
    },
    { value: 'airtel', label: 'Airtel' },
    { value: 'jio', label: 'Jio' },
    { value: 'vi', label: 'VI' },
];
const billers = [
    {
        value: '', label: 'Select Biller', icon: (
            <svg className="inline mr-2" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="6" width="12" height="9" rx="2" /><path d="M9 3v3" /></svg>
        )
    },
    { value: 'electricity', label: 'Electricity' },
    { value: 'gas', label: 'Gas' },
    { value: 'water', label: 'Water' },
];

export default function AddBillPopup({ open, onClose, onSubmit }) {
    const [operator, setOperator] = useState('');
    const [biller, setBiller] = useState('');
    const [mobile, setMobile] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ operator, biller, mobile });
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl border border-purple-300 relative" style={{ boxShadow: '4px 4px 12px rgba(0,0,0,0.25)' }}>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl">&times;</button>
                <h2 className="text-2xl font-bold mb-6">Add Bill Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block font-semibold mb-2">Select Operator</label>
                        <div className="relative">
                            <select value={operator} onChange={e => setOperator(e.target.value)} className="w-full border rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-400 appearance-none">
                                {operators.map(opt => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><GiNetworkBars /></span>
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"><FaCaretDown /></span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold mb-2">Select Biller</label>
                        <div className="relative">
                            <select value={biller} onChange={e => setBiller(e.target.value)} className="w-full border rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-400 appearance-none">
                                {billers.map(opt => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><CiMobile1 /></span>
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"><FaCaretDown /></span>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block font-semibold mb-2">Mobile Number</label>
                        <div className="relative">
                            <input type="text" value={mobile} onChange={e => setMobile(e.target.value)} placeholder="Enter Mobile Number" className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 pl-10" />
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">₹</span>
                        </div>
                    </div>
                    <button type="submit" className="w-full py-3 rounded-lg font-medium text-white text-lg" style={{ background: 'linear-gradient(90deg, #A020F0 0%, #E040FB 100%)' }}>
                        Fetch Bill
                    </button>
                </form>
                <div className="mt-8">
                    <div className="font-semibold text-lg mb-4">Quick Access</div>
                    <div className="flex gap-8">
                        <div className="flex flex-col items-center border-2 border-purple-400 rounded-lg px-8 py-4 cursor-pointer hover:bg-purple-50">
                            <span className="text-2xl mb-2">💡</span>
                            <span>Electricity</span>
                        </div>
                        <div className="flex flex-col items-center border-2 border-purple-400 rounded-lg px-8 py-4 cursor-pointer hover:bg-purple-50">
                            <span className="text-2xl mb-2">🎁</span>
                            <span>Gas</span>
                        </div>
                        <div className="flex flex-col items-center border-2 border-purple-400 rounded-lg px-8 py-4 cursor-pointer hover:bg-purple-50">
                            <span className="text-2xl mb-2">💧</span>
                            <span>Water</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
