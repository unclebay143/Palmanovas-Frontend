import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserReferral } from '../../../actions/referralAction/referralAction';

const Referral = () => {
    const { profile } = useSelector(state => state.user);
    const { listOfReferrals } = useSelector(state => state.referrals);
    const dispatch = useDispatch();
    console.log(listOfReferrals);
    
    useEffect(() => {
        if(!listOfReferrals){
            profile && dispatch(getUserReferral(profile.userID))
        }
    }, [dispatch, profile?.userID, profile])


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
                                        !listOfReferrals ? (
                                            <tr>
                                                <td>Fetching Referrals please wait...</td>
                                            </tr>
                                        ):null
                                    }
                                    {
                                        
                                        listOfReferrals?.length === 0 ? (
                                            <tr>
                                                <td  colSpan="4">You do not have Referrals yet.</td>
                                            </tr>
                                        ):null
                                    }
                                    {
                                        listOfReferrals?.map((referral, index)=>{
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