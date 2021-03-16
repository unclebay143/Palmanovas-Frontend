// React
import React from 'react';
import {user} from './appDb';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faEdit, 
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const UserProfile = () => {

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
                            Name: { user.profile.name }
                        </p>
                        <p>
                            Username: { user.profile.username }
                        </p>
                        <p>
                            Registered Phone Number: { user.profile.registeredNumber }
                        </p>
                        <p>
                            Email: { user.profile.email }
                        </p>
                        <p>
                            User Type: { user.profile.userType }
                        </p>
                        <p>
                            Rank: { user.profile.rank }
                        </p>
                        <Link
                            to="/dashboard/update_profile" 
                            className="btn btn-sm bg-custom-light-green"
                        >Update 
                            <FontAwesomeIcon icon={ faEdit } className="ml-1"/> 
                        </Link>
                    </div>
                </section>
                <section className="col-md-6 col-lg-6 col-12 section-heading mt-">
                    <div className="clearfix">
                        <h3>Bank Information</h3>
                        <hr className="hr-line"/>
                    </div>
                    <div className="user-information">
                        <p>
                            Bank Name: { user.account.bankName }
                        </p>
                        <p>
                            Account Number: { user.account.accountNumber }
                        </p>
                        <p>
                            Account Name: { user.account.accountName }
                        </p>
                        <p>
                            Account Type: { user.account.accountType }
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
                            Wallet ID: { user.crypto.id }
                        </p>
                        <p>
                            Email: { user.crypto.email }
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