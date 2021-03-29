import WithDrawalService from '../../services/withdrawal/withdrawal.service'



export const tryRequestForwithdrawal = (userID) =>{
    return WithDrawalService.requestWithdrawal(userID)
}