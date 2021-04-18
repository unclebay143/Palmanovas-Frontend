import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsersBonusHistory, getUserBonusHistory } from '../../../../actions/bonus/bonusAction';
import { getCurrentUserRefferalBonusHistory } from '../../../../actions/referralAction/referralAction';
import { formatDate } from '../../../../_helper/dateFormatter';
import { getPackageName } from '../../../../_helper/getPackageROIDay'


// users personal history page to view all their approved payments
const MyReferralBonusHistory = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector(state => state.user);
  // component level state
  const [userReferral, setUserReferralBonusHistory] = useState(null)
  useEffect(() => {
    // if there is a profile get the user package approved history
    profile && dispatch(getCurrentUserRefferalBonusHistory(profile.userID))
    .then((res)=>{
      // store the response to the component level state
      setUserReferralBonusHistory(res.data.data)
    })
    .catch((error)=>console.log(error))
  }, [dispatch, profile])
  console.log(userReferral)
  return (
    <>
      <div className="payment-history">
        <section className="section-heading mt-5">
          <div className="clearfix">
              <h3>Referral Bonus History</h3>
              <hr className="hr-line"/>
          </div>
        </section>
        <section className="table-responsive"  style={{overflowY:'scroll', height: '81vh'}}>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">Date Paid</th>
                <th scope="col">Amount</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
                {
                    !userReferral ? (
                        <tr>
                            <td colSpan="4">Fetching history please wait...</td>
                        </tr>
                    ):null
                }
                { 
                // if there is no history
                // I added the undefined check when the backend is not returning anything
                    userReferral && userReferral.length === 0 ? (
                    <tr>
                        <td colSpan="4">No Referral Bonus history yet.</td>
                    </tr>
                    ): null
                }
                {
                    userReferral && [...userReferral].reverse().map((bonusHistory, index)=>{
                    return(
                        <tr key={bonusHistory.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{formatDate(bonusHistory.date)}</td>
                        <td>{bonusHistory.amount}</td>
                        <td> <button className="btn btn-sm btn-success">paid</button></td>
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



export default MyReferralBonusHistory;