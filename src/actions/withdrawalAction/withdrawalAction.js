import WithDrawalService from '../../services/withdrawal/withdrawal.service';

// request withdrawal for users with matured ROI
export const tryRequestForwithdrawal = (userID, withdrawalMethod) => async dispatch =>{
    const response = await WithDrawalService.requestWithdrawal(userID, withdrawalMethod);
    return response;
}

// admin to see all withdrawal requests from the users with matured ROI
export const getAllWithdrawalRequest = () => async dispatch =>{
    const response = await WithDrawalService.getAllWithdrawalRequest();
    return response;
}


// export const tryConfirmWithdrawal = (userID)