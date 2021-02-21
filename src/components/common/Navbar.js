// React
import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink as ScrollLink } from 'react-router-hash-link';

// Images
import logo from '../../assets/images/logo.png';

const Navbar = () => {
    return (
        <>
            <section id="top-nav">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href=".">
                        <img src={logo} width="50px" className="img-fluid" alt="palmanovas logo on the navbar" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About us</Link>
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
                        <ul className="float-md-right navbar-nav">
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/signup" className="nav-link">Sign Up</Link>
                            </li>                
                        </ul>
                    </div>
                </nav>
            </section>

        </>
    )
}


export default Navbar 