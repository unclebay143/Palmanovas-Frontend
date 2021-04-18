import ReferralService from "../../services/referrals/referral.service";
import { SET_REFERRALS } from "./../types";

// get user referral
export const getUserReferral = (userID) => dispatch =>{
    return ReferralService.getReferrals(userID)
    .then((res)=>{
        dispatch({
            type: SET_REFERRALS,
            payload: res.data.data
        })
        return res // to the ui
    })
    .catch((err)=>{
        console.log("err", err);
    })
}

export const getCurrentUserRefferalBonusHistory = (userID) => dispatch =>{
    return ReferralService.getCurrentUserRefferalBonusHistory(userID)
}


// admin get all user referral 
export const getAllUserReferral = () => dispatch =>{
    return ReferralService.getAllReferral()
}

