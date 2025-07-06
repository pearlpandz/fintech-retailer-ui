import React from 'react';

const PreviousTransactions = () => (
    <section className="my-8">
        <h3 className="font-semibold mb-2 text-[#222]">Previous Transactions</h3>
        <table className="w-full border border-purple-200 rounded-lg text-sm bg-white shadow-sm">
            <thead>
                <tr className="bg-white">
                    <th className="p-2 border-b border-purple-200 font-semibold text-[#222]">Date</th>
                    <th className="p-2 border-b border-purple-200 font-semibold text-[#222]">txn_type</th>
                    <th className="p-2 border-b border-purple-200 font-semibold text-[#222]">TxnID</th>
                    <th className="p-2 border-b border-purple-200 font-semibold text-[#222]">Credit</th>
                    <th className="p-2 border-b border-purple-200 font-semibold text-[#222]">Debit</th>
                    <th className="p-2 border-b border-purple-200 font-semibold text-[#222]">TXNStatus</th>
                </tr>
            </thead>
            <tbody>
                {/* No data rows for now */}
                <tr>
                    <td className="p-2 text-center text-gray-400" colSpan="6">No transactions found.</td>
                </tr>
            </tbody>
        </table>
    </section>
);

export default PreviousTransactions;
