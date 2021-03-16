import { ErrorMessage, Form, Formik } from 'formik';
import React from 'react'
import ButtonLayout from '../common/ButtonLayout';
import { TextInput } from '../common/FormInput';

const UpdateProfile = () => {
    return (
        <>
             <div className="row update-user-profile">
                <section className="col-md-12 col-lg-12 col-12 update-profile-heading">
                    <div className="clearfix">
                        <h3>Update profile</h3>
                        <hr className="hr-line"/>
                    </div>
                    <div className="mt-4">
                        <Formik
                            initialValues={{
                                
                            }}
                            
                            >
                            {(({ values, touched, errors, isSubmitting })=>(
                                <Form>
                                    <div className="form-group">
                                        <TextInput 
                                            label="Name"
                                            name="name"
                                            type="name"
                                            className={`form-control ${
                                                touched.name && errors.name ? "is-invalid" : ""
                                            }`}
                                            id="name"
                                            placeholder="Enter Name"
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="name"
                                            className="invalid-feedback p-0"
                                            />
                                    </div>
                                    <div className="form-group">
                                        <TextInput 
                                            label="Username"
                                            name="userName"
                                            type="userName"
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
                                            name="phone"
                                            type="tel"
                                            className={`form-control ${
                                                touched.phone && errors.phone ? "is-invalid" : ""
                                            }`}
                                            id="phone"
                                            placeholder="Enter Phone Number"
                                            />
                                        <ErrorMessage
                                            component="div"
                                            name="phone"
                                            className="invalid-feedback p-0"
                                            />
                                    </div>
                                    <div className="form-group">
                                        <ButtonLayout 
                                            type="submit"
                                            customclass="btn-md form-control" 
                                            disabled={isSubmitting}
                                            label={isSubmitting ? (<span><i className="fa fa-spinner fa-spin"></i> Updating...</span>) : "Update"}
                                        />
                                    </div>
                                </Form>
                            ))}
                        </Formik>
                        </div>
                </section>
            </div>
        </>
    )
}



export default UpdateProfile;