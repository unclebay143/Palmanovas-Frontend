import { ErrorMessage, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { updateUserProfile } from '../../actions/userAction';
import ButtonLayout from '../common/ButtonLayout';
import { TextInput } from '../common/FormInput';
import ChangePassword from './ChangePassword';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


const UpdateProfile = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const { profile } = user;
    const [userCurrentProfile, setUserCurrentProfile] = useState(null);
    const history = useHistory();
    
    useEffect(() => {
        // If the user profile has been loaded
        if(profile){
            const {
                fullName,
                userName, 
                phoneNumber,
                email
            } = profile;

            setUserCurrentProfile({
                fullName,
                userName,
                phoneNumber,
                email
            })
        }
    },[profile])
    if(!userCurrentProfile){
        return(
            <SkeletonTheme color="#EEE" highlightColor="#CCC">
                <p>
                    <Skeleton count={3} duration={4} />
                </p>
            </SkeletonTheme>
        )
    }
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
                            initialValues={userCurrentProfile}
                            enableReinitialize
                            onSubmit={(values, action)=>{
                                dispatch(updateUserProfile(values, profile.userID, action))
                                .then((response)=>{
                                    history.push('/dashboard/profile')
                                })
                                .catch((error)=>{
                                    return null
                                })
                            }}>
                            {(({ values,handleSubmit, touched, errors, isSubmitting })=>(
                                <Form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <TextInput 
                                            label="Fullname"
                                            name="fullName"
                                            type="text"
                                            className={`form-control ${
                                                touched.fullName && errors.fullName ? "is-invalid" : ""
                                            }`}
                                            id="fullName"
                                            placeholder="Enter Fullname"
                                            autoComplete="on"
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="fullName"
                                            className="invalid-feedback p-0"
                                            />
                                    </div>
                                    <div className="form-group">
                                        <TextInput 
                                            autoComplete="on"
                                            label="Username"
                                            name="userName"
                                            type="text"
                                            className={`form-control ${
                                                touched.userName && errors.userName ? "is-invalid" : ""
                                            }`}
                                            id="userName"
                                            placeholder="Enter Username"
                                            disabled
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
                                        <ButtonLayout 
                                            type="submit"
                                            customclass="btn-md form-control" 
                                            disabled={isSubmitting}
                                            label={isSubmitting ? (
                                            <span><i className="fa fa-spinner fa-spin"></i> Updating...</span>
                                            ) : "Update Profile"
                                        }
                                        />
                                    </div>
                                </Form>
                            ))}
                        </Formik>
                        </div>
                </section>
                <ChangePassword />
            </div>
        </>
    )
}



export default UpdateProfile;