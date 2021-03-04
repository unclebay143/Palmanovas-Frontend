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

const Dashboard = () => {
    return (
        <>
            <div className="wrapper">
                <Sidebar />
                <div id="content">
                    <Navbar />
                    <div className="container m-2 m-lg-3 ">
                        <Switch>
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