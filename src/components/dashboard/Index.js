// React
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandSparkles } from "@fortawesome/free-solid-svg-icons";

// Layout
import Cards from './Layout/Cards';

// Skeleton Loader
import Skeleton from 'react-loading-skeleton';


const Index = () => {
    const [isIROIMature, setIsIROIMature] = useState(true);
    const isPaymentApproved = false;
    const hasInvestment = false;
    // Get user profile from the user state
    const { profile } = useSelector(state => state.user);
    const { userName } = profile || {};
    // const userName =''
    // const purchasedDate = "Mar 7 2021";
    // const matureDate = "Mar 10 2021";
    // // const formatedMatureDate = new Date(matureDate).getTime()
    // const formatPurchasedDate = new Date(purchasedDate).getTime();
    // const rem = formatedMatureDate - formatPurchasedDate
    // const remainingDaysToMature = Math.floor(rem / (1000 * 3600 * 24))  

    return (
        <>
            <div className="container dashboard-Index"> 
                <h5 className="text-custom-green" style={{lineHeight: '2'}}>
                    <FontAwesomeIcon icon={ faHandSparkles } className="mr-2 text-custom-green"/>
                    Welcome back, {userName && userName ? <span className="p-0"> { userName } </span> : <Skeleton color="#EEE" highlightColor="#CCC" count={1} width={100} /> }
                    <span className="float-lg-right h3 mr-3 d-block mt-3 mt-lg-0">Rank: starter</span>
                </h5>
                {/* {formatedMatureDate === formatPurchasedDate ? "matured" : ("growing till "+ remainingDaysToMature)} */}
                {
                    hasInvestment && 
                        <section className="clearfix">
                            <div className={` ${ isPaymentApproved ? "" : "float-lg-left"} mt-4`}>
                                <p className="text-lg-right custom-p text-custom-green">
                                    PalmaGold - #40, 000 
                                    {
                                        isIROIMature ? (<span className=""> ( Matured )</span>) : ''
                                    }
                                </p>
                                {
                                    isPaymentApproved ?
                                    (
                                        
                                        <>
                                            <p to="/dashboard/withdraw" className="alert alert-success">Payment Approved</p>
                                        </>
                                    )
                                    
                                : 
                                    (
                                        
                                        <>

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
                                                            style={{ width: '25%' }}>
                                                            25%
                                                        </div>
                                                        <div 
                                                            className="progress-bar progress-bar-striped bg-danger active" 
                                                            role="progressbar" 
                                                            aria-valuenow={25} 
                                                            aria-valuemin={0} 
                                                            aria-valuemax={25} 
                                                            style={{ width: '25%' }}>
                                                            50%
                                                        </div>
                                                        <div 
                                                            className="progress-bar progress-bar-striped active" 
                                                            role="progressbar" 
                                                            aria-valuenow={60} 
                                                            aria-valuemin={0} 
                                                            aria-valuemax={60} 
                                                            style={{ width: '50%' }}>
                                                            100%
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </>

                                    )
                                }
                            </div>
                        </section>
                }
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