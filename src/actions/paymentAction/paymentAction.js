import PaymentService from "../../services/payments/payment.service";


// let user declare payment for a package BY USERS
export const tryDeclarePayment = (payeeName, userID) => dispatch =>{
    const agentName = {
        agentName: payeeName
      }
    return PaymentService.declarePayment(agentName, userID)
}


// get lists of all payments BY ADMIN
export const getDeclaredPaymentList = () => dispatch =>{
    return PaymentService.fetchDeclaredPaymentList()
}


// Confirm user payment BY ADMIN
export const confirmPackagePayment = (packageID, requestID) => dispatch =>{
    const payload = {
        packageID: packageID,
        id: requestID
    }
    return PaymentService.confirmPackagePayment(payload)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
}


// get lists of approved payments for the user

export const getUserApprovedPayments = (userID) => dispatch=>{
    return PaymentService.fetchUserApprovedPaymentLists(userID)
}

// get lists of approved payments for the user
export const getUsersApprovedPayments = () => dispatch =>{
    return PaymentService.fetchAllUsersApprovedPayments()
}