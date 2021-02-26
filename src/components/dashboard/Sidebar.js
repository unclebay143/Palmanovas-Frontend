import React from 'react';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faAlignLeft, 
    faGift, 
    faHandSparkles, 
    faHistory, 
    faHome, 
    faPaperPlane, 
    faUserCircle, 
    faUsers 
} from "@fortawesome/free-solid-svg-icons";
import Index from './Index';


const Sidebar = () => {
    return (
        <>
            <div className="wrapper">
                {/* Sidebar  */}
                <nav id="sidebar">
                    <div className="sidebar-header">
                    <h3>Palma</h3>
                    </div>
                    <ul className="list-unstyled components mt-4">
                    {/* <p>
                        <FontAwesomeIcon icon={ faHandSparkles } className="mr-2"/>
                        hi, Sam
                    </p> */}
                   
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={ faHome } className="mr-2"/>
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={ faUserCircle } className="mr-2"/>
                            Profile
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={ faHistory } className="mr-2"/>
                            History
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={ faGift } className="mr-2"/>
                            Bonus
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={ faPaperPlane } className="mr-2"/>
                            Upgrade
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={ faUsers } className="mr-2"/>
                            Referrals
                        </a>
                    </li>
                    </ul>
                    <ul className="list-unstyled CTAs">
                        <li>
                            <a 
                                href="https://bootstrapious.com/tutorial/files/sidebar.zip" 
                                className="download">Terms and Condition</a>
                        </li>
                        <li>
                            <a 
                                href="https://bootstrapious.com/p/bootstrap-sidebar" 
                                className="article">Logout</a>
                        </li>
                    </ul>
                </nav>

                {/* Navbar */}
                <div id="content">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                        <button type="button" id="sidebarCollapse" className="btn btn-info">
                            <FontAwesomeIcon icon={ faAlignLeft } className="mr-2"/>
                            {/* <span>Toggle Sidebar</span> */}
                        </button>
                        <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-align-justify" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="nav navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="m-2 m-lg-3 ">
                    <Index />
                </div>
            </div>
            </div>
        </>
    )
}


export default Sidebar;