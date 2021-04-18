
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
export const FOR_GET_USER_CRYPTO_WALLET = 'users/viewCryptoDetails/';
export const FOR_UPDATE_CRYPTO_WALLET = 'users/uploadCryptoDetails/';


// Payments related endpoints
// Users
export const FOR_DECLARE_PAYMENT = 'payment/declarePayment/';
// export const FOR_VIEW_USER_PACKAGE_HISTORY = 'payment/viewApprovedPayment/';
export const FOR_VIEW_USER_PACKAGE_HISTORY = 'payment/getPackageHistory/';

// Admin
export const FOR_VIEW_DECLARED_PAYMENTS = 'payment/viewAllPayment';
export const FOR_PAYMENT_CONFIRMATION = 'payment/confirmPayment';
export const FOR_VIEW_ALL_APPROVED_DECLARED_PAYMENTS = 'payment/viewAllApprovedPayment';



// Withdrawal related endpoint

// Users
export const FOR_REQUEST_WITHDRAWAL = 'payment/requestWithdrawal/';
export const FOR_VIEW_ALL_USERS_WITHDRAWAL_REQUEST = 'payment/viewAllWithdrawalRequest';
export const FOR_ROI_WITHDRAWAL_CONFIRMATION = 'payment/confirmWithdrawal';
export const FOR_WITHDRAWAL_COMPLETED = 'payment/withdrawalCompleted';
export const FOR_VIEW_WITHDRAWAL_METHOD_DETAILS = 'payment/getPaymentDetails';
export const FOR_VIEW_USER_ROI_WITHDRAWAL_HISTORY = 'payment/roiWithdrawalHistory/';
export const FOR_VIEW_ALL_USERS_ROI_WITHDRAWAL_HISTORY = 'payment/allRoiWithdrawalHistory/';

// USERS REFERRAL
export const FOR_REFERRAL_LIST = 'payment/getReferral/';
export const FOR_VIEW_USER_REFERRAL_LIST = 'payment/getAllReferral/';
export const FOR_CURRENT_USER_REFERRAL_BONUS_HISTORY = 'payment/viewMyReferralBonusHistory/';

// BONUS
export const FOR_ACTIVE_BONUS_PAID = 'payment/payReferralBonus/'
export const FOR_GET_USER_BONUS_HISTORY = 'payment/viewUserBonusHistory/';
//admin
export const FOR_GET_USERS_BONUS_HISTORY = 'payment/viewAllBonusHistory/';
export const GET_REFERRAL_BONUS = 'payment/getReferralBonus/'
// monthly salary
export const FOR_BONUS_PAID = 'payment/bonusPaid/';
// RESOLUTION

export const FOR_POST_RESOLUTION = "resolution/upload";



// test
export const URL_FOR_LOAD_USER = 'https://jsonplaceholder.typicode.com/todos/'