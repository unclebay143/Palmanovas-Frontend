// React
import React from 'react';

// Layouts
import ButtonLayout from '../components/common/ButtonLayout';

// Images
import pageBackgroundImage from '../assets/images/reward2.jpeg'

// Images
// import pageBackgroundImage from '../assets/images/forgotpassword.jpg'

const SignUp = () => {
    return (
        <>
            <section className="card signup-form">
                <div className="signup-img">
                    <img src={pageBackgroundImage} className="card-img-top img-fluid" alt="signup page background"/>
                </div>
                <div className="form-area">
                    <section>
                        <h2 className="text-enter mb-4 form-lead">Signup</h2>
                        <form className="">
                            <div className="form-group">
                                <label htmlFor="userName">Username</label>
                                <input type="text" className="form-control" id="userName" aria-describedby="userNameHelp" placeholder="Enter Username"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Valid Email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone number</label>
                                <input type="phone" className="form-control" id="phone" aria-describedby="phoneHelp" placeholder="Enter Phone Number"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password1">Password</label>
                                <input type="password" className="form-control" id="password1" placeholder="Create Password" autoComplete="true"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password2">Confirm Password</label>
                                <input type="password" className="form-control" id="password2" placeholder="Confirm Password" autoComplete="true"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="referral">Referral <span className="text-muted">(Optional)</span></label>
                                <input type="referral" className="form-control" id="referral" aria-describedby="referralHelp" placeholder="Enter referral id or username"/>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Accept Terms and Condition.</label>
                            </div>
                            <div className="form-group">
                                <ButtonLayout customclass="btn-md form-control" label="Signup"/>
                            </div>
                        </form>
                    </section>
                </div> 
            </section>
        </>
    )
}

export default SignUp;