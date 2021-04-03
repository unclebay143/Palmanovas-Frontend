
// BASE URL
export const BASE_URL = 'https://palmanovas.herokuapp.com/api/';

// Authentication related endpoints
export const FOR_SIGNUP = 'users/signUp';
export const FOR_LOGIN = 'users/login';


// Users related enpoint
export const FOR_GET_USER_PROFILE = 'users/viewProfile';
export const FOR_UPDATE_PROFILE = 'users/editProfile/';
export const FOR_UPDATE_PASSWORD = 'users/changePassword/';
export const FOR_GET_USER_BANK_DETAILS = 'users/viewBankDetails/';
export const FOR_UPDATE_BANK_DETAILS = 'users/uploadBankDetails/';
export const FOR_GET_USER_CRYPTO_WALLET = 'users/viewCryptoDetails/'
export const FOR_UPDATE_CRYPTO_WALLET = 'users/uploadCryptoDetails/';


// Payments related endpoints
export const FOR_DECLARE_PAYMENT = 'payment/declarePayment/';
export const FOR_VIEW_DECLARED_PAYMENTS = 'payment/viewAllPayment';
export const FOR_PAYMENT_CONFIRMATION = 'payment/confirmPayment';

export const FOR_VIEW_USER_APPROVED_PAYMENTS = 'payment/viewApprovedPayment/';
export const FOR_VIEW_ALL_USERS_APPROVED_PAYMENTS = 'payment/viewAllApprovedPayment';
export const FOR_REQUEST_WITHDRAWAL = 'payment/requestWithdrawal/';