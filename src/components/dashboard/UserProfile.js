// React
import React, { useEffect, useState } from 'react';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faEdit, 
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserBankDetails, getUserCryptoDetails } from '../../actions/userAction';
import SkeletonLoader from '../../util/SkeletonLoader';
import Skeleton from 'react-loading-skeleton';


const UserProfile = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const { profile } = user;
    const [userBankDetails, setUserBankDetails] = useState({})
    const [userCryptoDetails, setuserCryptoDetails] = useState({})

    useEffect(() => {
        // get the user bank details
        if(profile){
            dispatch(getUserBankDetails(profile.userID))
            .then((response)=>{
                setUserBankDetails(response.data.data[0])
            })
            .catch((error)=>{
                console.log(error)
            })
        }
        // get the user crypto wallet details
        if(profile){
            dispatch(getUserCryptoDetails(profile.userID))
            .then((response)=>{
                console.log(response)
                setuserCryptoDetails(response.data.data[0])
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    }, [dispatch, profile])

    // if there is no user, show skeleton loader
    if(!profile){
        return (
            <SkeletonLoader />
        )
    }

    return (
        <>
            <div className="row user-profile">
                <section className="col-md-6 col-lg-6 col-12 profile-heading">
                    <div className="clearfix">
                        <h3>User profile</h3>
                        <hr className="hr-line"/>
                    </div>
                    <div className="user-information mb-4">
                        <p>
                            <span className="data-lead">Name:</span> { profile.fullName }
                        </p>
                        <p>
                            <span className="data-lead">Username:</span> { profile.userName }
                        </p>
                        <p>
                            <span className="data-lead">Registered Phone Number:</span> { profile.phoneNumber !== 'undefined' && profile.phoneNumber }
                        </p>
                        <p>
                            <span className="data-lead">Email:</span> { profile.email }
                        </p>
                        <p>
                            <span className="data-lead">User Type:</span> { profile.roleID !== 1 ? "Admin" : "palmaUser" }
                        </p>
                        <p>
                            <span className="data-lead">Rank:</span> { profile.rank }
                        </p>
                        <Link
                            to="/dashboard/update_profile" 
                            className="btn btn-sm bg-custom-light-green"
                        >Update 
                            <FontAwesomeIcon icon={ faEdit } className="ml-1"/> 
                        </Link>
                    </div>
                </section>


                {
                    !userBankDetails ? (
                        // <h3>loading...</h3>
                        <SkeletonLoader />
                    ) : (
                        <section className="col-md-6 col-lg-6 col-12 section-heading">
                            <div className="clearfix">
                                <h3>Bank Information</h3>
                                <hr className="hr-line"/>
                            </div>
                            <div className="user-information">
                                <p>
                                    Bank Name: { userBankDetails.bankName || <Skeleton color="#EEE" highlightColor="#CCC" count={1} width={100} /> }
                                </p>
                                <p>
                                    Account Number: { userBankDetails.accountNumber || <Skeleton color="#EEE" highlightColor="#CCC" count={1} width={100} /> }
                                </p>
                                <p>
                                    Account Name: { userBankDetails.accountName || <Skeleton color="#EEE" highlightColor="#CCC" count={1} width={100} /> }
                                </p>
                                <p>
                                    Account Type: { userBankDetails.accountType || <Skeleton color="#EEE" highlightColor="#CCC" count={1} width={100} /> }
                                </p>
                                <Link to="/dashboard/update_bank" 
                                    className="btn btn-sm bg-custom-light-green">Update 
                                    <FontAwesomeIcon icon={ faEdit } className="ml-1"/> 
                                </Link>
                            </div>
                        </section>
                    )
                }
                
                <section className="col-12 section-heading mt-5">
                    <div className="clearfix">
                        <h3>Cryptocurrency Wallet</h3>
                        <hr className="hr-line"/>
                    </div>
                    <div className="user-information">
                        {
                            userCryptoDetails &&(<>
                        <p>
                            Wallet ID: { userCryptoDetails.walletID || <Skeleton color="#EEE" highlightColor="#CCC" count={1} width={100} />}
                        </p>
                        <p>
                            Email: { userCryptoDetails.email || <Skeleton color="#EEE" highlightColor="#CCC" count={1} width={100} />}
                        </p></>)
                        }
                        <Link to="/dashboard/update_crypto" 
                            className="btn btn-sm bg-custom-light-green">Update 
                            <FontAwesomeIcon icon={ faEdit } className="ml-1"/> 
                        </Link>
                    </div>
                </section>
            </div>
        </>
    )
}


export default UserProfile;