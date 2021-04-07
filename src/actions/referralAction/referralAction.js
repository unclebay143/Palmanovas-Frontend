import ReferralService from "../../services/referrals/referral.service";

// get user referral
export const getUserReferral = (userID) => dispatch =>{
    return ReferralService.getReferrals(userID)
}


// admin get all user referral 
export const getAllUserReferral = () => dispatch =>{
    return ReferralService.getAllReferral()
}