// React
import React from 'react';

// Array of menus
import MenuItem from '../appDb';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
// import { 
//     faUsers 
// } from "@fortawesome/free-solid-svg-icons";

const Cards = (props) => {
    console.log(MenuItem)
    return (
        <>
                
            {
                MenuItem && (
                    MenuItem.map((item)=>{
                        return(
                            <div className="col-md-3 col-lg-3 col-6 p-1 mb-3">
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