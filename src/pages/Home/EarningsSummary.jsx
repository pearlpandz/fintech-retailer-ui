import React from 'react';
import { FaRegMoneyBillAlt, FaRegClock, FaRegChartBar } from 'react-icons/fa';

const EarningsSummary = ({ today, yesterday, total }) => {
    if (today) {
        return (
            <div className="rounded-2xl bg-gradient-to-tr from-[#3EDC81] to-[#1CB35B] p-6 h-28 flex flex-col justify-between shadow-md">
                <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/30 text-white mr-2"><FaRegMoneyBillAlt /></span>
                    <span className="text-base font-semibold text-white">Today's Earning</span>
                </div>
                <div className="text-2xl font-bold text-white">₹0</div>
            </div>
        );
    }
    if (yesterday) {
        return (
            <div className="rounded-2xl bg-gradient-to-tr from-[#FDCB6E] to-[#F97F51] p-6 h-28 flex flex-col justify-between shadow-md">
                <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/30 text-white mr-2"><FaRegClock /></span>
                    <span className="text-base font-semibold text-white">Yesterday's Earning</span>
                </div>
                <div className="text-2xl font-bold text-white">₹0</div>
            </div>
        );
    }
    if (total) {
        return (
            <div className="rounded-2xl bg-gradient-to-tr from-[#B2BEC3] to-[#636E72] p-6 h-28 flex flex-col justify-between shadow-md">
                <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/30 text-white mr-2"><FaRegChartBar /></span>
                    <span className="text-base font-semibold text-white">Total Earning</span>
                </div>
                <div className="text-2xl font-bold text-white">₹0</div>
            </div>
        );
    }
    return null;
};

export default EarningsSummary;
