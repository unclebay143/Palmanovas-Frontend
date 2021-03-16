import React from 'react';

export const RequestSent = () => {
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
                    </p>
                </section>
            </div>
        </>
    )
}
