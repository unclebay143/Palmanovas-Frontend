// React
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// Layouts
import ButtonLayout from '../components/common/ButtonLayout';

// Images
import pageBackgroundImage from '../assets/images/reward2.jpeg'

// Layout
import { TextInput } from '../components/common/FormInput';

// Formik
import { ErrorMessage, Form, Formik } from 'formik';

// Schema
import { signUpSchema } from '../Validation/Schema';
import { handleRegistration } from '../actions/userAction';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const SignUp = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        Swal.fire({
            title:"Attention!!!", 
            text: "Multiple account is prohibited, or you risk your account to suspension",
            icon:"warning",
            customClass: {
                confirmButton: 'btn btn-lg btn-custom-green',
            },
            buttonsStyling: false
        })
    }, [])
    return (
        <>
            <section className="card signup-form">
                <ToastContainer />
                <style>
                    {
                        `
                            .Toastify__toast--warning{
                                background: rgb(255,112,150);
                                color: #FFFFFF;
                            }


                            footer{
                                display: none;
                            }
                        `
                    }
                </style>
                <div className="signup-img">
                    <img src={ pageBackgroundImage } className="card-img-top img-fluid" alt="signup page background"/>
                </div>
                <div className="form-area">
                    <section className="">
                        <h2 className="text-enter mb-4 form-lead">Sign Up</h2>
                        {/* <section className=""> */}
                        <Formik
                            initialValues={{
                                email: '',
                                password: '',
                                confirmPassword: '',
                                userName: '',
                                referral: '',
                                phoneNumber: ''
                            }}
                            validationSchema={ signUpSchema }
                            onSubmit={(values, action)=>{
                                dispatch(handleRegistration(values, action))
                                .then((res)=>history.push('/login'))
                            }}
                        >
                            {({values, errors, touched, isSubmitting })=>(
                                    <Form className="">
                                        <div className="form-group">
                                            <TextInput 
                                                label="Username"
                                                name="userName"
                                                type="text"
                                                className={`form-control ${
                                                    touched.userName && errors.userName ? "is-invalid" : ""
                                                }`}
                                                id="userName"
                                                placeholder="Enter Username"
                                            />
                                            <ErrorMessage
                                                component="div"
                                                name="userName"
                                                className="invalid-feedback p-0"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <TextInput 
                                                label="Email address"
                                                name="email"
                                                type="email"
                                                className={`form-control ${
                                                    touched.email && errors.email ? "is-invalid" : ""
                                                }`}
                                                id="email"
                                                placeholder="Enter Valid Email"
                                            />
                                            <ErrorMessage
                                                component="div"
                                                name="email"
                                                className="invalid-feedback p-0"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <TextInput 
                                                label="Phone number"
                                                name="phoneNumber"
                                                type="tel"
                                                className={`form-control ${
                                                    touched.phoneNumber && errors.phoneNumber ? "is-invalid" : ""
                                                }`}
                                                id="phoneNumber"
                                                placeholder="Enter Phone Number"
                                            />
                                            <ErrorMessage
                                                component="div"
                                                name="phoneNumber"
                                                className="invalid-feedback p-0"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <TextInput 
                                                name="password"
                                                type="password"
                                                label="Password"
                                                className={`form-control ${
                                                    touched.password && errors.password ? "is-invalid" : ""
                                                }`}
                                                id="password"
                                                placeholder="Create Password"
                                                autoComplete='on'
                                            />
                                            <ErrorMessage
                                                component="div"
                                                name="password"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <TextInput 
                                                name="confirmPassword"
                                                type="password"
                                                label="Confirm Password"
                                                className={`form-control ${
                                                    touched.confirmPassword && errors.confirmPassword ? "is-invalid" : ""
                                                }`}
                                                id="confirmPassword"
                                                placeholder="Repeat Password"
                                                autoComplete='on'
                                            />
                                            <ErrorMessage
                                                component="div"
                                                name="confirmPassword"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="referral">Referral <span className="text-muted">(Optional)</span></label>
                                            <TextInput 
                                                name="referral"
                                                type="text"
                                                // label="Referral"
                                                className={`form-control ${
                                                    touched.referral && errors.referral ? "is-invalid" : ""
                                                }`}
                                                id="referral"
                                                placeholder="Enter referral id or username"
                                                autoComplete='on'
                                            />
                                            <ErrorMessage
                                                component="div"
                                                name="confirmPassword"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                        {/* <div className="form-group form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" htmlFor="exampleCheck1">Accept Terms and Condition.</label>
                                        </div> */}
                                        <div className="form-group">
                                            <ButtonLayout 
                                                type="submit"
                                                customclass="btn-md form-control" 
                                                disabled={isSubmitting}
                                                label={isSubmitting ? (
                                                <span>
                                                    <FontAwesomeIcon icon={ faSpinner } className={` fa-spinning mr-2 text-white display-5`}/>
                                                    Loading...
                                                </span>) : "Signup"}
                                            />
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

export default SignUp;