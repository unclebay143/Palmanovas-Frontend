// React
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Layouts
import Footer from '../../components/common/Footer'
import Navbar from '../../components/common/Navbar';


// Components
import LandingPage from './LandingPage';
import About from '../About';
import Login from '../Login';
import SignUp from '../SignUp';
import ForgotPassword from '../ForgotPassword';

const IndexTemplate = () => {
    return (
        <>
        <div className="main-container">
            <Navbar />
                <Switch>
                    <Route exact path="/forgot-password" component={ ForgotPassword } />
                    <Route exact path="/signup" component={ SignUp } />
                    <Route exact path="/login" component={ Login } />
                    <Route exact path="/about" component={ About } />
                    <Route exact path="/" component={ LandingPage } />
                </Switch>
            <Footer />
        </div>
        </>
    )
}

export default IndexTemplate;