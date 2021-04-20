import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUserReferral } from '../../actions/referralAction/referralAction';
import './modal.css'


// this component shows the list of all registered users
const UsersList = () => {
    const dispatch = useDispatch();
    const { profile } = useSelector(state => state.user);
    const [usersReferral, setUsersReferral] = useState(null)
    const [filterByUsername, setFilterByUserName] = useState(null)
    // if there is a filter return the users details else return all usernames
    const filteredUsersByUsername = usersReferral?.filter((referral)=> filterByUsername ? referral.userName.toLowerCase() === filterByUsername.toLowerCase() : referral.userName !== "")
  
    useEffect(() => {
        profile && dispatch(getAllUserReferral())
        .then((res)=>{
            setUsersReferral(res.data.data)
        })
        .catch((err)=>console.log(err))
    }, [dispatch, profile])


    // handle filterByUsername change
    const handleChange = (event) =>{
        setFilterByUserName(event.target.value);
    }

    return (
        <>
            <div className="users-referral-list">
                <section className="section-heading mt-5">
                    <div className="clearfix">
                        <h3>Registered Users</h3>
                        <hr className="hr-line"/>
                    </div>
                </section>
                <section>
                <label className="text-capitalize">Search by usernames</label>
                <input 
                    className="form-control form-control-sm" 
                    placeholder="Enter Username"
                    type="text" onChange={handleChange}></input>
                </section>
                <section className="table-responsive" style={{overflowY:'scroll', height: '81vh'}}>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">S/N</th>
                                <th scope="col">Username</th>
                                <th scope="col">No of referrals</th>
                                <th scope="col">Active Bonus</th>
                            {/* <td>{dispatch(getUserReferralBonusPercentage(514))}l</td> */}
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                !filteredUsersByUsername ? (
                                    <tr>
                                        <td  colSpan="4">Fetching users please wait...</td>
                                    </tr>
                                ):null
                            }
                            {
                                
                                filteredUsersByUsername?.length === 0 ? (
                                    <tr>
                                        <td  colSpan="4">No users yet.</td>
                                    </tr>
                                ):null
                            }
                            {
                               filteredUsersByUsername?.map(({userName, referralList, userID, bonus}, index)=>{
                                    return(
                                    <tr key={index}>
                                        <th scope="row">{index+1}</th>
                                        <td>{userName}</td>
                                        <td>{referralList.length}</td>
                                        <td>#{bonus}</td>
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

export default UsersList;