import React from 'react';
import { FaFilter, FaUndo } from 'react-icons/fa';

const BusinessSummary = ({ yesterday, total }) => {
    if (yesterday) {
        return (
            <div className="rounded-2xl bg-gradient-to-tr from-[#D1A0F7] to-[#B16CEA] p-6 h-32 flex flex-col justify-between shadow-md">
                <div className="flex justify-between items-center">
                    <span className="text-base font-semibold text-white">Yesterday's Business</span>
                    <button className="bg-white/30 px-2 py-1 rounded text-xs text-white flex items-center gap-1"><FaUndo /> </button>
                </div>
                <div className="text-2xl font-bold text-white">₹4,568,906</div>
            </div>
        );
    }
    if (total) {
        return (
            <div className="rounded-2xl bg-gradient-to-tr from-[#6DC6F6] to-[#3A8DDF] p-6 h-32 flex flex-col justify-between shadow-md">
                <div className="flex items-center gap-2">
                    <span className="text-base font-semibold text-white">Total Business</span>
                </div>
                <div className="text-2xl font-bold text-white">₹0</div>
            </div>
        );
    }
    return (
        <div className="rounded-2xl bg-gradient-to-tr from-[#6C63FF] to-[#B16CEA] p-6 h-32 flex flex-col justify-between shadow-md">
            <div className="flex justify-between items-center">
                <span className="text-base font-semibold text-white">Today's Business</span>
                <button className="bg-white/30 px-2 py-1 rounded text-xs text-white flex items-center gap-1"><FaFilter /> Filter</button>
            </div>
            <div className="flex gap-8 mt-2">
                <div>
                    <div className="text-xs text-white/80">Completed</div>
                    <div className="font-bold text-lg text-white">₹12,334</div>
                </div>
                <div>
                    <div className="text-xs text-white/80">Pending</div>
                    <div className="font-bold text-lg text-white">₹4,500</div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;
