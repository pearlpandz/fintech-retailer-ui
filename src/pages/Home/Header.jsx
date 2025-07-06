import React, { useMemo, useState, useRef, useEffect } from 'react';
import { FaSearch, FaCreditCard } from 'react-icons/fa';
import { useWebSocketStatus } from '../../context/websocket.context';
import { Link } from 'react-router-dom';


const Header = () => {
    const { status } = useWebSocketStatus();

    const color = useMemo(() => {
        switch (status) {
            case "connected": return "bg-green-500";
            case "disconnected": return "bg-red-500";
            case "error": return "bg-orange-500";
            default: return "bg-gray-500";
        }
    }, [status]);

    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const userRef = useRef(null);

    // Close menu on outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                userRef.current &&
                !userRef.current.contains(event.target)
            ) {
                setMenuOpen(false);
            }
        }
        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <header className="w-full h-[70px] min-h-[70px] bg-white border-b border-gray-300 flex items-center justify-between px-0">
            {/* Logo */}
            <div className="flex items-center" style={{ minWidth: 220 }}>
                <Link to="/" className="flex items-baseline font-extrabold text-2xl text-purple-700 select-none ml-16">
                    PayDash <span className={`ml-1 h-3 w-3 rounded-full ${color}`} />
                </Link>
            </div>
            {/* Search Bar */}
            <div className="flex-1 flex justify-center">
                <div className="relative w-[420px]">
                    <input
                        type="text"
                        placeholder="Search transactions, users.."
                        className="border-2 border-gray-300 rounded-lg pl-10 pr-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-200 text-lg text-gray-700"
                    />
                    <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                </div>
            </div>
            {/* Wallet and User */}
            <div className="flex items-center gap-6 mr-16">
                <Link to="/wallet" className="flex items-center gap-2 bg-pink-200/80 text-purple-700 px-6 py-2 rounded-xl font-semibold text-lg shadow-sm">
                    <FaCreditCard className="text-xl" />
                    <span>₹12,000</span>
                </Link>
                <div className="relative">
                    <div
                        ref={userRef}
                        className="flex items-center gap-2 cursor-pointer select-none"
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-10 h-10 rounded-full object-cover border border-gray-200" />
                        <span className="font-semibold text-black text-lg">John Doe</span>
                    </div>
                    {menuOpen && (
                        <div
                            ref={menuRef}
                            className="absolute right-0 mt-3 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
                        >
                            <div className="flex flex-col p-2  text-lg font-medium">
                                <Link to="/talkal-wallet-load" className="text-left hover:bg-gray-100 rounded px-2 py-1">Tatkal Wallet Load</Link>
                                <Link to="/settlement" className="text-left hover:bg-gray-100 rounded px-2 py-1">Settlement</Link>
                                <Link to="/account" className="text-left hover:bg-gray-100 rounded px-2 py-1">Account Info</Link>
                                <Link to="/logout" className="text-left hover:bg-gray-100 rounded px-2 py-1 text-red-500">Log Out</Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
};

export default Header;
