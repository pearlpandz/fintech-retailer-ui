import React, { useState } from "react";
import { Link } from 'react-router-dom';
import AddBillPopup from '../../components/AddBillPopup';
import PayBillPopup from '../../components/PayBillPopup';

const bills = [
    {
        icon: (
            <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500"
            >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l2 2" />
            </svg>
        ),
        name: "Gas Bill",
        due: "Due on 20th July",
    },
    {
        icon: (
            <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500"
            >
                <circle cx="12" cy="12" r="10" />
                <path d="M15 9a3 3 0 0 1-6 0" />
                <path d="M9 9V7a3 3 0 0 1 6 0v2" />
            </svg>
        ),
        name: "Mobile Recharge",
        due: "Due on 25th July",
    },
    {
        icon: (
            <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500"
            >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
            </svg>
        ),
        name: "Electricity Bill",
        due: "Due on 30th July",
    },
];

export default function BillPayment() {
    const [popupOpen, setPopupOpen] = useState(false);
    const [payPopupOpen, setPayPopupOpen] = useState(false);
    const handlePopupSubmit = (data) => {
        setPopupOpen(false);
        // You can handle the submitted data here (e.g., API call)
        console.log('Bill Payment Data:', data);
    };
    const handlePayPopupSubmit = (data) => {
        setPayPopupOpen(false);
        // Handle pay bill data here
        console.log('Pay Bill Data:', data);
    };

    return (
        <div className="min-h-screen bg-[#F8F9FB] flex flex-col">
            <div className="mb-6">
                <nav className="text-sm text-gray-500">
                    <Link to="/dashboard" className="hover:underline">Home</Link>
                    <span className="mx-1">&gt;</span>
                    <span className="text-gray-700">Bill Payment</span>
                </nav>
                <h2 className="text-3xl font-bold text-gray-800 mt-2">Bill Payment</h2>
            </div>
            <div className="flex flex-col gap-8 p-8 pt-0">
                {bills.map((bill) => (
                    <div key={bill.name} className="flex items-center gap-4">
                        <div className="bg-gray-100 p-4 rounded-lg">{bill.icon}</div>
                        <div>
                            <div className="font-semibold text-lg">{bill.name}</div>
                            <div className="text-gray-500 text-sm">{bill.due}</div>
                        </div>
                        <div className="flex-1" />
                        <button className="bg-blue-100 px-8 py-2 rounded-lg font-medium text-gray-700 hover:bg-blue-200" onClick={() => setPayPopupOpen(true)}>
                            Pay Bill
                        </button>
                    </div>
                ))}
            </div>
            <AddBillPopup open={popupOpen} onClose={() => setPopupOpen(false)} onSubmit={handlePopupSubmit} />
            <PayBillPopup open={payPopupOpen} onClose={() => setPayPopupOpen(false)} onSubmit={handlePayPopupSubmit} />
        </div>
    );
}
