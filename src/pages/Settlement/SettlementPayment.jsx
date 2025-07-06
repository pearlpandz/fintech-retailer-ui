import { useLocation } from "react-router-dom";
import { TABS } from "./constant";
import { useState } from "react";
import SettlementTabs from "./SettlementTabs";
import SettlementForm from "./SettlementForm";
import RegisterBankForm from "./RegisterBankForm";
import DeleteBankForm from "./DeleteBankForm";
import UpgradeLimitForm from "./UpgradeLimitForm";
import KycStatus from "./KycStatus";

export default function SettlementPayment() {
    const location = useLocation();
    const getTab = TABS.find(ele => location.pathname.includes(ele.path));
    const [selectedTab, setSelectedTab] = useState(getTab?.label)

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-8">
            <div className="bg-white w-full">
                <div className="p-8">
                    <SettlementTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                    {selectedTab === "REGISTER BANK" && <RegisterBankForm />}
                    {selectedTab === "SETTLEMENT" && <SettlementForm />}
                    {selectedTab === "DELETE BANK" && <DeleteBankForm />}
                    {selectedTab === "UPGRADE LIMIT" && <UpgradeLimitForm />}
                    {selectedTab === "KYC STATUS" && <KycStatus />}
                </div>
            </div>
        </div>
    );
}
