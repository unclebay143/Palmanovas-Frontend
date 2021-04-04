import React from 'react';
import { Link, useHistory } from 'react-router-dom';

export const RequestSent = () => {
    const history = useHistory();
    const { location } = history;
    // redirect the user to the dashboard if trying to access from another component
    if(!location.state)history.push('/dashboard')
    return (
        <>
            <div className="request-confirmed">
                <section className="section-heading mt-5">
                    <div className="clearfix">
                        <h3>Request Sent</h3>
                        <hr className="hr-line"/>
                    </div>
                </section>
                <section>
                    <p className="alert alert-success text-dark">
                        Your payment request has been sent succesfully and will be processed in the next 24 hours.
                        <Link to="/dashboard" className="btn btn-sm btn-success mx-0 mx-lg-2 my-2 my-lg-0">Back to dashboard</Link>
                    </p>
                </section>
            </div>
        </>
    )
}
