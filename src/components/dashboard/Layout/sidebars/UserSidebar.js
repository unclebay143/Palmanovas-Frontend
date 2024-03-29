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
    faMoneyBillWaveAlt,
} from "@fortawesome/free-solid-svg-icons";


// Layout
import { Link, NavLink } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { tryLogout } from '../../../../actions/userAction';

// import logo from '../../assets/images/logo1.png';


const UserSidebar = () => {
    const dispatch = useDispatch();
    const { isSideBarOpen } = useSelector(state => state.layout);
    // get user from redux
    const { profile } = useSelector(state => state.user);
    // destructure params from profile
    const { ROIstatus } = profile || {};
    return (
        <>
            {/* Sidebar  */}
            <nav id="sidebar" className={` ${ isSideBarOpen ? " " : "active"}`}>
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
                    <li>
                        <NavLink exact to="/dashboard/profile" activeClassName="active">
                            <FontAwesomeIcon icon={ faUserCircle } className="mr-2"/>
                            Profile
                        </NavLink>
                    </li>
                     {// hide the upgrade nav-item when the user have an active package
                        ROIstatus === "" ? (
                            <li>
                                <NavLink exact to="/dashboard/upgrade" activeClassName="active">
                                    <FontAwesomeIcon icon={ faPaperPlane } className="mr-2"/>
                                    Upgrade
                                </NavLink>
                            </li>

                        ) : ""
                    }
                    {/* general sidebar item */}
                    <li>
                        <NavLink exact to="/dashboard/my_referrals" activeClassName="active">
                            <FontAwesomeIcon icon={ faUsers } className="mr-2"/>
                            Referrals
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/dashboard/my_bonus" activeClassName="active">
                            <FontAwesomeIcon icon={ faGift } className="mr-2"/>
                            Bonus
                        </NavLink>
                    </li>
                   
                    <li>
                        <NavLink exact to="/dashboard/package_history" activeClassName="active">
                            <FontAwesomeIcon icon={ faHistory } className="mr-2"/>
                            Package History
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/dashboard/my_referrals_bonus_history" activeClassName="active">
                            <FontAwesomeIcon icon={ faHistory } className="mr-2"/>
                            Referral Bonus History
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/dashboard/my_withdrawal_history" activeClassName="active">
                            <FontAwesomeIcon icon={ faHistory } className="mr-2"/>
                            Withdrawal History
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/dashboard/my_monthly_bonus_history" activeClassName="active">
                            <FontAwesomeIcon icon={ faHistory } className="mr-2"/>
                            Monthly Bonus History
                        </NavLink>
                    </li>
                   


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


export default UserSidebar;