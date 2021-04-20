import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserROIHistory } from '../../../../actions/withdrawalAction/withdrawalAction';
import { formatDate } from '../../../../_helper/dateFormatter';
import { getPackageName } from '../../../../_helper/getPackageROIDay'

//USER ROI WITHDRAWAL HISTORY

// users personal history page to view all their approved payments
const UserWithdrawalHistory = () => {
  const dispatch = useDispatch();
  // get user from redux state
  const user = useSelector(state => state.user);
  // get user profile from the user state
  const { profile } = user;
  // component level state
  const [withdrawalHistory, setWithdrawalHistory] = useState(null)
  useEffect(() => {
    // if there is a profile get the user package approved history
    profile && dispatch(getUserROIHistory(profile.userID))
    .then((res)=>{
      // store the response to the component level state
      setWithdrawalHistory(res.data.data)
    })
    .catch((error)=>console.log(error))
  }, [dispatch, profile])
  // console.log(withdrawalHistory)
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
                <th scope="col">S/N</th>
                <th scope="col">ID</th>
                <th scope="col">Package Name</th>
                <th scope="col">Withdrawal Method</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
                {
                    !withdrawalHistory ? (
                        <tr>
                            <td  colSpan="4">Fetching history please wait...</td>
                        </tr>
                    ):null
                }
                { 
                // if there is no history
                // I added the undefined check when the backend is not returning anything
                withdrawalHistory && withdrawalHistory.length === 0 ? (
                    <tr>
                    <td  colSpan="4">No withdrawal history yet.</td>
                    </tr>
                ): null
                }
                {
                withdrawalHistory && [...withdrawalHistory].reverse().map((userHistory, index)=>{
                    return(
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <th scope="row">{userHistory.packageID}</th>
                        <td>Palm - {getPackageName(userHistory.packageID)}</td>
                        <td>{userHistory.withdrawalMethod}</td>
                        <td>{formatDate(userHistory.date)}</td>
                        <td>
                            <button 
                            className="btn btn-sm btn-success text-capitalize">
                                {userHistory.status} {" "}
                                <FontAwesomeIcon icon={ faCheck } className="mr-2"/>
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



export default UserWithdrawalHistory;