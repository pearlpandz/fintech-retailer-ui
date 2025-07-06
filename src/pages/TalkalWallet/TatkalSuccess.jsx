import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpring, animated as Animated } from '@react-spring/web';

const TatkalSuccess = () => {
    const navigate = useNavigate();

    // Animation for the success icon/checkmark
    const successAnim = useSpring({
        from: { scale: 0, opacity: 0 },
        to: { scale: 1, opacity: 1 },
        config: { tension: 200, friction: 16 },
        delay: 100,
    });

    const handleDownload = () => {
        // Placeholder for download logic
        alert('Receipt download not implemented.');
    };

    return (
        <div style={{ minHeight: '100vh', background: '#fff' }}>
            <div className="mb-6">
                <nav className="text-sm text-gray-500">
                    <Link to="/dashboard" className="hover:underline">Home</Link>
                    <span className="mx-1">&gt;</span>
                    <span className="text-gray-700">Tatkal Success</span>
                </nav>
                <h2 className="text-3xl font-bold text-gray-800 mt-2">Tatkal Success</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 32 }}>
                <Animated.div style={{
                    ...successAnim,
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #4caf50 60%, #81c784 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 12px #b2dfdb44',
                    marginBottom: 12,
                }}>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 11 17 4 10" />
                    </svg>
                </Animated.div>
                <h2 style={{ textAlign: 'center', color: 'green', marginTop: 8, fontWeight: 600 }}>
                    Transaction Successful
                </h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
                <div style={{
                    padding: 32,
                    minWidth: 400,
                    background: '#fff',
                    border: '1.5px solid #d1a6d1',
                    borderRadius: 8,
                    boxShadow: '2px 2px 8px #eee',
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>Amount</span>
                            <span style={{ fontWeight: 500 }}>₹12,000</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>Transaction ID</span>
                            <span style={{ fontWeight: 500 }}>TXN123456789</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>Date &amp; Time</span>
                            <span style={{ fontWeight: 500 }}>Jan 24, 2024 15:30</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>Payment Mode</span>
                            <span style={{ fontWeight: 700 }}>Credit Card</span>
                        </div>
                    </div>
                    <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
                        <button
                            style={{
                                background: 'linear-gradient(90deg, #b100a1 0%, #d13ad1 100%)',
                                color: '#fff',
                                border: 'none',
                                borderRadius: 6,
                                padding: '10px 0',
                                fontWeight: 500,
                                fontSize: 15,
                                cursor: 'pointer',
                            }}
                            onClick={handleDownload}
                        >
                            Download Receipt
                        </button>
                        <button
                            style={{
                                background: '#fff',
                                color: '#222',
                                border: '1.5px solid #b100a1',
                                borderRadius: 6,
                                padding: '10px 0',
                                fontWeight: 500,
                                fontSize: 15,
                                cursor: 'pointer',
                            }}
                            onClick={() => navigate('/dashboard')}
                        >
                            Back to Dashboard
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TatkalSuccess;
