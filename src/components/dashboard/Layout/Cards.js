// React
import React from 'react';

// Array of menus
import MenuItem, { adminMenuItem } from '../appDb';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SkeletonLoader from '../../../util/SkeletonLoader';
// import { 
//     faUsers 
// } from "@fortawesome/free-solid-svg-icons";

const Cards = (props) => {
    const dispatch = useDispatch();
    const { profile} = useSelector(state => state.user);
    const { roleID } = profile || {};
    // render the card menu based on user role
    const menuItemHolder = profile && roleID === 1  ? MenuItem : adminMenuItem;

    // display loader while detecting user role
    if(!profile){
        return <SkeletonLoader />
    }
    return (
        <>
            {
                menuItemHolder && (
                    menuItemHolder.map((item)=>{
                        return(
                            <div 
                                className="col-md-3 col-lg-3 col-6 p-1 mb-3" 
                                key={item.id} 
                                // if there is an handleClick props let the dispatch reflect
                                onClick={()=>item.handleClick && dispatch(item.handleClick)} 
                            >
                                <Link to={item.url}>
                                    <div className="card dashboard-menu">
                                        <div className="card-body text-center">
                                            <h6 className="card-subtitle mb-2 text-muted">
                                                <FontAwesomeIcon icon={ item.icon } className="mr-2 font-icon"/>
                                            </h6>
                                            <h5 className="card-title">{item.title}</h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                )
            }
        </>
    )
}

export default Cards;