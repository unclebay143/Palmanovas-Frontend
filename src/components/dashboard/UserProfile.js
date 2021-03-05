// React
import React from 'react';
import {user} from './appDb';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faEdit, 
} from "@fortawesome/free-solid-svg-icons";

const UserProfile = () => {

    return (
        <>
            <div className="user-profile">
                <section className="profile-heading">
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
                        <button 
                            className="btn btn-sm bg-custom-light-green">Update 
                            <FontAwesomeIcon icon={ faEdit } className="ml-1"/> 
                        </button>
                    </div>
                </section>
                <section className="section-heading mt-5">
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
                        <button 
                            className="btn btn-sm bg-custom-light-green">Update 
                            <FontAwesomeIcon icon={ faEdit } className="ml-1"/> 
                        </button>
                    </div>
                </section>
                <section className="section-heading mt-5">
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
                        <button 
                            className="btn btn-sm bg-custom-light-green">Update 
                            <FontAwesomeIcon icon={ faEdit } className="ml-1"/> 
                        </button>
                    </div>
                </section>
            </div>
        </>
    )
}


export default UserProfile;