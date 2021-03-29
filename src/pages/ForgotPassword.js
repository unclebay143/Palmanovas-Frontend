// React
import React from 'react';

// Layouts
import ButtonLayout from '../components/common/ButtonLayout';

// Images
import pageBackgroundImage from '../assets/images/forgotpassword.jpg'

const ForgotPassword = () => {
    return (
        <>
            <section className="card ForgotPassword-form">
                <div className="ForgotPassword-img">
                    <img src={pageBackgroundImage} className="card-img-top img-fluid" alt="ForgotPassword page background"/>
                </div>
                <div className="form-area">
                    <section>
                        <h2 className="text-enter mb-4 form-lead">Forgot Password</h2>
                        <form className="">
                            
                            <div className="form-group">
                                <label htmlFor="email">Registered Email address or Phone</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email Address or Phone Number"/>
                            </div>
                            <div className="form-group">
                                <ButtonLayout type="button" customclass="btn-md form-control" label="Send"/>
                            </div>
                        </form>
                    </section>
                </div> 
                {/* <div className="form-area">
                    <section>
                        <h2 className="text-enter mb-4 form-lead">Reset Link Sent!!!</h2>
                        <p>A reset link has been sent to your registered email</p>
                    </section>
                </div>  */}
            </section>
        </>
    )
}

export default ForgotPassword;