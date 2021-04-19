import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsersBonusHistory } from '../../../../actions/bonus/bonusAction';
import { formatDate } from '../../../../_helper/dateFormatter';
import { getPackageName } from '../../../../_helper/getPackageROIDay'


// users personal history page to view all their approved payments
const MonthlyBonusHistory = () => {
  const dispatch = useDispatch();
  // component level state
  const [bonusHistories, setBonusHistory] = useState(null)
  useEffect(() => {
    // if there is a profile get the user package approved history
    dispatch(getAllUsersBonusHistory())
    .then((res)=>{
      // store the response to the component level state
      setBonusHistory(res.data.data)
    })
    .catch((error)=>console.log(error))
  }, [dispatch])
  console.log(bonusHistories)
  return (
    <>
      <div className="payment-history">
        <section className="section-heading mt-5">
          <div className="clearfix">
              <h3>Monthly Bonus History</h3>
              <hr className="hr-line"/>
          </div>
        </section>
        <section className="table-responsive"  style={{overflowY:'scroll', height: '81vh'}}>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Username</th>
                <th scope="col">Fullname</th>
                <th scope="col">Date Paid</th>
                <th scope="col">Referrals</th>
              </tr>
            </thead>
            <tbody>
                {
                    !bonusHistories ? (
                        <tr>
                            <td colSpan="9">Fetching history please wait...</td>
                        </tr>
                    ):null
                }
                { 
                // if there is no history
                // I added the undefined check when the backend is not returning anything
                    bonusHistories?.length === 0 ? (
                    <tr>
                        <td colSpan="4">No withdrawal history yet.</td>
                    </tr>
                    ): null
                }
                {
                    bonusHistories && [...bonusHistories].reverse().map((bonusHistory, index)=>{
                    return(
                        <tr key={bonusHistory.id}>
                        <th scope="row">{index + 1}</th>
                        <th scope="row">{bonusHistory.userName}</th>
                        <td className="text-capitalize">{bonusHistory.fullName}</td>
                        <td>{formatDate(bonusHistory.datePaid)}</td>
                        <td>{bonusHistory.referralCount}</td>
                        <td>
                            <button 
                              className="btn btn-sm btn-success text-capitalize">
                                Paid {" "}
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



export default MonthlyBonusHistory;