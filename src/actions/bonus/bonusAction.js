import BonusService from "../../services/bonus/bonus.service";

export const bonusPaidForActiveReferrals = (referralCount, userID) => dispatch =>{
    return BonusService.bonusPaidForActiveReferrals(referralCount, userID)
}

// ADMIN VIEW ALL PAID BONUS HISTORY
export const getAllUsersBonusHistory = () => dispatch =>{
    return BonusService.getAllUsersBonusHistory()
}

// USER VIEW THEIR BONUS HISTORY MONTHLY
export const getUserBonusHistory = (userID) => dispatch =>{
    return BonusService.getUserBonusHistory(userID)
}
// USER VIEW THEIR BONUS HISTORY REERRAL BONUS H
export const getAllUsersReferralBonusHistory = (userID) => dispatch =>{
    return BonusService.getAllUsersReferralBonusHistory(userID)
}

// USER REFERRAL BONUS PERCENTAGE
export const getUserReferralBonusPercentage = (userID) => async dispatch =>{
    const response = await BonusService.getUserReferralBonus(userID)
    return response
}

// function to pay users monthly salaries
export const bonusPaidForCertainReferrals = (referralsSize, userID) => dispatch =>{
    return BonusService.bonusPaidForCertainReferrals(referralsSize, userID)
}