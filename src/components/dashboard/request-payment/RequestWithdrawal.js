import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUserBankDetails, getUserCryptoDetails } from '../../../actions/userAction';
import { tryRequestForwithdrawal } from '../../../actions/withdrawalAction/withdrawalAction';
import { somethingWentWrongLogger } from '../../../toaster/index';

const RequestWithdrawal = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const user = useSelector(state => state.user);
    const { profile, bankDetails, cryptoDetails } = user;
    const { userID, ROIstatus } = profile || {};
    // pull out withdrawalMethod from state
    const [withdrawalMethodOption, setWithdrawalMethodOption] = useState({withdrawalMethod: null});
    const { withdrawalMethod } = withdrawalMethodOption;

    // if user roi is not matured send them back to the dashboard
    // if(ROIstatus === "growing" || ROIstatus === "")history.push("/dashboard")
    // if the user does not access this component from the request button, take them back to dashboard
    if(!history.location.state)history.push('/dashboard')

    useEffect(() => {
        if(profile){
            // get the user bank details
            dispatch(getUserBankDetails(userID))
            // get the user crypto wallet details
            dispatch(getUserCryptoDetails(userID))
        }

    }, [dispatch, profile, userID])

    useEffect(() => {
        // handles fetching bank and crypto information
        if(bankDetails || cryptoDetails){
            setIsLoading(false)
        }
    }, [bankDetails, cryptoDetails])


    // handle select change
    const handleChange = (event) =>{
        setWithdrawalMethodOption({withdrawalMethod: event.target.value})
    }

    // payment method submission
    const handleSubmit = () =>{
        if(withdrawalMethod !== null){
            dispatch(tryRequestForwithdrawal(userID, withdrawalMethodOption))
            //push the current url to the history stack to be used to protect the request sent component
            .then((response)=>history.push({pathname: '/dashboard/request_sent', state: {from: '/dashboard/withdraw'}}))
            .catch((error)=>somethingWentWrongLogger())
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
                <p className="alert alert-success p-2 text-dark">Do not make withdrawal request more than 1 if successful</p>
                <select className="form-control form-control-md" onChange={handleChange}>
                    {/* display loading state to the user */}
                    <option>{isLoading ? "Loading..." : "Choose..."}</option>
                    {
                        !isLoading &&( // if the bank and crypto details are present, display them
                            <>
                                {
                                    bankDetails && <option value="bank">
                                       Bank: { bankDetails.accountName } - { bankDetails.accountNumber } - { bankDetails.bankName }
                                    </option>
                                }
                                {
                                    cryptoDetails && <option value="crypto">
                                        Crypto: { cryptoDetails.walletID } - { cryptoDetails.email }
                                    </option>
                                }
                            </>
                        )
                    }
                </select>
                {/* <button className="btn btn-sm btn-custom-green mt-3" onClick={(()=>history.push('/dashboard/request_sent'))}>Submit</button> */}
                <button 
                    disabled={withdrawalMethod === null || withdrawalMethod === "Choose..." ? 'disabled' : ""}
                    className="btn btn-sm btn-custom-green mt-3" 
                    onClick={()=>handleSubmit()}
                >Submit</button>
            </section>    
        </>
    )
}


export default RequestWithdrawal;