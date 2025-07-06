import React from 'react';
import BusinessSummary from './BusinessSummary';
import EarningsSummary from './EarningsSummary';
import BusinessServices from './BusinessServices';
import OurServices from './OurServices';
import PreviousTransactions from './PreviousTransactions';

const Dashboard = () => (
    <main className="flex-1 bg-[#F8F9FB] px-10 pt-6 pb-0">
        <h2 className="text-lg font-semibold mb-2 text-[#222]">Welcome back, Nivrutti! Let's boost your business today</h2>
        <div className="grid grid-cols-3 gap-6 mb-4">
            <BusinessSummary />
            <BusinessSummary yesterday />
            <BusinessSummary total />
        </div>
        <div className="grid grid-cols-3 gap-6 mb-8">
            <EarningsSummary today />
            <EarningsSummary yesterday />
            <EarningsSummary total />
        </div>
        <BusinessServices />
        <OurServices />
        <PreviousTransactions />
    </main>
);

export default Dashboard;
