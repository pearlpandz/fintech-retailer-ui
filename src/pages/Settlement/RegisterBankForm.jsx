import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const accountTypes = [
    { value: '', label: 'Select' },
    { value: 'savings', label: 'Savings' },
    { value: 'current', label: 'Current' },
];


function RegisterBankForm() {
    const [form, setForm] = useState({
        bankName: '',
        accountType: '',
        holderName: '',
        bankAccount: '',
        confirmBankAccount: '',
        ifsc: '',
        contactNo: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit logic here
    };

    // Autocomplete logic for Bank Name with debounce
    const [bankNameInput, setBankNameInput] = useState('');

    // Sample autocomplete data for account holders
    const accountHolderData = [
        {
            accountNo: '1234567890',
            holderName: 'Amit Sharma',
            accountType: 'savings',
            bankName: 'HDFC Bank',
            contactNo: '9876543211',
            ifsc: 'HDFC0001234',
        },
        {
            accountNo: '9876543210',
            holderName: 'Priya Singh',
            accountType: 'current',
            bankName: 'State Bank of India',
            contactNo: '9123456789',
            ifsc: 'SBIN0005678',
        },
        {
            accountNo: '5556667778',
            holderName: 'Rahul Verma',
            accountType: 'savings',
            bankName: 'ICICI Bank',
            contactNo: '9988776655',
            ifsc: 'ICIC0004321',
        },
        {
            accountNo: '1122334455',
            holderName: 'Sneha Patel',
            accountType: 'current',
            bankName: 'HDFC Bank',
            contactNo: '9001122334',
            ifsc: 'HDFC0005678',
        },
        {
            accountNo: '9988776655',
            holderName: 'Vikas Gupta',
            accountType: 'savings',
            bankName: 'State Bank of India',
            contactNo: '9876501234',
            ifsc: 'SBIN0008765',
        },
        // ...add more as needed
    ];

    React.useEffect(() => {
        // If account is selected from autocomplete, update all relevant fields
        const selected = accountHolderData.find(acc => acc.accountNo === form.bankAccount);
        if (selected) {
            setForm(prev => ({
                ...prev,
                holderName: selected.holderName,
                accountType: selected.accountType,
                bankName: selected.bankName,
                contactNo: selected.contactNo,
                ifsc: selected.ifsc,
            }));
            setBankNameInput(selected.bankName);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [form.bankAccount]);




    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-3 max-w-md">
                <div className="bank-autocomplete relative">
                    <label className="block text-xs font-medium mb-1">Bank Name</label>
                    <input
                        name="bankName"
                        value={bankNameInput}
                        onChange={handleChange}
                        autoComplete="off"
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm"

                    />
                </div>
                <div>
                    <label className="block text-xs font-medium mb-1">Settlement Account Type</label>
                    <select name="accountType" value={form.accountType} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                        {accountTypes.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-xs font-medium mb-1">A/C Holder Name</label>
                    <input
                        name="holderName"
                        value={form.holderName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm"

                    />
                </div>
                <div className="account-autocomplete relative">
                    <label className="block text-xs font-medium mb-1">Search Bank A/C No. or Name</label>
                    <input
                        name="bankAccount"
                        value={form.bankAccount}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                        autoComplete="off"
                    />
                </div>
                <div className="account-autocomplete relative">
                    <label className="block text-xs font-medium mb-1">Search Bank A/C No. or Name</label>
                    <input
                        name="confirmBankAccount"
                        value={form.confirmBankAccount}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                        autoComplete="off"
                    />
                </div>
                <div>
                    <label className="block text-xs font-medium mb-1">IFSC Code</label>
                    <input name="ifsc" value={form.ifsc} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-medium mb-1">Contact No.</label>
                    <input name="contactNo" value={form.contactNo} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 text-sm" />
                </div>
            </div>
            <div className="flex space-x-4 mt-6 max-w-lg">
                <button type="button" className="w-1/2 py-2 rounded  text-white font-semibold" style={{ background: "linear-gradient(90deg, #b100a1 0%, #d13ad1 100%)" }}>Cancel</button>
                <button type="submit" className="w-1/2 py-2 rounded bg-purple-700 text-white font-semibold" >Register Beneficiary</button>
                <button type="button" className="w-1/2 py-2 rounded  text-white font-semibold" style={{ background: "linear-gradient(90deg, #b100a1 0%, #d13ad1 100%)" }} >Verify Beneficiary</button>
            </div>
        </form>
    )
}

export default RegisterBankForm