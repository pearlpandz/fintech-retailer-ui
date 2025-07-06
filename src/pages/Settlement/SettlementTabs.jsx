import React from 'react'
import { TABS } from './constant';

function SettlementTabs(params) {
    const { selectedTab, setSelectedTab } = params;


    return (
        <div className="flex space-x-4 mb-4">
            {TABS.map((tab) => (
                <div className="flex items-center cursor-pointer" key={tab.label} onClick={() => setSelectedTab(tab.label)}>
                    <span
                        className={`w-4 h-4 rounded-full border-2 border-purple-600 mr-2 flex-shrink-0 ${tab.label === selectedTab ? "bg-purple-600" : ""
                            }`}
                    ></span>
                    <span className="text-xs font-medium">{tab.label}</span>
                </div>
            ))}
        </div>
    )
}

export default SettlementTabs