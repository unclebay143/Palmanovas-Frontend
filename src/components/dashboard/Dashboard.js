// React
import React, { useEffect } from 'react';

// Router
import { Route, Switch, useHistory } from 'react-router-dom';

// Layouts
import Sidebar from './Sidebar';
import { Navbar } from './Layout/Navbar';

// Components
import Index from './Index';
import UserProfile from './UserProfile';
import Referral from './referral/Referral';
import Bonus from './bonus/Bonus';
import Upgrade from './upgrade/Upgrade';
import RequestWithdrawal from './request-payment/RequestWithdrawal';
import Resolution from './resolution/Resolution';
import HandlePaymentRequest from '../admin/HandlePaymentRequest';
import ManageUsers from './manage_users/ManageUsers';
import UpdateProfile from '../users/UpdateProfile';
import UpdateBankDetails from '../users/UpdateBankDetails';
import UpdateCryptoWallet from '../users/UpdateCryptoWallet';
import { RequestSent } from './confirmation/RequestSent';
import { TermsAndCondition } from './t&c/TermsAndCondition';
import { ToastContainer } from 'react-toastify'; 
import { useDispatch } from 'react-redux';
import { loadUserProfile } from '../../actions/userAction';
import UpgradeUserPackage from './manage_users/UpgradeUserPackage';
import ApprovedPackageHistory from './history/admin/ApprovedPackageHistory';
import UserPackageHistory from './history/users/UserPackageHistory';
import UsersWithdrawalHistory from './history/admin/UsersWithdrawalHistory';
import UserWithdrawalHistory from './history/users/UserWithdrawalHistory';
import ReferralList from '../admin/ReferralList';
import MonthlyBonusHistory from './history/admin/MonthlyBonusHistory';
import MyMonthlyBonusHistory from './history/users/MyMonthlyBonusHistory';
import { Wallets } from '../users/Wallets';
import MonthlyBonusReferralList from '../admin/MonthlyBonusReferralList';
import MyReferralBonusHistory from './history/users/MyReferralBonusHistory';
import UsersReferralBonusHistory from './history/admin/UsersReferralBonusHistory';



const Dashboard = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    
    useEffect(() => {
        if(localStorage.token){
            dispatch(loadUserProfile())
        }
    }, [dispatch])

    if(!localStorage.token){ // Protect dashboard when there is no token in the localStorage
        history.push('/login')
    }
    
    return (
        <>
            <div className="wrapper">
                <Sidebar />
                <div id="content">
                    <Navbar />
                    <ToastContainer />
                    <style>
                        {
                            `
                                .Toastify__toast--warning{
                                    background: rgb(255,112,150);
                                    color: #FFFFFF;
                                }
                            `
                        }
                    </style>
                    <div className="container m-lg-3 ">
                        <Switch>
                            {/*  Admin */}
                            <Route path="/dashboard/manage_users" component = { ManageUsers } />
                            <Route path="/dashboard/payment_request" component = { HandlePaymentRequest } />
                            <Route path="/dashboard/upgrade_Packages" component = { UpgradeUserPackage } />
                            <Route path="/dashboard/approved_package_history" component = { ApprovedPackageHistory } />
                            <Route path="/dashboard/referral_bonus" component = { ReferralList } />
                            <Route path="/dashboard/referral_bonus_history" component = { UsersReferralBonusHistory } />
                            <Route path="/dashboard/roi_withdrawal_history" component = { UsersWithdrawalHistory } />
                            <Route path="/dashboard/monthly_bonus" component = { MonthlyBonusReferralList } />
                            <Route path="/dashboard/monthly_bonus_history" component = { MonthlyBonusHistory } />



                            {/* users */}
                            <Route path="/dashboard/request_sent" component = { RequestSent } />
                            <Route path="/dashboard/upgrade" component = { Upgrade } />
                            <Route path="/dashboard/resolution" component = { Resolution } />
                            <Route path="/dashboard/withdraw" component = { RequestWithdrawal } />
                            <Route path="/dashboard/update_crypto" component = { UpdateCryptoWallet } />
                            <Route path="/dashboard/update_bank" component = { UpdateBankDetails } />
                            <Route path="/dashboard/update_profile" component = { UpdateProfile } />
                            <Route path="/dashboard/profile" component = { UserProfile } />
                            <Route path="/dashboard/my_referrals" component = { Referral } />
                            <Route path="/dashboard/my_referrals_bonus_history" component = { MyReferralBonusHistory } />
                            <Route path="/dashboard/t&c" component = { TermsAndCondition } />
                            <Route path="/dashboard/package_history" component = { UserPackageHistory } />
                            <Route path="/dashboard/my_monthly_bonus_history" component = {MyMonthlyBonusHistory} />
                            <Route path="/dashboard/my_withdrawal_history" component = {UserWithdrawalHistory} />
                            <Route path="/dashboard/my_bonus" component = { Bonus } />
                            <Route path="/dashboard/my_wallet" component = { Wallets } />
                            <Route path="/dashboard" component = { Index } />
                        </Switch>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Dashboard;