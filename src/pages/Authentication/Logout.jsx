import React from 'react';
import { useAuth } from '../../context/auth.context';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#fff' }}>
            <div style={{ background: '#ffe5e5', borderRadius: '50%', width: 80, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="red">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" />
                </svg>
            </div>
            <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>Logout</h1>
            <p style={{ fontSize: 18, marginBottom: 32 }}>Are you sure you want to logout?</p>
            <button
                style={{
                    background: 'linear-gradient(90deg, #a445ff 0%, #d41872 100%)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 6,
                    padding: '12px 0',
                    width: 250,
                    fontSize: 16,
                    fontWeight: 500,
                    marginBottom: 16,
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(164,69,255,0.08)'
                }}
                onClick={logout}
            >
                Yes, Logout
            </button>
            <button
                style={{
                    background: '#fff',
                    color: '#000',
                    border: '2px solid #a445ff',
                    borderRadius: 6,
                    padding: '12px 0',
                    width: 250,
                    fontSize: 16,
                    fontWeight: 500,
                    cursor: 'pointer',
                }}
                onClick={() => navigate(-1)}
            >
                Cancel
            </button>
        </div>
    );
};

export default Logout;
