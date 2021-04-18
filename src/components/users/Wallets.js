import React from 'react';
import { useSelector } from 'react-redux';
import { formatDate } from '../../_helper/dateFormatter';
import { getPackageName, getPackagePrice } from '../../_helper/getPackageROIDay';

export const Wallets = () => {
    const user = useSelector(state => state.user);
    const { profile } = user;
    const { packageID, ROIstatus, endDate, startDate, status } = profile || {};

    if(profile === null){
        return <span className="data-lead">Loading... please wait</span>
    }

    const WalletDetails = () =>(
        ROIstatus === "" ?(
            <>
                <p>
                    <span className="data-lead">You have not purchased a package yet</span>
                </p>
            </> 
        ):(
            <>
                <p>
                    <span className="data-lead">Package name:</span> { getPackageName(packageID)}
                </p>
                <p>
                    <span className="data-lead">Amount:</span> { getPackagePrice(packageID) }
                </p>
                <p>
                    <span className="data-lead">ROI Start Date:</span> { formatDate(startDate) }
                </p>
                <p>
                    <span className="data-lead">ROI Mature Date:</span> { formatDate(endDate) }
                </p>
            </>  
        )
    )
    return (
        <>
             <div className="row user-profile">
                <section className="col-md-6 col-lg-6 col-12 profile-heading">
                    <div className="clearfix">
                        <h3>Current Package Wallet</h3>
                        <hr className="hr-line"/>
                    </div>
                    <div className="wallet-information mb-4">
                        <WalletDetails />
                    </div>
                </section>
            </div>
        </>
    )
}
