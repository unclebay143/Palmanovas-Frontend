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
    faShoppingCart,
    faMoneyBillWave
} from "@fortawesome/free-solid-svg-icons";


// Layout
import { Link, NavLink } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { tryLogout } from '../../../../actions/userAction';

// import logo from '../../assets/images/logo1.png';


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
                    <hr />
                    <li>
                        <NavLink exact to="/dashboard/upgrade_packages" activeClassName="active">
                            <FontAwesomeIcon icon={ faPaperPlane } className="mr-2"/>
                            Package Confirmation
                        </NavLink>
                    </li>

                    <li>
                        <NavLink exact to="/dashboard/payment_request" activeClassName="active">
                            <FontAwesomeIcon icon={ faShoppingCart } className="mr-2"/>
                            ROI Confirmation
                        </NavLink>
                    </li>

                    <hr/>
                    <li>
                        <NavLink exact to="/dashboard/roi_withdrawal_history" activeClassName="active">
                            <FontAwesomeIcon icon={ faMoneyBillWave } className="mr-2"/>
                            Withdrawal History
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/dashboard/approved_package_history" activeClassName="active">
                            <FontAwesomeIcon icon={ faHistory } className="mr-2"/>
                             Package History
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