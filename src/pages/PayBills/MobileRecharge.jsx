import React from 'react';
import { useForm } from 'react-hook-form';
import { BsCurrencyRupee } from 'react-icons/bs';
import { CiMobile1 } from 'react-icons/ci';
import { RiBillLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const operators = [
    'Airtel',
    'Jio',
    'Vi',
    'BSNL',
];

const amounts = [299, 199, 299, 399, 499];

export default function MobileRecharge() {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data, null, 2));
    };

    return (
        <div className="min-h-screen bg-[#F8F9FB] flex flex-col">
            <div className="mb-6">
                <nav className="text-sm text-gray-500">
                    <Link to="/dashboard" className="hover:underline">Home</Link>
                    <span className="mx-1">&gt;</span>
                    <span className="text-gray-700">Mobile Recharge</span>
                </nav>
                <h2 className="text-3xl font-bold text-gray-800 mt-2">Mobile Recharge</h2>
            </div>
            <div className="flex flex-1 w-full bg-white mt-4">
                <form onSubmit={handleSubmit(onSubmit)} className="p-8 w-lg">

                    {/* Recharge Type */}
                    <div className="mb-4">
                        <label className="block font-medium mb-2">Recharge Type</label>
                        <div className="flex gap-4">
                            <label className="flex items-center cursor-pointer border rounded-lg px-4 py-2 w-1/2 justify-center border-purple-300 bg-purple-50">
                                <input type="radio" value="Prepaid" {...register('rechargeType', { required: true })} defaultChecked className="hidden" />
                                <span className="flex items-center gap-2 text-purple-600 font-semibold">
                                    <CiMobile1 size={18} /> Prepaid
                                </span>
                            </label>
                            <label className="flex items-center cursor-pointer border rounded-lg px-4 py-2 w-1/2 justify-center border-gray-300">
                                <input type="radio" value="Postpaid" {...register('rechargeType', { required: true })} className="hidden" />
                                <span className="flex items-center gap-2 text-gray-600 font-semibold">
                                    <RiBillLine size={18} /> Postpaid
                                </span>
                            </label>
                        </div>
                        {errors.rechargeType && <span className="text-red-500 text-xs">Select recharge type</span>}
                    </div>

                    {/* Operator */}
                    <div className="mb-4">
                        <label className="block font-medium mb-2">Select Operator</label>
                        <select {...register('operator', { required: true })} className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300">
                            <option value="">Select Operator</option>
                            {operators.map(op => <option key={op} value={op}>{op}</option>)}
                        </select>
                        {errors.operator && <span className="text-red-500 text-xs">Select operator</span>}
                    </div>

                    {/* Mobile Number */}
                    <div className="mb-4">
                        <label className="block font-medium mb-2">Mobile Number</label>
                        <div className="relative">
                            <span className="absolute left-3 top-3 text-gray-400">
                                <CiMobile1 size={18} />
                            </span>
                            <input
                                type="text"
                                maxLength={10}
                                placeholder="Enter 10-digit mobile number"
                                {...register('mobile', { required: true, pattern: /^[0-9]{10}$/ })}
                                className="w-full border rounded px-10 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
                            />
                        </div>
                        {errors.mobile && <span className="text-red-500 text-xs">Enter valid 10-digit mobile number</span>}
                    </div>

                    {/* Amount */}
                    <div className="mb-4">
                        <label className="block font-medium mb-2">Amount</label>
                        <div className="relative mb-2">
                            <span className="absolute left-3 top-3 text-gray-400">
                                <BsCurrencyRupee size={18} />
                            </span>
                            <input
                                type="number"
                                placeholder="Enter amount"
                                {...register('amount', { required: true, min: 10 })}
                                className="w-full border rounded px-10 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
                            />
                        </div>
                        <div className="flex gap-2 mb-1">
                            {amounts.map((amt, idx) => (
                                <button
                                    type="button"
                                    key={idx}
                                    className="bg-gray-100 px-3 py-1 rounded border border-gray-200 hover:bg-purple-100"
                                    onClick={() => setValue('amount', amt)}
                                >
                                    ₹{amt}
                                </button>
                            ))}
                        </div>
                        {errors.amount && <span className="text-red-500 text-xs">Enter a valid amount</span>}
                    </div>

                    {/* Transaction Pin */}
                    <div className="mb-6">
                        <label className="block font-medium mb-2">Transaction Pin</label>
                        <div className="relative">
                            <span className="absolute left-3 top-3 text-gray-400">
                                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M17 10V7a5 5 0 0 0-10 0v3H5v10h14V10h-2Zm-8-3a3 3 0 1 1 6 0v3H9V7Zm8 5v6H7v-6h10Z" /></svg>
                            </span>
                            <input
                                type="password"
                                maxLength={4}
                                placeholder="Enter 4-digit TPIN"
                                {...register('tpin', { required: true, pattern: /^[0-9]{4}$/ })}
                                className="w-full border rounded px-10 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
                            />
                        </div>
                        {errors.tpin && <span className="text-red-500 text-xs">Enter 4-digit TPIN</span>}
                    </div>

                    <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg font-semibold shadow hover:from-purple-600 hover:to-pink-600 transition">Recharge Now</button>
                </form>
            </div>
        </div>
    );
}
