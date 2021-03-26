// React
import React from 'react';
import { ErrorMessage, Form, Formik } from 'formik';
import { resetPasswordSchema } from '../../Validation/Schema';
import ButtonLayout from '../common/ButtonLayout';
import { TextInput } from '../common/FormInput';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserPassword } from '../../actions/userAction';

const ChangePassword = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const { profile } = user;
    return (
        <>
            <section className="col-md-12 col-lg-12 col-12 change-password--heading mt-5">
                <div className="clearfix">
                    <h3>Change Password</h3>
                    <hr className="hr-line"/>
                </div> 
                <div className="mt-4">
                    <Formik
                        initialValues={{
                            password: '',
                            confirmPassword: ''
                        }}
                        validationSchema={resetPasswordSchema}
                        onSubmit={(values, action)=>{
                            dispatch(updateUserPassword(values, profile.userID, action))
                        }}                            >
                        {(({ values,handleSubmit, touched, errors, isSubmitting })=>(
                            <Form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <TextInput 
                                        label="New password"
                                        name="password"
                                        type="password"
                                        className={`form-control ${
                                            touched.password && errors.password ? "is-invalid" : ""
                                        }`}
                                        id="password"
                                        placeholder="Enter New Password"
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="password"
                                        className="invalid-feedback p-0"
                                        />
                                </div>
                                <div className="form-group">
                                    <TextInput 
                                        label="Confirm password"
                                        name="confirmPassword"
                                        type="password"
                                        className={`form-control ${
                                            touched.confirmPassword && errors.confirmPassword ? "is-invalid" : ""
                                        }`}
                                        id="confirmPassword"
                                        placeholder="Enter Password Again"
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="confirmPassword"
                                        className="invalid-feedback p-0"
                                        />
                                </div>
                                <div className="form-group">
                                    <ButtonLayout 
                                        type="submit"
                                        customclass="btn-md form-control" 
                                        disabled={isSubmitting}
                                        label={isSubmitting ? (
                                            <span><i className="fa fa-spinner fa-spin"></i> Updating...</span>
                                        ) : "Update Password"
                                    }
                                    />
                                </div>
                            </Form>
                        ))}
                    </Formik>
                    </div>
            </section>
        </>
    )
}


export default ChangePassword;