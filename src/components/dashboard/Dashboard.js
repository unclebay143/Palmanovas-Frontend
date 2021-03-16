// React
import React from 'react';

// Router
import { Route, Switch } from 'react-router-dom';

// Layouts
import Sidebar from './Sidebar';
import { Navbar } from './Layout/Navbar';

// Components
import Index from './Index';
import UserProfile from './UserProfile';
import Referral from './referral/Referral';
import PaymentHistory from './history/PaymentHistory';
import Bonus from './bonus/Bonus';
import Upgrade from './upgrade/Upgrade';
import RequestWithdrawal from './request-payment/RequestWithdrawal';
import Resolution from './resolution/Resolution';
import HandlePaymentRequest from '../admin/HandlePaymentRequest';
import { RequestSent } from './confirmation/RequestSent';
import ManageUsers from './manage_users/ManageUsers';
import { TermsAndCondition } from './t&c/TermsAndCondition';
import UpdateProfile from '../users/UpdateProfile';
import UpdateBankDetails from '../users/UpdateBankDetails';
import UpdateCryptoWallet from '../users/UpdateCryptoWallet';

const Dashboard = () => {
    return (
        <>
            <div className="wrapper">
                <Sidebar />
                <div id="content">
                    <Navbar />
                    <div className="container m-2 m-lg-3 ">
                        <Switch>
                            <Route path="/dashboard/update_crypto" component = { UpdateCryptoWallet } />
                            <Route path="/dashboard/update_bank" component = { UpdateBankDetails } />
                            <Route path="/dashboard/update_profile" component = { UpdateProfile } />
                            <Route path="/dashboard/t&c" component = { TermsAndCondition } />
                            <Route path="/dashboard/manage_users" component = { ManageUsers } />
                            <Route path="/dashboard/request_sent" component = { RequestSent } />
                            <Route path="/dashboard/payment_request" component = { HandlePaymentRequest } />
                            <Route path="/dashboard/resolution" component = { Resolution } />
                            <Route path="/dashboard/withdraw" component = { RequestWithdrawal } />
                            <Route path="/dashboard/upgrade" component = { Upgrade } />
                            <Route path="/dashboard/profile" component = { UserProfile } />
                            <Route path="/dashboard/referrals" component = { Referral } />
                            <Route path="/dashboard/history" component = { PaymentHistory } />
                            <Route path="/dashboard/bonus" component = { Bonus } />
                            <Route path="/dashboard" component = { Index } />
                        </Switch>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Dashboard;