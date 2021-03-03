// React
import React, { useState } from 'react';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandSparkles } from "@fortawesome/free-solid-svg-icons";
import Cards from './Layout/Cards';

const Index = () => {
    const [isIROIMature, setIsIROIMature] = useState(false);
    return (
        <>
            <div className="dashboard-Index">
                <h4 className="h5">
                    <FontAwesomeIcon icon={ faHandSparkles } className="mr-2 text-custo-blue"/>
                    Welcome back, <span className="">Username</span>
                <span className="float-lg-right h3 mr-3 d-block mt-3 mt-lg-0">Rank: starter</span>
                </h4>
                <section className="container-lg-lg clearfix">
                    <div className="float-lg-left mt-4">
                        <p className="text-lg-right custom-p">PalmaGold - #40, 000 {isIROIMature ? '( Matured )' : ''}</p>
                        { 
                        // ternary conditional rendering basd on ROI maturity
                            isIROIMature ? (

                                <div>
                                    <button className="btn btn-sm btn-danger">Request Withdrawal</button>
                                </div>

                            ):(
                                <div className="progress" onClick={(()=>setIsIROIMature(true))}>
                                    <div 
                                        className="progress-bar progress-bar-striped active" 
                                        role="progressbar" 
                                        aria-valuenow={100} 
                                        aria-valuemin={0} 
                                        aria-valuemax={100} 
                                        style={{ width: '100%' }}>
                                        100%
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </section>
                <section className="section-heading mt-4">
                    <di className="clearfix">
                        {/* <h3 className="">Menu</h3> */}
                        {/* <hr className="hr-line"/> */}
                    </di>
                </section>
                <section className="pl-3 pr-3 pt-3 row">
                    
                    <Cards />
                </section>
            </div>
        </>
    )
}


export default Index;