import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Header from '../pages/Home/Header';
import Sidebar from '../pages/Home/Sidebar';

/**
 * This component wraps all routes that require authentication and should display Header and Sidebar.
 * Place all protected routes as children of this component.
 */
const ProtectedRoute = ({ isAuthenticated }) => {
    return (
        <div className="min-h-screen bg-[#F8F9FB] flex flex-col">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-4">
                    {isAuthenticated ? <Outlet /> : <Navigate to='/' />}
                </main>
            </div>
        </div>
    );
};

export default ProtectedRoute;
