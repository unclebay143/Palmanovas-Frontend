import { event } from 'jquery';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { bonusPaidForActiveReferrals, getUserBonusHistory, getUserReferralBonusPercentage } from '../../actions/bonus/bonusAction';
import { getAllUserReferral } from '../../actions/referralAction/referralAction';
import { viewWithdrawalDetails } from '../../actions/withdrawalAction/withdrawalAction';
import './modal.css'

const ReferralList = () => {
    const dispatch = useDispatch();
    const { profile } = useSelector(state => state.user);
    const [usersReferral, setUsersReferral] = useState(null)
    const [filterBy, setFilterBy] = useState(null)
    const [showBankDetails, setShowBankDetails] = useState(null) 
    const [showCryptoDetails, setShowCryptoDetails] = useState(null) 
    const [isPaying, setIsPaying] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [payLoad, setPayLoad] = useState({
        referralCount: null,
        userID: null,
        bonus: null
    })
    const usersReferralBaseOnSize = usersReferral?.filter((referral)=> filterBy ? referral.referralList.length === filterBy : referral.referralList.length > 0)
    const { userID } = profile || {}
    const [withdrawalMethodDetails, setWithdrawalMethodDetails] = useState({
        bank: {},
        crypto: {}
    })
    useEffect(() => {
        profile && dispatch(getAllUserReferral(userID))
        .then((res)=>{
            setUsersReferral(res.data.data?.filter((list)=>list.bonus > 0))
        })
        .catch((err)=>console.log(err))
    }, [dispatch, userID, profile])
    // function that handles popup
    const paymentMethodPrompt = (withdrawalMethod, userID, userReferralLength, bonus) =>{
        // console.log(bonus);
        setPayLoad({
            referralCount: userReferralLength,
            userID,
            bonus,
        })
        setIsLoading(true)
         const errorMessage = ((err)=>{
            Swal.fire({
                title: 'Something went wrong, Please try again',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
        })

        // get the user withdrawal bank details from the server
        if(withdrawalMethod === "bank"){
            dispatch(viewWithdrawalDetails("bank",userID))
            .then((res)=>{
                setIsLoading(false)
                setWithdrawalMethodDetails({bank:res.data.data[0]})
                setShowBankDetails(true)
                })
            .catch((err)=>{ 
                setIsLoading(false)
                errorMessage(err)
            })
            
        }
        // get the user withdrawal crypto details from the server
        if(withdrawalMethod === "crypto"){
            dispatch(viewWithdrawalDetails("crypto",userID))
            .then((res)=>{
                setIsLoading(false)
                setWithdrawalMethodDetails({crypto:res.data.data[0]})
                setShowCryptoDetails(true)
            })
            .catch((err)=>{ 
                setIsLoading(false)
                errorMessage(err)
            })
        }
        
    }

    // handle filterBy change
    const handleChange = (event) =>{
        // convert the value from form to number and update the filter by
        setFilterBy(Number(event.target.value))
    }
    const handleBonusPayment = (bonus, userID) =>{
        setIsPaying(true)
        dispatch(bonusPaidForActiveReferrals(bonus, userID))
        .then((res)=>{
            setIsPaying(false)
            Swal.fire("Success", "Bonus Payment Confirmed", "success")
        })
        .catch((err)=>{
            alert("Something went wrong")
            setIsPaying(false)
        })
    }

    return (
        <>
            <div className="users-referral-list">
                {/* bank details modal */}

                <div id="myModal" className={`modal ${showBankDetails ? "d-block" : null}`}>
                    <div className="modal-content">
                        <span className="close" onClick={()=>setShowBankDetails(false)}>&times;</span>
                        <div class="details" style={{background: '#cccccc'}}>
                            <span className="h3 mb-5 method text-success">Bank Details</span>
                            <ul style={{marginTop: '20px'}}>
                                <li style={{marginBottom: "20px"}}>Bank Name: {withdrawalMethodDetails.bank?.bankName}</li>
                                <li style={{marginBottom: "20px"}}>Bank Account: {withdrawalMethodDetails.bank?.accountNumber}</li>
                                <li style={{marginBottom: "20px"}}>Account Name: {withdrawalMethodDetails.bank?.accountName}</li>
                                <li style={{marginBottom: "20px"}}>Account Type: {withdrawalMethodDetails.bank?.accountType}</li>
                                <button disabled={isPaying} class="btn btn-sm btn-success my-3" onClick={()=>handleBonusPayment(payLoad.bonus, payLoad.userID)}>{isPaying ? "Loading..." : "Mark Paid"}</button>
                                <button class="btn btn-sm btn-danger m-3" onClick={()=>setShowBankDetails(false)}>Close</button>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* crypto details modal */}
                <div id="myModal" className={`modal ${showCryptoDetails ? "d-block" : null}`}>
                    <div className="modal-content">
                        <span className="close" onClick={()=>setShowCryptoDetails(false)}>&times;</span>
                        <div class="details" style={{background: '#cccccc', padding: '', textAlign:'left', margin: '0px'}}>
                            <span className="p-3 mb-3">Crypto Details</span>
                            <ul style={{marginTop: '20px'}}>
                                <li style={{marginBottom: "20px"}}>Wallet ID: {withdrawalMethodDetails.crypto?.walletID}</li>
                                <li style={{marginBottom: "20px"}}>Email: {withdrawalMethodDetails.crypto?.email}</li>
                                <button disabled={isPaying} class="btn btn-sm btn-success my-3" onClick={()=>dispatch(bonusPaidForActiveReferrals(payLoad.bonus, payLoad.userID))}>{isPaying ? "Loading..." : "Mark Paid"}</button>
                                <button class="btn btn-sm btn-danger m-3" onClick={()=>setShowCryptoDetails(false)}>Close</button>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="section-heading mt-5">
                    <div className="clearfix">
                        <h3>Referrals Bonus</h3>
                        <hr className="hr-line"/>
                    </div>
                </section>
                <section>
                    <label className="text-capitalize">filter users by number of referral</label>
                    <input 
                     className="form-control form-control-sm" 
                     placeholder="Enter Number of referrals"
                     type="number" onChange={handleChange}></input>
                </section>
                <section className="table-responsive" style={{overflowY:'scroll', height: '81vh'}}>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">S/N</th>
                                <th scope="col">Username</th>
                                <th scope="col">No of referrals</th>
                                <th scope="col">Active Bonus</th>
                            {/* <td>{dispatch(getUserReferralBonusPercentage(514))}l</td> */}
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                !usersReferral ? (
                                    <tr>
                                        <td  colSpan="4">Fetching Referrals please wait...</td>
                                    </tr>
                                ):null
                            }
                            {
                                
                                usersReferralBaseOnSize?.length === 0 ? (
                                    <tr>
                                        <td  colSpan="4">No users with bonus yet.</td>
                                    </tr>
                                ):null
                            }
                            {
                               usersReferralBaseOnSize?.map(({userName, referralList, userID, bonus}, index)=>{
                                    return(
                                    <tr key={index}>
                                        <th scope="row">{index+1}</th>
                                        <td>{userName}</td>
                                        <td>{referralList.length}</td>
                                        <td>#{bonus}</td>
                                        <td><button className="btn btn-sm btn-success" onClick={()=>paymentMethodPrompt("bank",userID,referralList.length, bonus)} disabled={isLoading}>{isLoading ? "Loading Please wait..." : "View Bank Details"}</button></td>
                                        <td><button className="btn btn-sm btn-success" onClick={()=>paymentMethodPrompt("crypto",userID,referralList.length, bonus)} disabled={isLoading}>{isLoading ? "Loading Please wait.." : "View Crypto Details"}</button></td>
                                    </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </section>
            </div>
        </>
    )
}

export default ReferralList;