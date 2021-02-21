// React
import React from 'react';
import { Link } from 'react-router-dom';

// Layouts
import ButtonLayout from '../components/common/ButtonLayout';

// Images
import pageBackgroundImage from '../assets/images/reward4.jpeg'

const Login = () => {
    return (
        <>
            <section className="card login-form d-lg-flex justify-content-around">
                <div className="login-img">
                    <img src={pageBackgroundImage} className="card-img-top img-fluid" alt="login page background"/>
                </div>
                <div className="form-area">
                    <section>
                        <h2 className="text-enter mb-4 form-lead">Login</h2>
                        <form className="">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email or username" aria-describedby="emailHelp" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter password" autoComplete="true"/>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Remember me.</label>
                            </div>
                            <div className="form-group">
                                <ButtonLayout customclass="btn-md form-control" label="Login"/>
                            </div>
                            <div className="mt-3">
                                <span> <Link to="/forgot-password">Forgot Password</Link></span>
                            </div>
                            <div className="mt-3">
                                <span>Don't have an account? <Link to="/signup">Signup</Link></span>
                            </div>
                        </form>
                    </section>
                </div> 
            </section>
        </>
    )
}

export default Login;