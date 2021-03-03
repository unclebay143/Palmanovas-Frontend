// React
import React from 'react';

// Array of menus
import MenuItem from '../Menu';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

                        <div 
                            className="col-md-4 col-lg-3 col-sm-4 col-12 card p-2 mb-3 dashboard-menu" 
                            // style={{width: '1rem'}}
                            style={{marginRight: '85px'}}
                        >
                            <div className="card-body text-center">
                                <h6 className="card-subtitle mb-2 text-muted">
                                    <FontAwesomeIcon icon={ item.icon } className="mr-2 font-icon"/>
                                </h6>
                                <h5 className="card-title">{item.title}</h5>
                            </div>
                        </div>
                    )
                })
            )
        }
        </>
    )
}

export default Cards;