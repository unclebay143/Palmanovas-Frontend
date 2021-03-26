import PaymentService from "../../services/payments/payment.service";


// let user declare payment for a package
export const tryDeclarePayment = (payeeName, userID) => dispatch =>{
    const agentName = {
        agentName: payeeName
      }
    return PaymentService.declarePayment(agentName, userID)
}


// get lists of all payments
export const getDeclaredPaymentList = () => dispatch =>{
    return PaymentService.fetchDeclaredPaymentList()
}


// Confirm user payment
export const confirmPackagePayment = (packageID, requestID) => dispatch =>{
    const payload = {
        packageID: packageID,
        id: requestID
    }
    console.log(payload)
    return PaymentService.confirmPackagePayment(payload)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
}