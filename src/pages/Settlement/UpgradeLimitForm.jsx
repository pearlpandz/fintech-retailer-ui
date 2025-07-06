import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const accountTypes = [
    { value: '', label: 'Select' },
    { value: 'savings', label: 'Savings' },
    { value: 'current', label: 'Current' },
];


function UpgradeLimitForm() {

    const [form, setForm] = useState({
        accountType: '',
        bankAccount: '',
        bankName: '',
        ifsc: '',
        holderName: '',
        contactNo: '',
        panNo: '',
        expectedUpgradeLimit: ''
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

    const [accountInput, setAccountInput] = useState('');
    const [filteredAccounts, setFilteredAccounts] = useState([]);
    const [showAccountDropdown, setShowAccountDropdown] = useState(false);
    const accountDebounceTimeout = React.useRef();

    const handleAccountInput = (e) => {
        const value = e.target.value;
        setAccountInput(value);
        setForm((prev) => ({
            ...prev,
            bankAccount: value,
        }));
        setShowAccountDropdown(true);
        if (accountDebounceTimeout.current) clearTimeout(accountDebounceTimeout.current);
        accountDebounceTimeout.current = setTimeout(() => {
            if (value.trim() === '') {
                setFilteredAccounts([]);
            } else {
                setFilteredAccounts(
                    accountHolderData.filter(
                        (acc) =>
                            acc.accountNo.includes(value) ||
                            acc.holderName.toLowerCase().includes(value.toLowerCase())
                    )
                );
            }
        }, 300);
    };

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

    const handleAccountSelect = (acc) => {
        setForm((prev) => ({
            ...prev,
            bankAccount: acc.accountNo,
            holderName: acc.holderName,
        }));
        setAccountInput(acc.accountNo);
        setShowAccountDropdown(false);
    };

    React.useEffect(() => {
        // Hide dropdown on outside click for account autocomplete
        const handleClick = (e) => {
            if (!e.target.closest('.account-autocomplete')) {
                setShowAccountDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-3 max-w-md">
                <div className="account-autocomplete relative">
                    <label className="block text-xs font-medium mb-1">Search Bank A/C No. or Name</label>
                    <input
                        name="bankAccount"
                        value={accountInput}
                        onChange={handleAccountInput}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                        autoComplete="off"
                        onFocus={() => {
                            setShowAccountDropdown(true);
                            setFilteredAccounts(accountHolderData);
                        }}
                    />
                    {showAccountDropdown && filteredAccounts.length > 0 && (
                        <ul className="absolute z-10 bg-white border border-gray-200 w-full mt-1 rounded shadow max-h-40 overflow-auto">
                            {filteredAccounts.map((acc) => (
                                <li
                                    key={acc.accountNo}
                                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                    onClick={() => handleAccountSelect(acc)}
                                >
                                    <span className="font-semibold">{acc.holderName}</span> - {acc.accountNo}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div>
                    <label className="block text-xs font-medium mb-1">A/C Holder Name</label>
                    <input
                        name="holderName"
                        value={form.holderName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                        readOnly
                    />
                </div>
                <div>
                    <label className="block text-xs font-medium mb-1">Settlement Account Type</label>
                    <select name="accountType" value={form.accountType} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" disabled>
                        {accountTypes.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </div>

                <div className="bank-autocomplete relative">
                    <label className="block text-xs font-medium mb-1">Bank Name</label>
                    <input
                        name="bankName"
                        value={bankNameInput}
                        onChange={() => { }}
                        autoComplete="off"
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                        readOnly
                    />
                </div>
                <div>
                    <label className="block text-xs font-medium mb-1">IFSC Code</label>
                    <input name="ifsc" value={form.ifsc} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 text-sm" readOnly />
                </div>
                <div>
                    <label className="block text-xs font-medium mb-1">Contact No.</label>
                    <input name="contactNo" value={form.contactNo} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 text-sm" readOnly />
                </div>
                <div>
                    <label className="block text-xs font-medium mb-1">PAN No.</label>
                    <input name="panNo" value={form.panNo} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-medium mb-1">Expecting Upgrad Limit</label>
                    <input name="expectedUpgradeLimit" value={form.expectedUpgradeLimit} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 text-sm" />
                </div>
            </div>
            <div className="flex space-x-4 mt-6 max-w-md">
                <button type="button" className="w-1/2 py-2 rounded  text-white font-semibold" style={{ background: "linear-gradient(90deg, #b100a1 0%, #d13ad1 100%)" }}>Cancel</button>
                <button type="submit" className="w-1/2 py-2 rounded bg-purple-700 text-white font-semibold">Submit</button>
            </div>
        </form>
    )
}

export default UpgradeLimitForm