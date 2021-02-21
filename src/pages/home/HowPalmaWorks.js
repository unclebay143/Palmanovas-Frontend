// React
import React from 'react';


// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faArrowCircleUp, faPiggyBank } from "@fortawesome/free-solid-svg-icons";


const HowPalmaWorks = () => {
    return (
        <>
            <section id="how-palma-works" className="mt-lg-5 pt-lg-5" style={{height: '90vh'}}>
                <h2 className="text-center mb-5 pb-5 section-lead">How Palmanovas Works</h2>
                <div className="card text-center">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4 col-lg-4 p-5">
                                <FontAwesomeIcon icon={faPlusCircle} className="fa-3x mb-3 text-custom-green"/>
                                <h4>Open an account</h4>
                                <p>Create a free account within minutes to set your investment.</p>
                            </div>
                            <div className="col-md-4 col-lg-4 p-5">
                                <FontAwesomeIcon icon={faArrowCircleUp} className="fa-3x mb-3 text-custom-green"/>
                                <h4>Subscribe to an investment</h4>
                                <p>Pick from our available packages and subscribe to the investment, your money is always working harder for you.</p>
                            </div>
                            <div className="col-md-4 col-lg-4 p-5">
                                <FontAwesomeIcon icon={faPiggyBank} className="fa-3x mb-3 text-custom-green"/>
                                <h4>Watch your investment grow</h4>
                                <p>Users can safely either withdraw part or all of their ROI or invest into your same or another package.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}


export default HowPalmaWorks;