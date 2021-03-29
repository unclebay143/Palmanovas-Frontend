// React
import React, { useEffect } from 'react';

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
    const { profile, bankDetails, cryptoDetails } = user;
    useEffect(() => {
        if(profile){
            // get the user bank details
            dispatch(getUserBankDetails(profile.userID))
            // get the user crypto wallet details
            dispatch(getUserCryptoDetails(profile.userID))
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


                <section className="col-md-6 col-lg-6 col-12 section-heading">
                    <div className="clearfix">
                        <h3>Bank Information</h3>
                        <hr className="hr-line"/>
                    </div>
                    <div className="user-information">
                        <p>
                            Bank Name: { bankDetails ? bankDetails.bankName : <Skeleton color="#EEE" highlightColor="#CCC" count={1} width={100} /> }
                        </p>
                        <p>
                            Account Number: { bankDetails ? bankDetails.accountNumber : <Skeleton color="#EEE" highlightColor="#CCC" count={1} width={100} /> }
                        </p>
                        <p>
                            Account Name: { bankDetails ? bankDetails.accountName : <Skeleton color="#EEE" highlightColor="#CCC" count={1} width={100} /> }
                        </p>
                        <p>
                            Account Type: { bankDetails ? bankDetails.accountType : <Skeleton color="#EEE" highlightColor="#CCC" count={1} width={100} /> }
                        </p>
                        <Link to="/dashboard/update_bank" 
                            className="btn btn-sm bg-custom-light-green">Update 
                            <FontAwesomeIcon icon={ faEdit } className="ml-1"/> 
                        </Link>
                    </div>
                </section>
                
                <section className="col-12 section-heading mt-5">
                    <div className="clearfix">
                        <h3>Cryptocurrency Wallet</h3>
                        <hr className="hr-line"/>
                    </div>
                    <div className="user-information">
                        <p>
                            Wallet ID: { cryptoDetails ? cryptoDetails.walletID : <Skeleton color="#EEE" highlightColor="#CCC" count={1} width={100} />}
                        </p>
                        <p>
                            Email: { cryptoDetails ? cryptoDetails.email : <Skeleton color="#EEE" highlightColor="#CCC" count={1} width={100} />}
                        </p>
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