import React, { useEffect, useState } from 'react'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsersROIHistories } from '../../../../actions/withdrawalAction/withdrawalAction';
import { formatDate } from '../../../../_helper/dateFormatter';
import { getPackageName } from '../../../../_helper/getPackageROIDay'


// users personal history page to view all their approved payments
const UsersReferralBonusHistory = () => {
  const dispatch = useDispatch();
  // get user from redux state
  const user = useSelector(state => state.user);
  // get user profile from the user state
  const { profile } = user;
  // component level state
  const [usersReferralBonusHistory, setUsersReferralBonusHistory] = useState(null)
  useEffect(() => {
    // if there is a profile get the user package approved history
    profile && dispatch(getAllUsersROIHistories(profile.userID))
    .then((res)=>{
      // store the response to the component level state
      setUsersReferralBonusHistory(res.data.data)
    })
    .catch((error)=>console.log(error))
  }, [dispatch, profile])
  console.log(usersReferralBonusHistory)
  return (
    <>
      <div className="payment-history">
        <section className="section-heading mt-5">
          <div className="clearfix">
              <h3>Users Referrals Bonus History <span className="display-5">(Admin)</span></h3>
              <hr className="hr-line"/>
          </div>
        </section>
        <section className="table-responsive"  style={{overflowY:'scroll', height: '81vh'}}>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">Username</th>
                <th scope="col">Amount</th>
                <th scope="col">Date Paid</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
                {
                  !usersReferralBonusHistory ? (
                      <tr>
                          <td colSpan="4">Fetching history please wait...</td>
                      </tr>
                  ):null
                }
                { 
                  // if there is no history
                  // I added the undefined check when the backend is not returning anything
                  usersReferralBonusHistory?.length === 0 ? (
                      <tr>
                        <td colSpan="4">No withdrawal history yet.</td>
                      </tr>
                  ): null
                }
                {
                usersReferralBonusHistory && [...usersReferralBonusHistory].reverse().map((userHistory, index)=>{
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



export default UsersReferralBonusHistory;