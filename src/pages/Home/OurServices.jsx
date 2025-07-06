import React from 'react';
import { FaMobileAlt, FaFileInvoice, FaUniversity, FaTv } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ourServices = [
    { name: 'Mobile Recharge', icon: <FaMobileAlt className="text-3xl mb-1" />, path: '/mobile-recharge' },
    { name: 'Bill Payment', icon: <FaFileInvoice className="text-3xl mb-1" />, path: '/bill-payment' },
    { name: 'PG-I', icon: <FaUniversity className="text-3xl mb-1" />, path: '/mobile-recharge' },
    { name: 'DTH Recharge', icon: <FaTv className="text-3xl mb-1" />, path: '/mobile-recharge' },
];

const OurServices = () => {
    const navigate = useNavigate();
    return (
        <section className="my-6">
            <h3 className="font-semibold mb-2 text-[#222]">Our Services</h3>
            <div className="flex gap-6">
                {ourServices.map((s, i) => (
                    <button key={i} onClick={() => navigate(s.path)} className="flex flex-col items-center justify-center border-2 border-purple-200 rounded-lg px-10 py-6 bg-white text-purple-700 font-semibold gap-2 hover:bg-purple-50 min-w-[170px] shadow-sm text-base">
                        {s.icon}
                        <span>{s.name}</span>
                    </button>
                ))}
            </div>
        </section>
    )
};

export default OurServices;
