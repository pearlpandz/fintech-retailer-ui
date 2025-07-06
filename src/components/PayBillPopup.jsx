import React, { useState } from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { IoLockClosedOutline } from "react-icons/io5";

export default function PayBillPopup({ open, onClose, onSubmit }) {
    const [form, setForm] = useState({
        customerName: '',
        payableAmount: '',
        tpin: '',
        billPeriod: '',
        billDueDate: '',
        billAmount: ''
    });

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(form);
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl border border-purple-300 relative" style={{ boxShadow: '4px 4px 12px rgba(0,0,0,0.25)' }}>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl">&times;</button>
                <h2 className="text-2xl font-bold mb-6">Fetch Bill Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block font-semibold mb-2">Customer Name</label>
                        <div className="relative">
                            <input name="customerName" value={form.customerName} onChange={handleChange} placeholder="Enter Customer Name" className="w-full border rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-400" />
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><FaRegUser /></span>
                        </div>
                    </div>
                    <div className="flex gap-4 mb-4">
                        <div className="w-1/2">
                            <label className="block font-semibold mb-2">Payable Amount</label>
                            <div className="relative">
                                <input name="payableAmount" value={form.payableAmount} onChange={handleChange} placeholder="Enter Payable Amount" className="w-full border rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-400" />
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><BsCurrencyRupee /></span>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <label className="block font-semibold mb-2">TPIN</label>
                            <div className="relative">
                                <input name="tpin" value={form.tpin} onChange={handleChange} placeholder="Enter TPIN" type="password" className="w-full border rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-400" />
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <IoLockClosedOutline />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold mb-2">Bill Period</label>
                        <div className="relative">
                            <input name="billPeriod" value={form.billPeriod} onChange={handleChange} placeholder="Enter Bill Period" className="w-full border rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-400" />
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><CiCalendar /></span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold mb-2">Bill Due Date</label>
                        <div className="relative">
                            <input name="billDueDate" value={form.billDueDate} onChange={handleChange} placeholder="Enter Bill Due Date" className="w-full border rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-400" />
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><GoClock /></span>
                        </div>
                    </div>
                    <div className="mb-8">
                        <label className="block font-semibold mb-2">Bill Amount</label>
                        <div className="relative">
                            <input name="billAmount" value={form.billAmount} onChange={handleChange} placeholder="EnterBill Amount" className="w-full border rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-400" />
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><BsCurrencyRupee /></span>
                        </div>
                    </div>
                    <button type="submit" className="w-full py-3 rounded-lg font-medium text-white text-lg" style={{ background: 'linear-gradient(90deg, #A020F0 0%, #E040FB 100%)' }}>
                        Pay Bill
                    </button>
                </form>
            </div>
        </div>
    );
}
