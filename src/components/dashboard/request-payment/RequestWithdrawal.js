import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUserBankDetails, getUserCryptoDetails } from '../../../actions/userAction';
import { tryRequestForwithdrawal } from '../../../actions/withdrawalAction/withdrawalAction';

const RequestWithdrawal = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [withdrawalMethod, setWithdrawalMethod] = useState({
        method: null
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

    // handles fetching bank and crypto information
    useEffect(() => {
        if(bankDetails || cryptoDetails){
            setIsLoading(false)
        }
    }, [bankDetails, cryptoDetails])
    // handle select change
    const handleChange = (event) =>{
        setWithdrawalMethod({paymentMethod: event.target.value})
    }

    // payment method submission
    const handleSubmit = () =>{
        if(withdrawalMethod.method !== null){
            dispatch(tryRequestForwithdrawal(profile.userID, withdrawalMethod))
        }else{
            return alert('Withdrawal method cannot be blank');
        }
    }
    return (
        <>
            <section className="section-heading mt-5">
                <div className="clearfix">
                    <h3>Withdrawal Option</h3>
                    <hr className="hr-line"/>
                </div>
            </section>
            <section>
                <select className="form-control form-control-sm" onChange={handleChange}>
                    {/* display loading state to the user */}
                    <option>{isLoading ? "Loading..." : "Choose..."}</option>
                    {
                        !isLoading &&( // if the bank and crypto details are present, display them
                            <>
                                {
                                    bankDetails && <option value="bank">
                                        { bankDetails.accountName } - { bankDetails.accountNumber } - { bankDetails.bankName }
                                    </option>
                                }
                                {
                                    cryptoDetails && <option value="crypto">
                                        { cryptoDetails.walletID } - { cryptoDetails.email }
                                    </option>
                                }
                            </>
                        )
                    }
                </select>
                {/* <button className="btn btn-sm btn-custom-green mt-3" onClick={(()=>history.push('/dashboard/request_sent'))}>Submit</button> */}
                <button 
                    disabled={withdrawalMethod.method === null ? 'disabled' : ""}
                    className="btn btn-sm btn-custom-green mt-3" 
                    onClick={()=>handleSubmit()}
                >Submit</button>
            </section>    
        </>
    )
}


export default RequestWithdrawal;