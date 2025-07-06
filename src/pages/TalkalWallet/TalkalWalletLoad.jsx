import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const paymentGateways = [
    { label: "RAZOR-CC", value: "razor-cc" },
    { label: "RAZOR-OTHERS", value: "razor-others" },
    { label: "RAZOR-CC MasterCard", value: "razor-cc-mc" },
    { label: "RAZOR-CC Rupay", value: "razor-cc-rupay" },
    { label: "PAY10-CC", value: "pay10-cc" },
    { label: "PAY10-CC MasterCard", value: "pay10-cc-mc" },
    { label: "PAY10-CC Rupay", value: "pay10-cc-rupay" },
];
const paymentModes = [
    { label: "Credit Card", value: "cc" },
    { label: "Debit Card", value: "dc" },
    { label: "Net Banking", value: "nb" },
];
const charges = [
    { type: "RAZOR-CC", percent: 1.2, amount: 0 },
    { type: "RAZOR-OTHERS", percent: 1.2, amount: 0 },
    { type: "RAZOR-CC MasterCard", percent: 1.2, amount: 0 },
    { type: "RAZOR-CC Rupay", percent: 1.2, amount: 0 },
    { type: "PAY10-CC", percent: 1.2, amount: 0 },
    { type: "PAY10-CC MasterCard", percent: 1.2, amount: 0 },
    { type: "PAY10-CC Rupay", percent: 1.2, amount: 0 },
    { type: "RAZOR-CC", percent: 1.2, amount: 0 },
    { type: "RAZOR-CC", percent: 1.2, amount: 0 },
];

