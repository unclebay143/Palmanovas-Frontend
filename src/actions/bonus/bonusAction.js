import BonusService from "../../services/bonus/bonus.service";

export const bonusPaid = (referralCount, userID) => dispatch =>{
    return BonusService.bonusPaid(referralCount, userID)
}

// ADMIN VIEW ALL PAID BONUS HISTORY
export const getAllUsersBonusHistory = () => dispatch =>{
    return BonusService.getAllUsersBonusHistory()
}

// USER VIEW THEIR BONUS HISTORY
export const getUserBonusHistory = (userID) => dispatch =>{
    return BonusService.getUserBonusHistory(userID)
}

// USER REFERRAL BONUS PERCENTAGE
export const getUserReferralBonusPercentage = (userID) => async dispatch =>{
    // console.log("in action");
    // console.log(userID);
    const response = await BonusService.getUserReferralBonus(userID)
    console.log(response);
    return response
    // console.log(response);
    // return userID + "samuel"
    // .then((response)=>{
    //     console.log("action",response);
    //     return response
    // })
    // .catch((error)=>console.log(error))
}