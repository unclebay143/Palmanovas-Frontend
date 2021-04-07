import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserReferral } from '../../../actions/referralAction/referralAction';

const Referral = () => {
    const dispatch = useDispatch();
    const { profile } = useSelector(state => state.user);
    const [userReferral, setUserReferral] = useState(null)

    const { userID } = profile || {}
    useEffect(() => {
        profile && dispatch(getUserReferral(userID))
        .then((res)=>{
            setUserReferral(res.data.data)
        })
        .catch((err)=>console.log(err))
    }, [dispatch, userID, profile])
    return (
        <>
            <section className="section-heading mt-5">
                <div className="user-information">
                    <div className="referral-list">
                        <section className="section-heading mt-5">
                            <div className="clearfix">
                                <h3>Referrals List</h3>
                                <span  style={{fontSize: '16px'}}>
                                    <h3  className="my-3 lead">Refer & Earn</h3>
                                        Invite your friends and family to join Palmanovas and earn commission. Your Referral ID:
                                    <span className="text-success text-uppercase"> {profile?.userName}</span>
                                </span>
                            </div>
                                <hr className="hr-line"/>
                        </section>
                        <section className="table-responsive" style={{overflowY:'scroll', height: '81vh'}}>
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">S/N</th>
                                        <th scope="col">Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        !userReferral ? (
                                            <tr>
                                                <td>Fetching Referrals please wait...</td>
                                            </tr>
                                        ):null
                                    }
                                    {
                                        
                                        userReferral?.length === 0 ? (
                                            <tr>
                                                <td  colSpan="4">You do not have Referrals yet.</td>
                                            </tr>
                                        ):null
                                    }
                                    {
                                        userReferral?.map((referral, index)=>{
                                            return(
                                            <tr>
                                                <th scope="row">{index+1}</th>
                                                <td>{referral}</td>
                                            </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </section>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Referral