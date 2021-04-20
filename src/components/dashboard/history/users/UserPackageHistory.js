import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserApprovedPayments } from '../../../../actions/paymentAction/paymentAction'
import { formatDate } from '../../../../_helper/dateFormatter';
import { getPackageName } from '../../../../_helper/getPackageROIDay'


// users personal history page to view all their approved payments
const UserPackageHistory = () => {
  const dispatch = useDispatch();
  // get user from redux state
  const user = useSelector(state => state.user);
  // get user profile from the user state
  const { profile } = user;
  // component level state
  const [packagePaymentHistory, setPackagePaymentHistory] = useState(null)
  useEffect(() => {
    // if there is a profile get the user package approved history
    profile && dispatch(getUserApprovedPayments(profile.userID))
    .then((res)=>{
      // console.log(res)
      // store the response to the component level state
      setPackagePaymentHistory(res.data.data)
    })
    .catch((error)=>console.log(error))
  }, [dispatch, profile])
  return (
    <>
      <div className="payment-history">
        <section className="section-heading mt-5">
          <div className="clearfix">
              <h3>Package History</h3>
              <hr className="hr-line"/>
          </div>
        </section>
        <section className="table-responsive"  style={{overflowY:'scroll', height: '81vh'}}>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">Package ID</th>
                <th scope="col">Package Name</th>
                <th scope="col">Agent Name</th>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th>
              </tr>
            </thead>
            <tbody>
              {
                !packagePaymentHistory ? (
                    <tr>
                        <td colSpan="4">Fetching history please wait...</td>


                    </tr>
                ):null
              }
              { // if there is no history
                packagePaymentHistory?.length === 0 ? (
                  <tr>
                    <td colSpan="4">You do not have any package history yet.</td>
                  </tr>
                ): null
              }
              {
                packagePaymentHistory && [...packagePaymentHistory].reverse().map((history, index)=>{
                  return(
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <th scope="row">{history.packageID}</th>
                      <td>Palm - {getPackageName(history.packageID)}</td>
                      <td>{history.agentName}</td>
                      <td>{formatDate(history.startDate)}</td>
                      <td>{formatDate(history.endDate)}</td>
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



export default UserPackageHistory;