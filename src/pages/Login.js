// React
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

// Redux
import { useDispatch } from 'react-redux';

// Layouts
import ButtonLayout from '../components/common/ButtonLayout';

// Images
import pageBackgroundImage from '../assets/images/forgotpassword.jpg'

// Formik
import { Formik, Form, ErrorMessage} from 'formik';

// Schema
import { loginSchema } from '../Validation/Schema';

// Layout
import { TextInput } from '../components/common/FormInput';


// Toaster
import { ToastContainer } from 'react-toastify'; 

// Actions
import { handleLogin } from '../actions/userAction';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    if(localStorage.token){
        history.push('/dashboard')
    }
    return (
        <>
            <section className="card login-form d-lg-flex justify-content-around">
                <div className="login-img">
                    <img src={pageBackgroundImage} className="card-img-top img-fluid" alt="login page background"/>
                </div>
                <ToastContainer />
                <style>
                    {
                        `
                            .Toastify__toast--warning{
                                background: rgb(255,112,150);
                                color: #FFFFFF;
                            }
                        `
                    }
                </style>
                <div className="form-area">
                    <section>
                        <h2 className="text-enter mb-4 form-lead">Login</h2>
                        <Formik
                            initialValues={{
                                userName: '',
                                password: ''
                            }}
                            validationSchema={ loginSchema }
                            onSubmit={(values, action)=>{
                                dispatch(handleLogin(values, action))
                                .then((res)=>{
                                    history.push('/dashboard')
                                })
                                .catch((err)=>{
                                    console.log(err)
                                })
                            }}
                        >
                            {({values, errors, touched, isSubmitting })=>(
                                    <Form className="">
                                        <div className="form-group">
                                            <TextInput 
                                                label="Email address"
                                                name="userName"
                                                type="text"
                                                className={`form-control ${
                                                    touched.userName && errors.userName ? "is-invalid" : ""
                                                }`}
                                                id="userName"
                                                placeholder="Enter email or userName"
                                            />
                                            <ErrorMessage
                                                component="div"
                                                name="userName"
                                                className="invalid-feedback p-0"
                                            />
                                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                        </div>
                                        <div className="form-group">
                                            <TextInput 
                                                name="password"
                                                type="password"
                                                label="Password"
                                                className={`form-control ${
                                                    touched.password && errors.password ? "is-invalid" : ""
                                                }`}
                                                id="passwords"
                                                placeholder="Password"
                                                autoComplete='on'
                                            />
                                            <ErrorMessage
                                                component="div"
                                                name="password"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                        <div className="form-group form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" htmlFor="exampleCheck1">Remember me.</label>
                                        </div>
                                        <div className="form-group">
                                            <ButtonLayout 
                                                type="submit"
                                                customclass="btn-md form-control" 
                                                disabled={isSubmitting}
                                                label={isSubmitting ? (
                                                <span>
                                                    <FontAwesomeIcon icon={ faSpinner } className={` fa-spinning mr-2 text-white display-5`}/>
                                                    Loading...
                                                </span>) : "Login"}
                                            />
                                        </div>
                                        <div className="mt-3">
                                            <span> <Link to="/forgot-password">Forgot Password</Link></span>
                                        </div>
                                        <div className="mt-3">
                                            <span>Don't have an account? <Link to="/signup">Signup</Link></span>
                                        </div>
                                    </Form>

                                )
                            }
                        </Formik>
                    </section>
                </div> 
            </section>
        </>
    )
}

export default Login;