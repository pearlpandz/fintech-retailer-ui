import React from 'react';
import { FaCreditCard, FaMobileAlt, FaExchangeAlt, FaHandHoldingUsd, FaTv, FaFileInvoice } from 'react-icons/fa';

const iconMap = {
    'Credit Card Services': <FaCreditCard className="text-purple-500 text-lg" />,
    'Mobile Recharge': <FaMobileAlt className="text-purple-500 text-lg" />,
    'Money Transfer': <FaExchangeAlt className="text-purple-500 text-lg" />,
    'Collection Service': <FaHandHoldingUsd className="text-purple-500 text-lg" />,
    'D2H Services': <FaTv className="text-purple-500 text-lg" />,
    'Bill Payment Services': <FaFileInvoice className="text-purple-500 text-lg" />,
};

const services = [
    { name: 'Credit Card Services', value: '₹12,334', status: 'Active' },
    { name: 'Mobile Recharge', value: '₹4,568,906', status: 'Active' },
    { name: 'Money Transfer', value: '₹0', status: 'Active' },
    { name: 'Collection Service', value: '₹0', status: 'Active' },
    { name: 'D2H Services', value: '₹0', status: 'Active' },
    { name: 'Bill Payment Services', value: '₹0', status: 'Active' },
];

const BusinessServices = () => {
    return (
        <section className="my-6">
            <h3 className="font-semibold mb-2 text-[#222]">Business Services</h3>
            <div className="grid grid-cols-3 gap-6 mb-2">
                {services.map((s, i) => (
                    <div key={i} className="bg-white rounded-xl border border-purple-100 p-4 flex flex-col gap-2 shadow-sm min-h-[90px]">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">{iconMap[s.name]}<span className="font-medium text-[#222]">{s.name}</span></div>
                            <span className="text-xs text-green-500 font-medium">{s.status}</span>
                        </div>
                        <div className="text-lg font-bold text-[#222]">{s.value}</div>
                    </div>
                ))}
            </div>
        </section>
    )
};

export default BusinessServices;
