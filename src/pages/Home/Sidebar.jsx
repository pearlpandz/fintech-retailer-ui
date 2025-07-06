import React, { useState } from 'react';
import { FaHome, FaUser, FaExchangeAlt, FaChartBar, FaMoneyBill, FaCog, FaFileAlt, FaShieldAlt, FaChevronRight, FaChevronDown } from 'react-icons/fa';
import { FaAmazonPay } from 'react-icons/fa6';

import { NavLink } from 'react-router-dom';

const sidebarLinks = [
    { to: '/dashboard', icon: <FaHome className="text-lg" />, label: 'Dashboard', },
    { to: '/retailer-bank', icon: <FaUser className="text-lg" />, label: 'Agent Self Bank' },
    { to: '/wallet-transfer', icon: <FaExchangeAlt className="text-lg" />, label: 'Wallet to Wallet' },
    { to: '/pay-bills', icon: <FaAmazonPay className="text-lg" />, label: 'Pay Bills' },
    {
        label: 'Agent Reports',
        icon: <FaChartBar className="text-lg" />,
        submenu: [
            { to: '/agent-reports/ledger', label: 'Ledger Reports' },
            { to: '/agent-reports/cashout', label: 'Cashout Reports' },
            { to: '/agent-reports/money-transfer', label: 'Money Transfer Reports' },
            { to: '/agent-reports/money-hold', label: 'Money Transfer Hold' },
            { to: '/agent-reports/bill-payment', label: 'Bill Payment Reports' },
            { to: '/agent-reports/payment-gateway', label: 'Payment Gateway Reports' },
            { to: '/agent-reports/outstanding', label: 'Outstanding Reports' },
            { to: '/agent-reports/topup', label: 'Top up Reports' },
        ]
    },
    { to: '/balance-request', icon: <FaMoneyBill className="text-lg" />, label: 'Balance Request' },
    {
        label: 'Settings',
        icon: <FaCog className="text-lg" />,
        submenu: [
            { to: '/settings/set-tpin', label: 'Set TPIN' },
            { to: '/settings/reset-tpin', label: 'Reset TPIN' },
            { to: '/settings/change-password', label: 'Change Password' },
            { to: '/settings/complaints', label: 'Raise Complaint' },
        ]
    }
];

const Sidebar = () => {
    const [openSubmenu, setOpenSubmenu] = useState(null);

    return (
        <aside className="w-60 bg-white border-r border-gray-300 min-h-screen py-6 px-3 flex flex-col">
            <nav className="flex flex-col gap-2 text-gray-700">
                {sidebarLinks.map(({ to, icon, label, submenu }) =>
                    submenu ? (
                        <div key={label}>
                            <button
                                className={`flex items-center gap-3 px-4 py-2 rounded-lg text-base w-full text-left ${openSubmenu === label ? 'bg-purple-100 text-purple-700 font-bold' : 'hover:bg-purple-50'}`}
                                onClick={() => setOpenSubmenu(openSubmenu === label ? null : label)}
                                type="button"
                            >
                                {icon} {label}
                                <span className="ml-auto">{openSubmenu === label ? <FaChevronDown /> : <FaChevronRight />}</span>
                            </button>
                            {openSubmenu === label && (
                                <div className="ml-8 mt-1 flex flex-col gap-1">
                                    {submenu.map(({ to, label }) => (
                                        <NavLink
                                            key={label}
                                            to={to}
                                            className={({ isActive }) =>
                                                `flex items-center gap-2 px-2 py-1 rounded text-sm ${isActive ? 'bg-purple-50 text-purple-700 font-semibold' : 'hover:bg-purple-50'}`
                                            }
                                        >
                                            <span className="text-xs">{'>'}</span> {label}
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : (
                        <NavLink
                            key={label}
                            to={to}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-2 rounded-lg text-base ${isActive ? 'bg-purple-100 text-purple-700 font-bold' : 'hover:bg-purple-50'}`
                            }
                        >
                            {icon} {label}
                        </NavLink>
                    )
                )}
            </nav>
        </aside>
    );
};

export default Sidebar;