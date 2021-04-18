import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { getAllWithdrawalRequest, tryConfirmWithdrawal, viewWithdrawalDetails } from '../../actions/withdrawalAction/withdrawalAction';
// import { formatDate } from '../../../../_helper/dateFormatter';
import { getPackageName } from '../../_helper/getPackageROIDay'

const HandlePaymentRequest = () => {
    const dispatch = useDispatch();
    // get user from redux state
    const user = useSelector(state => state.user);
    // get user profile from the user state
    const { profile } = user;
    // component level state
    const [withdrawalRequests, setWithdrawalRequest] = useState(null)
    const [withdrawalMethodDetails, setWithdrawalMethodDetails] = useState(null)
    const [onPage, setOnPage] = useState(null) //use re-render the component when the sweet alert is been cancelled/confirmed
    useEffect(() => {
      // if there is a profile get the user package approved history
      profile && dispatch(getAllWithdrawalRequest(profile.userID))
      .then((res)=>{
        // store the response to the component level state
        setWithdrawalRequest(res.data.data)
      })
      .catch((error)=>console.log(error))
      setOnPage(true)
    }, [dispatch, profile])

    // function that handles popup
    function paymentMethodPrompt(withdrawalMethod, userID) {
        // get the user withdrawal details from the server
        dispatch(viewWithdrawalDetails(withdrawalMethod, userID))
        .then((res)=>{
            // set the withdrawal details to the state
            setWithdrawalMethodDetails(res.data.data[0])
            if(withdrawalMethodDetails && withdrawalMethod === "bank"){
                return(
                    Swal.fire({
                        title: `User Payment information ${typeof withdrawalMethodDetails.bankName === "undefined" ? "try again" :withdrawalMethod}`,
                        showDenyButton: true,
                        confirmButtonText: `Paid`,
                        denyButtonText: `Cancel`,
                        html: `
                            <div style="background: #cccccc; padding: 20px 0px 10px 0px; text-align:left; margin: 0px;">
                                <ul>
                                    <li style="margin-bottom: 12px">Bank Name: ${withdrawalMethodDetails.bankName}</li>
                                    <li style="margin-bottom: 12px">Bank Account: ${withdrawalMethodDetails.accountNumber}</li>
                                    <li style="margin-bottom: 12px">Account Name: ${withdrawalMethodDetails.accountName}</li>
                                    <li style="margin-bottom: 12px">Account Type: ${withdrawalMethodDetails.accountType}</li>
                                </ul>
                            </div>
                        `,
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })
                    .then((result) => {
                        if (result.isConfirmed) {
                            dispatch(tryConfirmWithdrawal(withdrawalMethodDetails.userID, withdrawalMethodDetails.id))
                            .then((res)=>{
                                Swal.fire('Marked Paid!', '', 'success')
                            })
                    } else if (result.isDenied) {
                        setWithdrawalMethodDetails(false)
                          Swal.fire('Bank Payment Cancelled', '', 'info')
                        }
                      })
    
                )
            }
            if(withdrawalMethodDetails && withdrawalMethod === "crypto"){
                return(
                    Swal.fire({
                        title: `User Payment information ${withdrawalMethod}`,
                        html: `
                            <div style="background: #cccccc; padding: 20px 0px 10px 0px; text-align:left; margin: 0px;">
                                <ul>
                                    <li style="margin-bottom: 12px">Wallet ID: ${withdrawalMethodDetails.walletID}</li>
                                    <li style="margin-bottom: 12px">Email: ${withdrawalMethodDetails.email}</li>
                                </ul>
                            </div>
                        `,
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        },
                        showDenyButton: true,
                        confirmButtonText: `Paid`,
                        denyButtonText: `Cancel`,
                    })
                    .then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                            dispatch(tryConfirmWithdrawal(withdrawalMethodDetails.userID, withdrawalMethodDetails.id))
                            .then((res)=>{
                                Swal.fire('Marked Paid!', '', 'success')
                            })
                        } else if (result.isDenied) {
                          setWithdrawalMethodDetails(false)
                          Swal.fire('Crypto Payment Cancelled', '', 'info')
                        }
                      })
    
                )
            }
        })
        .catch((err)=>{
            console.log(err);
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
        // return (
            
        // );
    }
  
    console.log(withdrawalRequests);
    return (
        <>
            <div className="payment-history">
            <section className="section-heading mt-5">
                <div className="clearfix">
                    <h3>ROI Withdrawal Requests</h3>
                    <hr className="hr-line"/>
                </div>
            </section>
            <section className="table-responsive"  style={{overflowY:'scroll', height: '81vh'}}>
                <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Username</th>
                    <th scope="col">Current Package</th>
                    <th scope="col">Withdrawal Method</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        !withdrawalRequests ? (
                            <tr>
                                <td>Fetching Request please wait...</td>
                            </tr>
                        ):null
                    }
                    { 
                    // if there is no history
                    withdrawalRequests?.length === 0 ? (
                        <tr>
                        <td>No withdrawal history yet.</td>
                        </tr>
                    ): null
                    }
                    {
                    withdrawalRequests && [...withdrawalRequests].reverse().map((userHistory)=>{
                        return(
                        <tr key={userHistory.id}>
                            {/* <th scope="row">{index + 1}</th> */}
                            <th scope="row">{userHistory.id}</th>
                            <td>{userHistory.userName}</td>
                            <td>Palm - {getPackageName(userHistory.packageID)}</td>
                            <td className="text-capitalize">{userHistory.withdrawalMethod}</td>
                            <td>
                                <button 
                                    className="btn btn-sm btn-success text-capitalize" 
                                    style={{width: '190px'}}
                                    onClick={()=>paymentMethodPrompt(userHistory.withdrawalMethod, userHistory.userID)}
                                >View {userHistory.withdrawalMethod} details</button></td>
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

export default HandlePaymentRequest;