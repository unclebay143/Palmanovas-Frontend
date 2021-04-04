import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllWithdrawalRequest } from '../../../../actions/withdrawalAction/withdrawalAction';
import { formatDate } from '../../../../_helper/dateFormatter';
import { getPackageName } from '../../../../_helper/getPackageROIDay'


// users personal history page to view all their approved payments
const UsersWithdrawalHistory = () => {
  const dispatch = useDispatch();
  // get user from redux state
  const user = useSelector(state => state.user);
  // get user profile from the user state
  const { profile } = user;
  // component level state
  const [withdrawalHistory, setWithdrawalHistory] = useState([])
  useEffect(() => {
    // if there is a profile get the user package approved history
    profile && dispatch(getAllWithdrawalRequest(profile.userID))
    .then((res)=>{
      console.log(res)
      // store the response to the component level state
      setWithdrawalHistory(res.data.data)
    })
    .catch((error)=>console.log(error))
  }, [dispatch, profile])
  return (
    <>
      <div className="payment-history">
        <section className="section-heading mt-5">
          <div className="clearfix">
              <h3>Withdrawal History</h3>
              <hr className="hr-line"/>
          </div>
        </section>
        <section className="table-responsive"  style={{overflowY:'scroll', height: '81vh'}}>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Package Name</th>
                <th scope="col">Agent Name</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              { // if there is no history
                withdrawalHistory.length === 0 ? (
                  <tr>
                    <td>No withdrawal history yet.</td>
                  </tr>
                ): null
              }
              {
                withdrawalHistory && [...withdrawalHistory].reverse().map((history, index)=>{
                  return(
                    <tr key={history.id}>
                      {/* <th scope="row">{index + 1}</th> */}
                      <th scope="row">{history.id}</th>
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



export default UsersWithdrawalHistory;