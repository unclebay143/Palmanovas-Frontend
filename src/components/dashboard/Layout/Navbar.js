import React from 'react';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faAlignLeft, 
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux';
import { TOGGLE_SIDEBAR } from '../../../actions/types';

import { toggleSidebar } from '../../../actions/layoutAction';

export const Navbar = () => {
    const dispatch = useDispatch()
    return (
        <>
            <nav className="dashboard-navbar navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                        <button 
                            type="button" 
                            id="sidebarCollapse" 
                            className="btn" 
                            onClick={(()=>dispatch(toggleSidebar()))}>
                            <FontAwesomeIcon icon={ faAlignLeft } className="mr-2"/>
                            {/* <span>Toggle Sidebar</span> */}
                        </button>
                        <button 
                            className="btn btn-dark d-inline-block d-lg-none ml-auto" 
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarSupportedContent" 
                            aria-controls="navbarSupportedContent" 
                            aria-expanded="true" 
                            aria-label="Toggle navigation">
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
        </>
    )
}