// React
import React, { useEffect, useState } from 'react';

// Redux
import { useSelector } from 'react-redux';
import UserSidebar from './Layout/sidebars/UserSidebar';
import AdminSidebar from './Layout/sidebars/AdminSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    const { profile } = useSelector(state => state.user);
    const { roleID } = profile || {};
    const [ currentUserType, setCurrentUserType ] = useState(null);
    useEffect(() => {
        switch (roleID) {
            case 1:
                return setCurrentUserType('normal')
            case 2:
                return setCurrentUserType('admin')
            case 3:
                return setCurrentUserType('superAdmin')
            default:
                break;
        }
    }, [roleID])
    if(!roleID){
        return (
            <>
                <nav id="sidebar" className="" style={{overflowY: "scroll", height: '100vh', whiteSpace: 'nowrap'}}>
                    <div className="sidebar-header">
                    <h3>Palmanovas</h3>
                    {/* <img src={logo} width="50px" className="img-fluid mr-5" alt="palmanovas logo on the navbar" /> */}
                    </div>
                    <ul className="list-unstyled components mt-4">
                        <li>
                            <span class=" ml-2 active">
                                <FontAwesomeIcon icon={ faSpinner } className=" fa-spinning mr-2 text-white display-5"/>
                                Loading
                            </span>
                        </li>
                        {/* <hr /> */}
                    </ul>
                </nav>
            </>
        )
    }
    if(currentUserType === 'admin'){
        return <AdminSidebar />
    }else{
        // return <AdminSidebar />
        return <UserSidebar />
    }
}


export default Sidebar;