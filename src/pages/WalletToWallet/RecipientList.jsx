import React from 'react'
import { Link } from 'react-router-dom';

function RecipientList() {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="mb-6">
                <nav className="text-sm text-gray-500">
                    <Link to="/dashboard" className="hover:underline">Home</Link>
                    <span className="mx-1">&gt;</span>
                    <Link to="/wallet-transfer/history" className="hover:underline">Wallet to Wallet</Link>
                    <span className="mx-1">&gt;</span>
                    <span className="text-gray-700">Recipient List</span>
                </nav>
                <h2 className="text-3xl font-bold text-gray-800 mt-2">Recipient List</h2>
            </div>
            <div>RecipientList</div>
        </div>
    )
}

export default RecipientList