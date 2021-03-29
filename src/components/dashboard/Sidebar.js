// React
import React, { useEffect, useState } from 'react';

// Redux
import { useSelector } from 'react-redux';
import UserSidebar from './Layout/sidebars/UserSidebar';
import AdminSidebar from './Layout/sidebars/AdminSidebar';


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
    if(currentUserType === 'admin'){
        return <AdminSidebar />
    }else{
        // return <AdminSidebar />
        return <UserSidebar />
    }
}


export default Sidebar;