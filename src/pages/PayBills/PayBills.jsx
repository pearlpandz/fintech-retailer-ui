
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaMobile, FaPhoneAlt, FaWifi, FaSatelliteDish, // Recharge & Bills
  FaTint, FaFire, FaGasPump, FaTv, FaLightbulb, FaPlug, // Utilities Bills
  FaHome, FaBuilding, FaMoneyBillWave, FaCreditCard, FaShieldAlt // House Bills
} from 'react-icons/fa';

const rechargeAndBills = [
  { name: 'Prepaid', icon: <FaMobile className="text-blue-500" /> },
  { name: 'Postpaid', icon: <FaMobile className="text-sky-500" /> },
  { name: 'Landline', icon: <FaPhoneAlt className="text-green-500" /> },
  { name: 'Broadband', icon: <FaWifi className="text-indigo-500" /> },
];

const utilitiesBills = [
  { name: 'Water', icon: <FaTint className="text-cyan-500" /> },
  { name: 'Cylinder Gas', icon: <FaFire className="text-red-500" /> },
  { name: 'Piped Gas', icon: <FaGasPump className="text-orange-500" /> },
  { name: 'DTH', icon: <FaSatelliteDish className="text-purple-500" /> },
  { name: 'Electricity', icon: <FaLightbulb className="text-yellow-500" /> },
  { name: 'Cable TV', icon: <FaTv className="text-gray-600" /> },
];

const houseBills = [
  { name: 'Rent Payment', icon: <FaHome className="text-red-500" /> },
  { name: 'Apartment', icon: <FaBuilding className="text-teal-500" /> },
  { name: 'Loan Repayment', icon: <FaMoneyBillWave className="text-lime-500" /> },
  { name: 'Credit Card', icon: <FaCreditCard className="text-blue-700" /> },
  { name: 'Insurance Bill', icon: <FaShieldAlt className="text-pink-500" /> },
];

const BillSection = ({ title, services }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-gray-700 mb-4">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {services.map((service) => (
        <div
          key={service.name}
          className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg hover:scale-105 transition-transform"
        >
          <div className="text-4xl mb-4">{service.icon}</div>
          <p className="text-lg font-semibold text-gray-700 text-center">{service.name}</p>
        </div>
      ))}
    </div>
  </div>
);

const PayBills = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <nav className="text-sm text-gray-500">
          <Link to="/dashboard" className="hover:underline">Home</Link>
          <span className="mx-1">&gt;</span>
          <span className="text-gray-700">Pay Bills</span>
        </nav>
        <h2 className="text-3xl font-bold text-gray-800 mt-2">Pay Bills</h2>
      </div>

      <BillSection title="Recharge & Bills" services={rechargeAndBills} />
      <BillSection title="Utilities Bills" services={utilitiesBills} />
      <BillSection title="House Bills" services={houseBills} />
    </div>
  );
};

export default PayBills;
