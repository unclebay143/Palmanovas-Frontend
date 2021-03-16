import { ErrorMessage, Form, Formik } from 'formik';
import React from 'react'
import ButtonLayout from '../common/ButtonLayout';
import { TextInput } from '../common/FormInput';

const UpdateBankDetails = () => {
    return (
        <>
             <div className="row update-bank-details">
                <section className="col-md-12 col-lg-12 col-12 update-bank-heading">
                    <div className="clearfix">
                        <h3>Update bank</h3>
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
                                            label="Bank Name"
                                            name="name"
                                            type="name"
                                            className={`form-control ${
                                                touched.name && errors.name ? "is-invalid" : ""
                                            }`}
                                            id="name"
                                            placeholder="Enter Bank Name"
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="name"
                                            className="invalid-feedback p-0"
                                            />
                                    </div>
                                    <div className="form-group">
                                        <TextInput 
                                            label="Account Number"
                                            name="accountNumber"
                                            type="number"
                                            className={`form-control ${
                                                touched.accountNumber && errors.accountNumber ? "is-invalid" : ""
                                            }`}
                                            id="accountNumber"
                                            placeholder="Enter Account Number"
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="accountNumber"
                                            className="invalid-feedback p-0"
                                            />
                                    </div>
                                    <div className="form-group">
                                        <TextInput 
                                            label="Account Name"
                                            name="accountName"
                                            type="text"
                                            className={`form-control ${
                                                touched.accountName && errors.accountName ? "is-invalid" : ""
                                            }`}
                                            id="accountName"
                                            placeholder="Enter Account Name"
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="accountName"
                                            className="invalid-feedback p-0"
                                            />
                                    </div>
                                    <div className="form-group">
                                        <TextInput 
                                            label="Account Type"
                                            name="accountType"
                                            type="text"
                                            className={`form-control ${
                                                touched.accountType && errors.accountType ? "is-invalid" : ""
                                            }`}
                                            id="accountType"
                                            placeholder="Enter Account Type"
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="accountType"
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



export default UpdateBankDetails;