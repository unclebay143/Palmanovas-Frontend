import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { 
  getUsersApprovedPayments 
} from '../../../../actions/paymentAction/paymentAction';
import { formatDate } from '../../../../_helper/dateFormatter';
import { getPackageName } from '../../../../_helper/getPackageROIDay';


// admin page to view all approved package payments
const ApprovedPackageHistory = () => {
  const dispatch = useDispatch();
  // component level state
  const [paymentHistory, setPaymentHistory] = useState(null)

  const [filterByUsername, setFilterByUserName] = useState(null)
  // if there is a filter return the users details else return all usernames
  const filteredUsersByUsername = paymentHistory?.filter((referral)=> filterByUsername ? referral.userName.toLowerCase() === filterByUsername.toLowerCase() : referral.userName !== "")


  useEffect(() => {
    // get all users approved payments from the db
    dispatch(getUsersApprovedPayments())
    .then((res)=>{
      // store the response data (list of all approved payments) to the component level state
      setPaymentHistory(res.data.data)
    })
    .catch((error)=>console.log(error)) // handle error
  }, [dispatch])

  // handle filterByUsername change
  const handleChange = (event) =>{
    setFilterByUserName(event.target.value);
  }
  return (
    <>
      <div className="payment-history">
        <section className="section-heading mt-5">
          <div className="clearfix">
              <h3>Package History</h3>
              <hr className="hr-line"/>
          </div>
        </section>
        <section>
          <label className="text-capitalize">Search history by usernames</label>
          <input 
            className="form-control form-control-sm" 
            placeholder="Enter Username"
            type="text" onChange={handleChange}></input>
        </section>
        <section className="table-responsive" style={{overflowY:'scroll', height: '81vh'}}>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">SN</th>
                <th scope="col">Username</th>
                <th scope="col">ID</th>
                <th scope="col">Package Name</th>
                <th scope="col">Agent Name</th>
                <th scope="col">Start Date</th>
              </tr>
            </thead>
            <tbody>
              {
                !paymentHistory ? (
                  <tr>
                    <td  colSpan="4">Fetching history please wait...</td>
                  </tr>
              ):null
              }
              {
                paymentHistory && paymentHistory.length === 0 ?(
                  <tr>
                    <td  colSpan="4">No Payment History yet.</td>
                  </tr>
                ):null
              }


              {
                // paymentHistory && [...paymentHistory].reverse().map((history, index)=>{
                filteredUsersByUsername && [...filteredUsersByUsername].reverse().map((history, index)=>{
                  return(
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{history.userName}</td>
                      <td>{history.id}</td>
                      <td>Palm - {getPackageName(history.packageID)}</td>
                      <td>{history.agentName}</td>
                      <td>{formatDate(history.startDate)}</td>
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



export default ApprovedPackageHistory;