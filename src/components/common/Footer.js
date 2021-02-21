// React
import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink as ScrollLink } from 'react-router-hash-link'

// Images
import logo2 from '../../assets/images/logo2.PNG'

const Footer = () => {
    return (
        <>
        <section id="footer">
            <div className="row footer">
                <div className="col-md-5 col-lg-5">
                    <div className="logo-brand">
                        <img src={ logo2 } alt="palmanovas logo on the footer" className="mb-3 pb-1"/>
                        <hr className="bg-white"/>
                        <h5 className="mt-lg-5 mb-5 pt-1" >Address</h5>
                        <address className="text-muted">Abuja Area 10 wusa, Nigeria</address>
                        <hr />
                        <p className="text-muted">Send us an email today: palmanovas@gmail.com</p>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3 mt-lg-0 mt-5' id="contact-us">
                    <ul className="p-0">
                        <h5 className="mt-lg-5 mb-5 pt-1" >Quick Access</h5>
                        <hr className="bg-white"/>
                        <li className="py-2"><Link to="/" className="text-muted">Home</Link></li>
                        <li className="py-2">
                            <ScrollLink 
                                to="/#how-palma-works"         
                                spy="true"
                                smooth="true"
                                duration={500} 
                                activeclass='active'
                                className="text-muted"
                                >How it works
                            </ScrollLink>
                        </li>
                        <li className="py-2">
                            <ScrollLink 
                                to="/#faq"         
                                spy="true"
                                smooth="true"
                                duration={500} 
                                activeclass='active'
                                className="text-muted"
                                >Faq
                            </ScrollLink>
                        </li>
                        <li className="py-2"><Link to="" className="text-muted">Contact us</Link></li>
                        <li className="py-2"><Link to="" className="text-muted">Register</Link></li>
                    </ul>
                </div>
                <div className="col-md-4 col-lg-4 mt-lg-0 mt-5">
                    <ul className="p-0">
                        <h5 className="mt-5 mb-5 pt-1">Contact Phone</h5>
                        <hr className="bg-white"/>
                        <li className="text-muted py-2"><span>+234 08-137-201-776</span></li>
                        <li className="text-muted py-2"><span>+234 08-137-201-776</span></li>
                    </ul>
                </div>
                <hr />
            </div>
            <div className="text-lg-center mt-3 mt-lg-2 ml-lg-4">
                <span className="text-muted">Palmanovas copyright © 2021</span> 
            </div>
        </section>

        </>
    )
}

export default Footer;