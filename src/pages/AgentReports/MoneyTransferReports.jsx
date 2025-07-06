import React, { useState } from 'react';
import DataTable from '../../components/DataTable';
import { Link } from 'react-router-dom';

const columns = [
    { Header: 'SrNo', accessor: 'srno' },
    { Header: 'TransDate', accessor: 'transdate' },
    { Header: 'TransID', accessor: 'transid' },
    { Header: 'Name', accessor: 'name' },
    { Header: 'MobileNo', accessor: 'mobileno' },
    { Header: 'Request from user', accessor: 'requestfromuser' },
    { Header: 'Type', accessor: 'type' },
    { Header: 'Status', accessor: 'status' },
];

const data = [
    {
        srno: 1,
        transdate: '2025-06-28',
        transid: 'TXN12345',
        name: 'John Doe',
        mobileno: '9876543210',
        requestfromuser: 'KYC Update',
        type: 'Aadhaar',
        status: 'Approved',
    },
    {
        srno: 2,
        transdate: '2025-06-27',
        transid: 'TXN12346',
        name: 'Jane Smith',
        mobileno: '9123456780',
        requestfromuser: 'KYC Update',
        type: 'PAN',
        status: 'Pending',
    },
    {
        srno: 3,
        transdate: '2025-06-26',
        transid: 'TXN12347',
        name: 'Alice Brown',
        mobileno: '9988776655',
        requestfromuser: 'KYC Update',
        type: 'Aadhaar',
        status: 'Rejected',
    },
];

const MoneyTransferReports = () => {
    const [filters, setFilters] = useState({
        fromDate: '',
        endDate: '',
        transaction: '',
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className='mt-6'>
            <div className="mb-6">
                <nav className="text-sm text-gray-500">
                    <Link to="/dashboard" className="hover:underline">Home</Link>
                    <span className="mx-1">&gt;</span>
                    <span className="text-gray-700">Money Transfer Reports</span>
                </nav>
                <h2 className="text-3xl font-bold text-gray-800 mt-2">Money Transfer Reports</h2>
            </div>
            <div className="flex gap-8 mt-6 mb-4">
                <div className="flex flex-col flex-1">
                    <label className="text-sm text-purple-600 font-medium mb-1" htmlFor="fromDate">From Date</label>
                    <input
                        type="date"
                        id="fromDate"
                        name="fromDate"
                        value={filters.fromDate}
                        onChange={handleFilterChange}
                        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                </div>
                <div className="flex flex-col flex-1">
                    <label className="text-sm text-purple-600 font-medium mb-1" htmlFor="endDate">End Date</label>
                    <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        value={filters.endDate}
                        onChange={handleFilterChange}
                        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                </div>
                <div className="flex flex-col flex-1">
                    <label className="text-sm text-purple-600 font-medium mb-1" htmlFor="transaction">Transaction</label>
                    <select
                        id="transaction"
                        name="transaction"
                        value={filters.transaction}
                        onChange={handleFilterChange}
                        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    >
                        <option value="">Select</option>
                        <option value="Aadhaar">Aadhaar</option>
                        <option value="PAN">PAN</option>
                    </select>
                </div>
            </div>
            <DataTable columns={columns} data={data} title="KYC Status List" />
        </div>
    );
};

export default MoneyTransferReports;