export default function TalkalWalletLoad() {
    const navigate = useNavigate();
    const [gateway, setGateway] = useState("");
    const [mode, setMode] = useState("");
    const [consent, setConsent] = useState(false);
    const [otp, setOtp] = useState(["", "", "", "", ""]);
    const [timer, setTimer] = useState(119);
    const [otpSent, setOtpSent] = useState(false);

    // Timer logic (simplified)
    React.useEffect(() => {
        let interval;
        if (otpSent && timer > 0) {
            interval = setInterval(() => setTimer((t) => t - 1), 1000);
        }
        return () => clearInterval(interval);
    }, [otpSent, timer]);

    // Handle OTP input
    const handleOtpChange = (idx, e) => {
        const value = e.replace(/\D/g, '');
        if (value.length > 1) return;
        const newOtp = [...otp];
        newOtp[idx] = value;
        setOtp(newOtp);
        // Move to next input if value entered
        if (value && idx < 5) {
            document.getElementById(`otp-${idx + 1}`).focus();
        }
    };

    const handleVerifyOTP = () => {
        navigate('/tatkal-success')
    }

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="mb-6">
                <nav className="text-sm text-gray-500">
                    <Link to="/dashboard" className="hover:underline">Home</Link>
                    <span className="mx-1">&gt;</span>
                    <span className="text-gray-700">Tatkal Wallet Load</span>
                </nav>
                <h2 className="text-3xl font-bold text-gray-800 mt-2">Tatkal Wallet Load</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Account Info & Charges */}
                <div className="md:col-span-1 flex flex-col gap-6">
                    <div className="bg-white rounded-xl shadow p-5">
                        <div className="font-semibold text-lg mb-2 text-gray-700">Account Information</div>
                        <div className="flex flex-col gap-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-fuchsia-600 font-medium">Total Deposit</span>
                                <span className="font-semibold">Rs 1123456</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-fuchsia-600 font-medium">Used</span>
                                <span className="font-semibold">Rs 12345677</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-fuchsia-600 font-medium">Balance</span>
                                <span className="font-semibold">Rs 56.00</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-fuchsia-600 font-medium">Cut Off</span>
                                <span className="font-semibold">Rs 0.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow p-5">
                        <div className="font-semibold text-lg mb-2 text-gray-700">Charges Details</div>
                        <div className="flex text-xs font-semibold text-gray-500 mb-2">
                            <div className="w-1/2">Type</div>
                            <div className="w-1/4">%</div>
                            <div className="w-1/4">Rs.</div>
                        </div>
                        <div className="divide-y text-xs">
                            {charges.map((c, i) => (
                                <div className="flex py-1" key={i}>
                                    <div className="w-1/2 text-fuchsia-600 cursor-pointer hover:underline">{c.type}</div>
                                    <div className="w-1/4">{c.percent}</div>
                                    <div className="w-1/4">{c.amount.toFixed(2)}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Wallet Topup Form */}
                <div className="md:col-span-2 bg-white rounded-xl shadow p-6">
                    <div className="font-semibold text-lg mb-4 text-gray-700">Tatkal Wallet Topup</div>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium">Agency Name</label>
                            <input className="input input-bordered rounded-md px-3 py-2 border border-gray-300" value="John" readOnly />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium">Current Balance Amt</label>
                            <input className="input input-bordered rounded-md px-3 py-2 border border-gray-300" value="₹12,000" readOnly />
                        </div>
                        <div className="flex flex-col gap-2 md:col-span-2">
                            <label className="text-sm font-medium">Request For Amt</label>
                            <input className="input input-bordered rounded-md px-3 py-2 border border-gray-300" placeholder="Enter amount" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium">Payment gateway</label>
                            <select className="input input-bordered rounded-md px-3 py-2 border border-gray-300" value={gateway} onChange={e => setGateway(e.target.value)}>
                                <option value="">Select Payment gateway</option>
                                {paymentGateways.map((g) => (
                                    <option key={g.value} value={g.value}>{g.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium">Payment Mode</label>
                            <select className="input input-bordered rounded-md px-3 py-2 border border-gray-300" value={mode} onChange={e => setMode(e.target.value)}>
                                <option value="">Select Payment Mode</option>
                                {paymentModes.map((m) => (
                                    <option key={m.value} value={m.value}>{m.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium">Email Id</label>
                            <input className="input input-bordered rounded-md px-3 py-2 border border-gray-300" placeholder="Enter email" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium">Mobile No.</label>
                            <input className="input input-bordered rounded-md px-3 py-2 border border-gray-300" placeholder="Enter mobile number" />
                        </div>
                        <div className="md:col-span-2 mt-2">
                            <div className="text-fuchsia-600 font-semibold text-sm mb-1">Card Holder Consent Form</div>
                            <label className="flex items-start gap-2 text-xs text-gray-700">
                                <input type="checkbox" className="mt-1 accent-fuchsia-600" checked={consent} onChange={e => setConsent(e.target.checked)} />
                                <span>I, a retailer of Bankit, Confirm that I have downloaded and filled out the form on behalf of the customer. I shall provide details about this transaction whenever required.</span>
                            </label>
                        </div>
                        <div className="md:col-span-2 flex justify-end mt-2">
                            <button type="button" className="bg-fuchsia-600 text-white px-8 py-2 rounded-md font-semibold disabled:opacity-50" disabled={!consent} onClick={() => { setOtpSent(true); setTimer(119); }}>Generate OTP</button>
                        </div>
                    </form>
                    {/* OTP Section */}
                    {otpSent && (
                        <div className="mt-8 border-t pt-6">
                            <div className="font-semibold text-base mb-2">Enter OTP</div>
                            <div className="text-xs text-gray-600 mb-2">Please enter the OTP sent to your registered mobile number</div>
                            <div className="flex gap-2 mb-2">
                                {otp.map((d, i) => (
                                    <input
                                        key={i}
                                        id={`otp-${i}`}
                                        type="text"
                                        inputMode="numeric"
                                        className="w-10 h-10 text-center border border-gray-300 rounded-md text-lg"
                                        maxLength={1}
                                        value={d}
                                        onChange={e => handleOtpChange(i, e.target.value)}
                                        onKeyDown={e => handleOtpChange(i, e.target.value)}
                                        disabled={!otpSent}
                                    />
                                ))}
                            </div>
                            <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                                <span>Time remaining: {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}</span>
                                <button className="text-fuchsia-600 hover:underline" type="button" disabled={timer > 0} onClick={() => { setOtpSent(true); setTimer(119); }}>Resend OTP</button>
                            </div>
                            <button className="bg-fuchsia-600 text-white px-8 py-2 rounded-md font-semibold" disabled={otp.some(d => !d) || !otpSent} onClick={handleVerifyOTP}>Verify OTP</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
