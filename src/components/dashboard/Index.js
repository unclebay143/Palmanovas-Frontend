// React
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector,  useDispatch } from 'react-redux';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandSparkles } from "@fortawesome/free-solid-svg-icons";

// Layout
import Cards from './Layout/Cards';

// Skeleton Loader
import Skeleton from 'react-loading-skeleton';
import { generateMatureDate } from '../../_helper/generateMatureDate';
import SkeletonLoader from '../../util/SkeletonLoader';
import { getPackageName, getPackagePrice } from '../../_helper/getPackageROIDay';
import { getUserReferral } from '../../actions/referralAction/referralAction';


const Index = () => {
    const dispatch = useDispatch();
    // get user from redux
    const { profile } = useSelector(state => state.user);
    const { listOfReferrals } = useSelector(state => state.referrals);
    // destructure params from profile
    const { userName, packageID, startDate, endDate, ROIstatus } = profile || {};
    // remaining days state
    const [remainingDays, setRemainingDays] = useState(null)
    // DELETE THIS
    const [isIROIMature, setIsIROIMature] = useState(false)
    // ROI state
    const [ROIStatusState, setROIStatusState] = useState(null);
    const [hasInvestment, setHasInvestment] = useState(false);
    const [isPaymentApproved, setIsPaymentApproved] = useState(false);
    const [userRank, setUserRank] = useState("Starter");
    const { userID } = profile || {}

    useEffect(() => {
        profile && dispatch(getUserReferral(userID))
    }, [dispatch, userID, profile])


    // Get user profile from the user state
    useEffect(() => {
        // set the USER roi status
        switch (ROIstatus) {
            case "growing":
                setHasInvestment(true)
                return setROIStatusState("growing")
            case "mature":
                setHasInvestment(true)
                return setROIStatusState("mature")
            default:
                break;
        }
       
    }, [ROIstatus])

    useEffect(() => {
        if(hasInvestment)setUserRank("Palma")
        if(getPackageName(packageID) === 'Premium' && listOfReferrals?.length > 15)setUserRank("Tutor")
        if(getPackageName(packageID) === 'Silver' && listOfReferrals?.length > 25)setUserRank("V.P")
    }, [hasInvestment, listOfReferrals?.length])
    console.log(userRank);
    useEffect(() => {
        setRemainingDays(generateMatureDate(startDate, endDate))
    }, [startDate, endDate])
    return (
        <>
        {
            profile && profile ? 
            <div className="container dashboard-Index"> 
                <h5 className="text-custom-green" style={{lineHeight: '2'}}>
                    <FontAwesomeIcon icon={ faHandSparkles } className="mr-2 text-custom-green"/>
                    Welcome back, {userName && userName ? <span className="p-0"> { userName } </span> : <Skeleton color="#EEE" highlightColor="#CCC" count={1} width={100} /> }
                    <span className="float-lg-right h3 mr-3 d-block mt-3 mt-lg-0">Rank: { userRank }</span>
                </h5>
                {/* {true === false ? "matured" : ("growing till "+ 1222)} */}
                {
                    hasInvestment && 
                        <section className="clearfix">
                            <div className={` ${ isPaymentApproved ? "" : "float-lg-left"} mt-4`}>
                                <p className="text-lg-right custom-p text-custom-green">
                                    Current Package: {getPackageName(packageID)} - #{getPackagePrice(packageID)} 
                                    {
                                        isIROIMature ? (<span className=""> ( Matured )</span>) : ''
                                    }
                                </p>
                                {
                                    isPaymentApproved ?
                                    (
                                        
                                        <>
                                            <p to="/dashboard/withdraw" className="alert alert-success">Payment Approved</p>
                                        </>
                                    )
                                    
                                : 
                                    (
                                        
                                        <>

                                            { 
                                            // ternary conditional rendering based on ROI maturity
                                                isIROIMature ? (

                                                    <>
                                                
                                                        <Link 
                                                            to={{
                                                                pathname: "/dashboard/withdraw",
                                                                state: {fromButton: true}
                                                            }}
                                                            className="btn btn-sm btn-warning text-white"
                                                        >
                                                            Request Withdrawal
                                                        </Link>
                                                    </>

                                                ):(
                                                    // <div className="progress" onClick={(()=>setIsIROIMature(true))}>
                                                    <div className="progress">
                                                        {
                                                            remainingDays > 0 ?
                                                            <div 
                                                                className="progress-bar progress-bar-striped bg-danger active" 
                                                                role="progressbar" 
                                                                aria-valuenow={15} 
                                                                aria-valuemin={0} 
                                                                aria-valuemax={15} 
                                                                style={{ width: '15%' }}>
                                                                10%
                                                            </div>
                                                            : ""
                                                        }
                                                        {
                                                            remainingDays < 5 ?
                                                            <div 
                                                                className="progress-bar progress-bar-striped bg-warning active" 
                                                                role="progressbar" 
                                                                aria-valuenow={15} 
                                                                aria-valuemin={0} 
                                                                aria-valuemax={15} 
                                                                style={{ width: '25%' }}>
                                                                25%
                                                            </div>
                                                            : ""
                                                        }
                                                        {
                                                            remainingDays < 10 ?
                                                            <div 
                                                                className="progress-bar progress-bar-striped bg-info active" 
                                                                role="progressbar" 
                                                                aria-valuenow={25} 
                                                                aria-valuemin={0} 
                                                                aria-valuemax={25} 
                                                                style={{ width: '25%' }}>
                                                                75%
                                                            </div>
                                                            : ""
                                                        }

                                                        {
                                                            remainingDays < 18 ?
                                                            <div 
                                                                className="progress-bar progress-bar-striped active" 
                                                                role="progressbar" 
                                                                aria-valuenow={60} 
                                                                aria-valuemin={0} 
                                                                aria-valuemax={60} 
                                                                style={{ width: '50%' }}>
                                                                100%
                                                            </div>
                                                            : ""
                                                        }

                                                    </div>
                                                )
                                            }
                                        </>

                                    )
                                }
                            </div>
                        </section>
                }

                {/* Menu items */}
                <section className="container">
                    <div className="row">
                        <Cards />
                    </div>
                </section>
               
            </div>
            : (
                <div>
                    <SkeletonLoader count={5}/>
                    <SkeletonLoader count={5}/>
                </div>
            )
        }
        </>
    )
}


export default Index;