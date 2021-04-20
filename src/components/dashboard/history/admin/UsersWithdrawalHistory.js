import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsersROIHistories } from '../../../../actions/withdrawalAction/withdrawalAction';
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
  const [userWithdrawalHistories, setWithdrawalHistory] = useState(null)
  const [filterByUsername, setFilterByUserName] = useState(null)
  // if there is a filter return the users details else return all usernames
  const filteredUsersByUsername = userWithdrawalHistories?.filter((referral)=> filterByUsername ? referral.userName.toLowerCase() === filterByUsername.toLowerCase() : referral.userName !== "")

  useEffect(() => {
    // if there is a profile get the user package approved history
    profile && dispatch(getAllUsersROIHistories(profile.userID))
    .then((res)=>{
      // store the response to the component level state
      setWithdrawalHistory(res.data.data)
    })
    .catch((error)=>console.log(error))
  }, [dispatch, profile])

  // handle filterByUsername change
  const handleChange = (event) =>{
    setFilterByUserName(event.target.value);
  }
  return (
    <>
      <div className="payment-history">
        <section className="section-heading mt-5">
          <div className="clearfix">
              <h3>Withdrawal History <span className="display-5"></span></h3>
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
                  !userWithdrawalHistories ? (
                      <tr>
                          <td colSpan="4">Fetching history please wait...</td>
                      </tr>
                  ):null
                }
                { 
                  // if there is no history
                  // I added the undefined check when the backend is not returning anything
                  userWithdrawalHistories?.length === 0 ? (
                      <tr>
                        <td colSpan="4">No withdrawal history yet.</td>
                      </tr>
                  ): null
                }
                {
                  // userWithdrawalHistories && [...userWithdrawalHistories].reverse().map((userHistory, index)=>{
                    filteredUsersByUsername && [...filteredUsersByUsername].reverse().map((userHistory, index)=>{
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



export default UsersWithdrawalHistory;