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
    faUsers,
    faHandsHelping,
    faUsersCog,
    faShoppingCart
} from "@fortawesome/free-solid-svg-icons";

// Dummy data
import { user } from '../dashboard/appDb';

// Layout
import { Link, NavLink } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';

// import logo from '../../assets/images/logo1.png';


const Sidebar = () => {
    const { isSideBarOpen } = useSelector(state => state.layout)
    const isAdmin = user.isAdmin;
    return (
        <>
            {/* Sidebar  */}
            <nav id="sidebar" className={` ${ isSideBarOpen ? " " : "active"}`}>
                <div className="sidebar-header">
                <h3>Palmanovas</h3>
                {/* <img src={logo} width="50px" className="img-fluid mr-5" alt="palmanovas logo on the navbar" /> */}
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
                    {
                        !isAdmin &&(
                            <>
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
                            </>
                        )
                    }
                    <li>
                        <NavLink exact to="/dashboard/referrals" activeClassName="active">
                            <FontAwesomeIcon icon={ faUsers } className="mr-2"/>
                            Referrals
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/dashboard/resolution" activeClassName="active">
                            <FontAwesomeIcon icon={ faHandsHelping } className="mr-2"/>
                            Resolution
                        </NavLink>
                    </li>
                    {
                        isAdmin && (
                            <>
                                <li>
                                    <NavLink exact to="/dashboard/manage_users" activeClassName="active">
                                        <FontAwesomeIcon icon={ faUsersCog } className="mr-2"/>
                                        Manage Users
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/dashboard/payment_request" activeClassName="active">
                                        <FontAwesomeIcon icon={ faShoppingCart } className="mr-2"/>
                                        Payment Requests
                                    </NavLink>
                                </li>
                            </>
                        )
                    }
                </ul>
                <ul className="list-unstyled CTAs">
                    <li>
                        <Link 
                            to="/dashboard/t&c" 
                            className="download">Terms and Condition
                        </Link>
                    </li>
                    <li>
                        <a 
                            href="." 
                            className="article">Logout</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}


export default Sidebar;