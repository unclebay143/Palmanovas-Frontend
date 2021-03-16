import { ErrorMessage, Form, Formik } from 'formik';
import React from 'react'
import ButtonLayout from '../common/ButtonLayout';
import { TextInput } from '../common/FormInput';

const UpdateCryptoWallet = () => {
    return (
        <>
             <div className="row update-bank-details">
                <section className="col-md-12 col-lg-12 col-12 update-bank-heading">
                    <div className="clearfix">
                        <h3>Update Crypto Wallet</h3>
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
                                            label="Wallet ID"
                                            name="id"
                                            type="text"
                                            className={`form-control ${
                                                touched.id && errors.id ? "is-invalid" : ""
                                            }`}
                                            id="id"
                                            placeholder="Enter Wellet ID"
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="id"
                                            className="invalid-feedback p-0"
                                            />
                                    </div>
                                    <div className="form-group">
                                        <TextInput 
                                            label="Email"
                                            name="email"
                                            type="email"
                                            className={`form-control ${
                                                touched.email && errors.email ? "is-invalid" : ""
                                            }`}
                                            id="email"
                                            placeholder="Enter Email Address"
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="email"
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



export default UpdateCryptoWallet;