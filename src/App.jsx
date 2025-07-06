import { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/auth.context';
import { WebsocketProvider } from './utils/WebsocketProvider';
import Home from './pages/Home/Home';
import MobileRecharge from './pages/PayBills/MobileRecharge';
import BillPayment from './pages/PayBills/BillPayment';
import Login from './pages/Authentication/Login';
import Register from './pages/Authentication/Register';
import OtpVerification from './pages/Authentication/OtpVerification';
import PanVerification from './pages/Authentication/PanVerification';
import EndVerification from './pages/Authentication/EndVerification';
import TalkalWalletLoad from './pages/TalkalWallet/TalkalWalletLoad';
import TatkalSuccess from './pages/TalkalWallet/TatkalSuccess';
import SettlementPayment from './pages/settlement/SettlementPayment';
import AccountInfo from './pages/Authentication/AccountInfo';
import Logout from './pages/Authentication/Logout';
import ProtectedRoute from './components/ProtectRoute';
import RetailerBankList from './pages/AgentSelfBank/RetailerBankList';
import RetailerAddBank from './pages/AgentSelfBank/AddBank';
import WalletTransferHistory from './pages/WalletToWallet/WalletTransferHistory';
import NewWalletTransfer from './pages/WalletToWallet/NewWalletTransfer';
import FindRecipient from './pages/WalletToWallet/FindRecipient';
import BalanceRequestHistory from './pages/BalanceRequest/BalanceRequestHistory';
import NewBalanceRequest from './pages/BalanceRequest/NewBalanceRequest';
import LedgerReports from './pages/AgentReports/LedgerReports';
import BillPaymentReports from './pages/AgentReports/BillPaymentReports';
import CashoutReports from './pages/AgentReports/CashoutReports';
import MoneyTransferHold from './pages/AgentReports/MoneyTransferHold';
import MoneyTransferReports from './pages/AgentReports/MoneyTransferReports';
import PaymentGatewayReports from './pages/AgentReports/PaymentGatewayReports';
import TopupReports from './pages/AgentReports/TopupReports';
import OutstandingReports from './pages/AgentReports/OutstandingReports';
import ResetPin from './pages/Authentication/ResetPin';
import SetPin from './pages/Authentication/SetPin';
import PayBills from './pages/paybills/PayBills';
import ChangePassword from './pages/Authentication/ChangePassword';
import ForgetPassword from './pages/Authentication/ForgetPassword';
import PublicRoute from './components/PublicRoute';

import './App.css';
import ComplaintList from './pages/Authentication/ComplaintList';
import NewComplaint from './pages/Authentication/NewComplaint';

function App() {
  // Apply authentication logic
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  const login = (data) => {
    setAuthenticated(true)
    setUserDetails(data)
  }

  const logout = () => {
    setAuthenticated(false)
    setUserDetails(null)
  }

  return (
    <WebsocketProvider>
      <AuthContext.Provider value={{ isAuthenticated, userDetails, login, logout }}>
          <Routes>
            {/* Public routes with sidebar banner */}
            <Route element={<PublicRoute />}>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/otp-verification" element={<OtpVerification />} />
              <Route path="/pan-verification" element={<PanVerification />} />
              <Route path="/end-verification" element={<EndVerification />} />
              <Route path="/forgot-password" element={<ForgetPassword />} />
            </Route>

            {/* Protected routes with header/sidebar */}
            <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
              <Route path="/dashboard" element={<Home />} />
              <Route path="/mobile-recharge" element={<MobileRecharge />} />
              <Route path="/bill-payment" element={<BillPayment />} />
              <Route path="/pay-bills" element={<PayBills />} />
              <Route path="/talkal-wallet-load" element={<TalkalWalletLoad />} />
              <Route path="/tatkal-success" element={<TatkalSuccess />} />
              <Route path="/settlement" element={<SettlementPayment />} />
              <Route path="/account" element={<AccountInfo />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/retailer-bank">
                <Route index element={<Navigate to={'/retailer-bank/list'} />} />
                <Route path="list" element={<RetailerBankList />} />
                <Route path="add" element={<RetailerAddBank />} />
                <Route path="edit/:id" element={<RetailerBankList />} />
              </Route>
              <Route path="/wallet-transfer">
                <Route index element={<Navigate to={'/wallet-transfer/history'} />} />
                <Route path="history" element={<WalletTransferHistory />} />
                <Route path="find-recipient" element={<FindRecipient />} />
                <Route path="new" element={<NewWalletTransfer />} />
              </Route>
              <Route path="/balance-request">
                <Route index element={<Navigate to={'/balance-request/history'} />} />
                <Route path="history" element={<BalanceRequestHistory />} />
                <Route path="new" element={<NewBalanceRequest />} />
              </Route>
              <Route path="/agent-reports">
                <Route path="ledger" element={<LedgerReports />} />
                <Route path="cashout" element={<CashoutReports />} />
                <Route path="money-transfer" element={<MoneyTransferReports />} />
                <Route path="money-hold" element={<MoneyTransferHold />} />
                <Route path="bill-payment" element={<BillPaymentReports />} />
                <Route path="payment-gateway" element={<PaymentGatewayReports />} />
                <Route path="outstanding" element={<OutstandingReports />} />
                <Route path="topup" element={<TopupReports />} />
              </Route>
              <Route path='/settings'>
                <Route path="set-tpin" element={<SetPin />} />
                <Route path="reset-tpin" element={<ResetPin />} />
                <Route path="change-password" element={<ChangePassword />} />
                <Route path="complaints">
                  <Route index element={<Navigate to={'/settings/complaints/list'} />} />
                  <Route path="list" element={<ComplaintList />} />
                  <Route path="new" element={<NewComplaint />} />
                </Route>

              </Route>
          </Route>
        </Routes>
      </AuthContext.Provider>
    </WebsocketProvider>
  );
}

export default App;
