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

const ComplaintList = () => {
    return (
        <div className='mt-6'>
            <div className="mb-6">
                <nav className="text-sm text-gray-500">
                    <Link to="/dashboard" className="hover:underline">Home</Link>
                    <span className="mx-1">&gt;</span>
                    <span className="text-gray-700">Complaints</span>
                </nav>
                <div className="flex justify-between my-4">
                    <h2 className="text-3xl font-bold text-gray-800">List of Complaints</h2>
                    <Link
                        to="/settings/complaints/new"
                        className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-4 py-1 rounded"
                    >
                        Add Complaint
                    </Link>
                </div>
            </div>
            <DataTable columns={columns} data={data} title="KYC Status List" />
        </div>
    );
};

export default ComplaintList;
