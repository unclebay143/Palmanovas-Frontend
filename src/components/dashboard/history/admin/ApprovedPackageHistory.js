import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  getUsersApprovedPayments 
} from '../../../../actions/paymentAction/paymentAction';
import { formatDate } from '../../../../_helper/dateFormatter';
import { getPackageName } from '../../../../_helper/getPackageROIDay';


// admin page to view all approved package payments
const ApprovedPackageHistory = () => {
  const dispatch = useDispatch();
  // get user from the redux state
  const user = useSelector(state => state.user);
  // get user profile from the state
  const { profile } = user;
  // component level state
  const [paymentHistory, setPaymentHistory] = useState([])

  useEffect(() => {
    // get all users approved payments from the db
    dispatch(getUsersApprovedPayments())
    .then((res)=>{
      // store the response data (list of all approved payments) to the component level state
      setPaymentHistory(res.data.data)
    })
    .catch((error)=>console.log(error)) // handle error
  }, [dispatch])
  console.log(paymentHistory)
  return (
    <>
      <div className="payment-history">
        <section className="section-heading mt-5">
          <div className="clearfix">
              <h3>Payment History</h3>
              <hr className="hr-line"/>
          </div>
        </section>
        <section className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">SN</th>
                <th scope="col">Username</th>
                <th scope="col">Package Name</th>
                <th scope="col">Agent Name</th>
                <th scope="col">Start Date</th>
              </tr>
            </thead>
            <tbody>
              {
                paymentHistory.length === 0 ?(
                  <tr>
                    <td>No Payment History yet.</td>
                  </tr>
                ):null
              }
              {
                paymentHistory && paymentHistory.map((history, index)=>{
                  return(
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{history.userName}</td>
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