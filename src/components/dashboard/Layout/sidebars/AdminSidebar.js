// React
import React from 'react';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHistory, 
    faHome,
    faUsers,
    faBoxOpen,
    faUserCircle, 
    faCheckSquare,
    faHandsHelping,
    faCheckCircle,
    faPeopleCarry,
} from "@fortawesome/free-solid-svg-icons";


// Layout
import { Link, NavLink } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { tryLogout } from '../../../../actions/userAction';



const AdminSidebar = () => {
    const dispatch = useDispatch();
    const { isSideBarOpen } = useSelector(state => state.layout);
    return (
        <>
            {/* Sidebar  */}
            <nav id="sidebar" className={`${ isSideBarOpen ? " " : "active"}`} style={{overflowY: "scroll", height: '100vh', whiteSpace: 'nowrap'}}>
                <div className="sidebar-header">
                    <h3>Palmanovas</h3>
                {/* <img src={logo} width="50px" className="img-fluid mr-5" alt="palmanovas logo on the navbar" /> */}
                </div>
                <ul className="list-unstyled components mt-4">
                    <li>
                        <NavLink exact to="/dashboard" activeClassName="active">
                            <FontAwesomeIcon icon={ faHome } className="mr-2"/>
                            Dashboard
                        </NavLink>
                    </li>
                    <hr />
                    <li>
                        <NavLink exact to="/dashboard/profile" activeClassName="active">
                            <FontAwesomeIcon icon={ faUserCircle } className="mr-2"/>
                            Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/dashboard/view_users" activeClassName="active">
                            <FontAwesomeIcon icon={ faUsers } className="mr-2"/>
                            Registered Users
                        </NavLink>
                    </li>
                    <hr />
                    <li>
                        <NavLink exact to="/dashboard/upgrade_packages" activeClassName="active">
                            <FontAwesomeIcon icon={ faBoxOpen } className="mr-2"/>
                            Package Purchase
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/dashboard/monthly_bonus" activeClassName="active">
                            <FontAwesomeIcon icon={ faCheckCircle } className="mr-2"/>
                            Monthly Bonus
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/dashboard/payment_request" activeClassName="active">
                            <FontAwesomeIcon icon={ faCheckSquare } className="mr-2"/>
                            ROI Requests
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/dashboard/referral_bonus" activeClassName="active">
                            <FontAwesomeIcon icon={ faPeopleCarry } className="mr-2"/>
                            Referrals Bonus
                        </NavLink>
                    </li>
                    <hr/>
                    <li>
                        <NavLink exact to="/dashboard/referral_bonus_history" activeClassName="active">
                            <FontAwesomeIcon icon={ faHistory } className="mr-2"/>
                             Referral Bonus History
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/dashboard/roi_withdrawal_history" activeClassName="active">
                            <FontAwesomeIcon icon={ faHistory } className="mr-2"/>
                            Withdrawal History
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/dashboard/approved_package_history" activeClassName="active">
                            <FontAwesomeIcon icon={ faHistory } className="mr-2"/>
                             Package History
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/dashboard/monthly_bonus_history" activeClassName="active">
                            <FontAwesomeIcon icon={ faHistory } className="mr-2"/>
                             Monthly Bonus History
                        </NavLink>
                    </li>
                    <hr />
                    <li>
                        <NavLink exact to="/dashboard/resolution" activeClassName="active">
                            <FontAwesomeIcon icon={ faHandsHelping } className="mr-2"/>
                            Resolution
                        </NavLink>
                    </li>
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
                            className="article"
                            target="_self"
                            onClick={()=>dispatch(tryLogout())}>Logout</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}


export default AdminSidebar;