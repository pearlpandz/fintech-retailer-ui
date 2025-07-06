import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const accountTypes = [
    { value: '', label: 'Select' },
    { value: 'savings', label: 'Savings' },
    { value: 'current', label: 'Current' },
];

const transferModes = [
    { value: 'instant', label: 'Instant' },
    { value: 'neft', label: 'NEFT' },
    { value: 'rtgs', label: 'RTGS' },
];

function SettlementForm() {

    const [form, setForm] = useState({
        accountType: '',
        bankAccount: '',
        contactNo: '',
        bankName: '',
        ifsc: '',
        holderName: '',
        bankitFee: '',
        balance: '',
        amount: '',
        transferMode: 'instant',
        pin: '',
        changePin: false,
        securePlus: false,
        agree: false,
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
                    <label className="block text-xs font-medium mb-1">Bankit Fee *</label>
                    <input name="bankitFee" value={form.bankitFee} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-medium mb-1">Total Settlement Balance</label>
                    <input name="balance" value={form.balance} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-medium mb-1">Amount <span className="text-pink-500">*</span></label>
                    <input name="amount" value={form.amount} onChange={handleChange} className="w-full border border-pink-400 rounded px-3 py-2 text-sm" />
                    <div className="text-xs text-pink-500 mt-1">You can not make any settlement exceeding your Total Settlement Balance/Allowed Settlement Limit/Wallet Balance</div>
                </div>
                <div>
                    <label className="block text-xs font-medium mb-1">Transfer Mode</label>
                    <select name="transferMode" value={form.transferMode} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 text-sm">
                        {transferModes.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-xs font-medium mb-1">Transaction Pin <span className="text-pink-500">*</span></label>
                    <div className="relative">
                        <input name="pin" type="password" value={form.pin} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 text-sm pr-10" />
                        <span className="absolute right-3 top-2.5 text-gray-400 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 1 12 6c2.042 0 3.97.613 5.58 1.66M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6.02 3.777A10.477 10.477 0 0 1 12 18c-2.042 0-3.97-.613-5.58-1.66M6.423 6.423l11.154 11.154" />
                            </svg>
                        </span>
                    </div>
                    <div className="flex items-center justify-end mt-2">
                        <Link to=''><span className="text-xs">Change Transaction Pin</span></Link>
                    </div>
                </div>
                <div className="flex items-center mt-2">
                    <input type="checkbox" name="securePlus" checked={form.securePlus} onChange={handleChange} className="mr-2" disabled />
                    <span className="text-xs text-gray-500">Rs. 0 will be charged for opting SecurePlus assurance plan on this transaction</span>
                </div>
                <div className="flex items-center mt-2">
                    <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} className="mr-2" disabled />
                    <span className="text-xs">I hereby agree to the <Link to='' className='underline'>terms & conditions</Link> of this settlement transaction.</span>
                </div>
            </div>
            <div className="flex space-x-4 mt-6 max-w-md">
                <button type="button" className="w-1/2 py-2 rounded bg-pink-200 text-pink-700 font-semibold" disabled>Cancel</button>
                <button type="submit" className="w-1/2 py-2 rounded bg-purple-700 text-white font-semibold" disabled>Submit</button>
            </div>
        </form>
    )
}

export default SettlementForm