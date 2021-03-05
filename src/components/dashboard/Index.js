// React
import React, { useState } from 'react';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandSparkles } from "@fortawesome/free-solid-svg-icons";
import Cards from './Layout/Cards';
import { Link } from 'react-router-dom';

const Index = () => {
    const [isIROIMature, setIsIROIMature] = useState(false);
    return (
        <>
            <div className="container dashboard-Index">
                <h4 className="h5 text-custom-green">
                    <FontAwesomeIcon icon={ faHandSparkles } className="mr-2 text-custom-green"/>
                    Welcome back, <span className="">Username</span>
                <span className="float-lg-right h3 mr-3 d-block mt-3 mt-lg-0">Rank: starter</span>
                </h4>
                <section className="clearfix">
                    <div className="float-lg-left mt-4">
                        <p className="text-lg-right custom-p text-custom-green">PalmaGold - #40, 000 {isIROIMature ? '( Matured )' : ''}</p>
                        { 
                        // ternary conditional rendering basd on ROI maturity
                            isIROIMature ? (

                                <>
                                    <Link to="/dashboard/withdraw" className="btn btn-sm btn-warning text-white">Request Withdrawal</Link>
                                </>

                            ):(
                                <div className="progress" onClick={(()=>setIsIROIMature(true))}>
                                    <div 
                                        className="progress-bar progress-bar-striped bg-warning active" 
                                        role="progressbar" 
                                        aria-valuenow={15} 
                                        aria-valuemin={0} 
                                        aria-valuemax={15} 
                                        style={{ width: '15%' }}>
                                        15%
                                    </div>
                                    <div 
                                        className="progress-bar progress-bar-striped bg-danger active" 
                                        role="progressbar" 
                                        aria-valuenow={25} 
                                        aria-valuemin={0} 
                                        aria-valuemax={25} 
                                        style={{ width: '25%' }}>
                                        25%
                                    </div>
                                    <div 
                                        className="progress-bar progress-bar-striped active" 
                                        role="progressbar" 
                                        aria-valuenow={60} 
                                        aria-valuemin={0} 
                                        aria-valuemax={60} 
                                        style={{ width: '60%' }}>
                                        100%
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </section>
                <section className="section-heading mt-4">
                    <div className="clearfix">
                        {/* <h3 className="">Menu</h3>
                        <hr className="hr-line"/> */}
                    </div>
                </section>
                {/* <section className="container pl-3 pr-3 pt-3 row"> */}
                <section className="container">
                    <div className="row">
                        <Cards />
                    </div>
                </section>
               
            </div>
        </>
    )
}


export default Index;