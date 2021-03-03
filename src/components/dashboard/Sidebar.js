// React
import React from 'react';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faGift, 
    faHistory, 
    faHome, 
    faPaperPlane, 
    faUserCircle, 
    faUsers 
} from "@fortawesome/free-solid-svg-icons";

// Layout
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            {/* <div className="wrapper"> */}
                {/* Sidebar  */}
                <nav id="sidebar" className="ctive">
                    <div className="sidebar-header">
                    <h3>Palmanovas</h3>
                    </div>
                    <ul className="list-unstyled components mt-4">
                        {/* <p>
                            <FontAwesomeIcon icon={ faHandSparkles } className="mr-2"/>
                            hi, Sam
                        </p> */}
                    
                        <li>
                            <NavLink exact to="/dashboard" activeClassName="active">
                                <FontAwesomeIcon icon={ faHome } className="mr-2"/>
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/dashboard/profile" activeClassName="active">
                                <FontAwesomeIcon icon={ faUserCircle } className="mr-2"/>
                                Profile
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/dashboard/history" activeClassName="active">
                                <FontAwesomeIcon icon={ faHistory } className="mr-2"/>
                                History
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/dashboard/bonus" activeClassName="active">
                                <FontAwesomeIcon icon={ faGift } className="mr-2"/>
                                Bonus
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/dashboard/upgrade" activeClassName="active">
                                <FontAwesomeIcon icon={ faPaperPlane } className="mr-2"/>
                                Upgrade
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/dashboard/referrals" activeClassName="active">
                                <FontAwesomeIcon icon={ faUsers } className="mr-2"/>
                                Referrals
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="list-unstyled CTAs">
                        <li>
                            <a 
                                href="#" 
                                className="download">Terms and Condition</a>
                        </li>
                        <li>
                            <a 
                                href="#" 
                                className="article">Logout</a>
                        </li>
                    </ul>
                </nav>

               
        </>
    )
}


export default Sidebar;