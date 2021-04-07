import WithDrawalService from '../../services/withdrawal/withdrawal.service';

// request withdrawal for users with matured ROI
export const tryRequestForwithdrawal = (userID, withdrawalMethod) => async dispatch =>{
    const response = await WithDrawalService.requestWithdrawal(userID, withdrawalMethod);
    return response;
}

// admin to see all withdrawal requests from the users with matured ROI
export const getAllWithdrawalRequest = () => async dispatch =>{
    const response = await WithDrawalService.getAllWithdrawalRequest();
    console.log(response);
    return response;
}


// view user withdrawal method details
export const viewWithdrawalDetails = (withdrawalMethod, userID) => async dispatch =>{
    const response = await WithDrawalService.getWithdrawalMethodDetails(withdrawalMethod, userID);
    return response
}

// admin to confirm they have paid a user
export const tryConfirmWithdrawal = (userID, id) => dispatch =>{
    return WithDrawalService.confirmWithdrawal(userID, id);
}


// USER ROI WITHDRAWAL HISTORY
export const getUserROIHistory = (userID) => async dispatch =>{
    const response = await WithDrawalService.getUserROIHistory(userID);
    return response;
}

// All USERs ROI WITHDRAWAL HISTORY FOR ADMIN
export const getAllUsersROIHistories = () => async dispatch =>{
    const response = await WithDrawalService.getAllUsersROIHistories();
    return response;
}
