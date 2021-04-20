// React
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { HashLink as ScrollLink } from 'react-router-hash-link';
import { tryLogout, loadUserProfile } from '../../actions/userAction';

// Images
import logo from '../../assets/images/logo11.png';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const user = useSelector(state => state.user);
    const [showDashboardText, setShowDashboardText] = useState(false)
    const { profile } = user;
    const dispatch = useDispatch();

    useEffect(() => {
        if(isLoggedIn){
            dispatch(loadUserProfile())
        }
        if(localStorage.token){
            setIsLoggedIn(true)
        }
    }, [isLoggedIn])

    return (
        <>
            <section id="top-nav">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href=".">
                        <img src={logo} width="50px" className="img-fluid rounde" style={{padding: '4px', borderRadius: '5px'}} alt="palmanovas logo on the navbar" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto mb-">
                            <li className="nav-item">
                                <NavLink exact activeClassName="active" className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/about">About us</NavLink>
                            </li>
                            <li className="nav-item">
                                <ScrollLink 
                                    to="/#contact-us"         
                                    spy="true"
                                    smooth="true"
                                    duration={500} 
                                    activeclass='active'
                                    className="nav-link"
                                    >Contact us
                                </ScrollLink>
                            </li>
                            <li className="nav-item">
                                <ScrollLink 
                                    to="/#how-palma-works"         
                                    spy="true"
                                    smooth="true"
                                    duration={500} 
                                    activeclass='active'
                                    className="nav-link"
                                    >How it works
                                </ScrollLink>
                            </li>
                            <li className="nav-item">
                                <ScrollLink 
                                    to="/#faq"         
                                    spy="true"
                                    smooth="true"
                                    duration={500} 
                                    activeclass='active'
                                    className="nav-link"
                                    >FAQ
                                </ScrollLink>
                            </li>
                        </ul>
                        <ul className="float-left navbar-nav">
                            {
                                isLoggedIn ? (
                                    <>
                                        <li className="nav-item text-capitalize nav-link" 
                                            onMouseOver={()=>setShowDashboardText(true)}
                                            onMouseOut={()=>setShowDashboardText(false)}
                                        >
                                            <NavLink to="/dashboard">
                                                <b>{ showDashboardText ? "Back to Dashboard" : `Welcome, ${profile?.userName}`}</b>
                                            </NavLink></li>
                                        <li className="nav-item">
                                            <a 
                                                className="nav-link" 
                                                href="."
                                                target="_self"
                                                onClick={()=>dispatch(tryLogout())}
                                            >Logout</a>
                                        
                                        </li>
                                    </>
                                ):(
                                    <>
                                        <li className="nav-item">
                                            <NavLink activeClassName="active" to="/login" className="nav-link">Login</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="active" to="/signup" className="nav-link">Sign Up</NavLink>
                                        </li>  
                                    </>              
                                )
                            }
                        </ul>
                    </div>
                </nav>
            </section>

        </>
    )
}


export default Navbar 