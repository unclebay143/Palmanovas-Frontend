import React from 'react';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faAlignLeft, 
} from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
    return (
        <>
            <nav className="dashboard-navbar navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                        <button type="button" id="sidebarCollapse" className="btn">
                            <FontAwesomeIcon icon={ faAlignLeft } className="mr-2"/>
                            {/* <span>Toggle Sidebar</span> */}
                        </button>
                        <button 
                            className="btn btn-dark d-inline-block d-lg-none ml-auto" 
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarSupportedContent" 
                            aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
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
