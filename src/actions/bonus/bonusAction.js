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