import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUserBankDetails, getUserCryptoDetails } from '../../../actions/userAction';

const RequestWithdrawal = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [withdrawalMethod, setWithdrawalMethod] = useState({
        methed: null
    });
    const user = useSelector(state => state.user);
    const { profile, bankDetails, cryptoDetails } = user;

    useEffect(() => {
        if(profile){
            // get the user bank details
            dispatch(getUserBankDetails(profile.userID))
            // get the user crypto wallet details
            dispatch(getUserCryptoDetails(profile.userID))
        }

    }, [dispatch, profile])
    console.log((cryptoDetails));

    // handles fetching bank and crypto information
    useEffect(() => {
        if(bankDetails || cryptoDetails){
            setIsLoading(false)
        }
    }, [bankDetails, cryptoDetails])
    return (
        <>
            <section className="section-heading mt-5">
                <div className="clearfix">
                    <h3>Withdrawal Option</h3>
                    <hr className="hr-line"/>
                </div>
            </section>
            <section>
                <select className="form-control form-control-sm">
                    {/* display loading state to the user */}
                    <option>{isLoading ? "Loading..." : "Choose..."}</option>
                    {
                        !isLoading &&( // if the bank and crypto details are present, display them
                            <>
                                {
                                    bankDetails && <option>{ bankDetails.accountName } - { bankDetails.accountNumber } - { bankDetails.bankName }</option>
                                }
                                {
                                    cryptoDetails && <option>{ cryptoDetails.walletID } - { cryptoDetails.email }</option>
                                }
                            </>
                        )
                    }
                </select>
                <button className="btn btn-sm btn-custom-green mt-3" onClick={(()=>history.push('/dashboard/request_sent'))}>Submit</button>
            </section>    
        </>
    )
}


export default RequestWithdrawal;