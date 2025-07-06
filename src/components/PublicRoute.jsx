import { Outlet } from 'react-router-dom';
import LoginBg from '/images/login-bg.png'

const PublicRoute = () => {
    return (
        <div className="flex items-center justify-center bg-gray-50">
            <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-full" style={{ minHeight: '100vh' }}>
                {/* Left Side - Illustration */}
                <div className="hidden md:flex items-center justify-center bg-gradient-to-b from-indigo-400 to-purple-400 w-full md:w-1/2 p-8">
                    <img src={LoginBg} alt="Utility Bill Payments" className="h-auto object-contain rounded-3xl shadow-lg bg-white p-6" />
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default PublicRoute;
