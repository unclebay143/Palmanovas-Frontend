import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { confirmPackagePayment, getDeclaredPaymentList } from '../../../actions/paymentAction/paymentAction';
import { upgradeAndAgentsDetails } from './../appDb'


const UpgradeUserPackage = () => {
    const dispatch = useDispatch();
    // state for package select value
    const [packageDetails, setPackageDetails] = useState({
        packageID: null,

    })
    // state for payment request from users
    const [paymentRequestDetails, setPaymentRequestDetails] = useState(null);
    
    // get all user's payment declaration`
    useEffect(() => {
        dispatch(getDeclaredPaymentList())
        .then((response)=>{
            setPaymentRequestDetails(response.data.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [dispatch])

    // handle select change
    const handleChange = (event) =>{
        setPackageDetails({packageID: event.target.value})
    }
    
  // alert function
const promptUser = (packageDetailsFromState, requestDetail) =>{
    Swal.fire({
      title: 'Confirmation',
      html: `Approve Package: <b>${packageDetailsFromState.packageID}</b> <br/> To Account: <b>${requestDetail.userName}</b>`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgb(83,175,80',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, I confirm!',
      customClass: {
        confirmButton: 'btn  btn-custom-green',
        cancelButton: 'btn btn-danger ml-2'
      },
      buttonsStyling: false
    }).then((result) => {
      // if the user clicked on confirm 
      if (result.isConfirmed) { // run this block
        // handleSubmit(y)
        dispatch(confirmPackagePayment(packageDetailsFromState.packageID, requestDetail.id)) // dispatch an action to the backend
        .then((response)=>{
          Swal.fire( // UI notification of the success
            {
              title: 'Confirmed!',
              icon: 'success',
              text: 'Package activated.',
              confirmButtonColor: 'rgb(83,175,80)',
            }
  
          )
        })
        .catch((error)=>{
          Swal.fire( // UI notification of the success
            {
              title: 'Error!',
              icon: 'warning',
              text: 'Something went wrong, please try again.',
              confirmButtonColor: 'rgb(83,175,80)',
            }
  
          )
        })
      }
    })
  }
    return (
        <>
            <div className="upgrade">
                <section className="section-heading mt-5">
                    <div className="clearfix">
                        <h3>Confirm Payment</h3>
                        <hr className="hr-line"/>
                    </div>
                </section>
                <section className="table-responsive"  style={{overflowY:'scroll', height: '81vh'}}>
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Agent Name</th>
                            <th scope="col">Package</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>

                            {
                                !paymentRequestDetails ? (
                                <tr>
                                    <td>Loading please wait...</td>
                                </tr>
                            ):null
                            }
                            {
                                paymentRequestDetails && paymentRequestDetails.length === 0 ? (
                                    <tr>
                                        <td>No payment request yet</td>
                                    </tr>
                                ): null
                            }
                            {
                                paymentRequestDetails && [...paymentRequestDetails].reverse().map((requestDetails, index)=>{
                                    return(

                                        <tr key={requestDetails.id}>
                                            <td>{requestDetails.id}</td>
                                            <td>{requestDetails.userName}</td>
                                            <td>{requestDetails.agentName}</td>
                                            <td>
                                            <div class="dropdown">
                                                <div class="input-group mb-3">
                                                    <select 
                                                        class="btn btn-sm custom-select" 
                                                        onChange={handleChange} 
                                                        id="packageID">
                                                        <option selected>Select Package...</option>
                                                    {
                                                        upgradeAndAgentsDetails[0].packagesInformation.map((packageinfo, index)=>{
                                                            return(
                                                                <option 
                                                                    key={packageinfo.packageID}
                                                                    value={packageinfo.packageID}
                                                                    >
                                                                        {index + 1}. 
                                                                        {packageinfo.packageName} - {packageinfo.packagePrice}
                                                                </option>
                                                                )
                                                            })
                                                        }
                                                        </select>
                                                </div>
                                            </div>
                                            </td>
                                            <td>
                                                <button 
                                                    className="btn btn-sm btn-custom-green" 
                                                    onClick={()=>promptUser(packageDetails, requestDetails)}
                                                >
                                                    Approve
                                                </button>
                                            </td>
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

export default UpgradeUserPackage;
