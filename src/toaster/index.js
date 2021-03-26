import { toast } from 'react-toastify'; 


// Common
export const netWorkError  =  () => toast.warning('Network Error')
export const sessionExpired = () =>  toast.warning('Session Expired')
export const somethingWentWrongLogger = () =>  toast.warning('Something went wrong, Please try again')



//  Login Toast
export const invalidDetailsLogger = () => toast.warning('Invalid Login details');
export const userNameOrEmailNotFoundLogger = () => toast.info('Username or Email does not Exist');
export const userIsAuthenticatedLogger = () => toast.success('Logging in');
export const welcomeBackLogger = () => toast.info('Welcome Back');


// Registration Toast
export const registrationFailLogger = () => toast.warning('Registration Failed');
export const registrationCompletedLogger = () => toast.info('Registration Successful');
export const emailAlreadyExistLogger = () => toast.warning('Email Already Exist')

// Logout Toast
export const logOutSuccessLogger = () => toast.success('Logout Successful');

// Users Setting Toasts

//Profile
export const profileUpdateCompletedLogger = () => toast.info('Profile Updated Successfully');
export const profileUpdateFailLogger = () => toast.warning('Update Failed, Please try again');

// Password
export const passwordUpdateCompletedLogger = () => toast.info('Password Updated Successfully');
export const passwordUpdateFailLogger = () => toast.warning('Password Update Failed, Please try again');


// Bank 
export const bankDetailsUpdatedSuccessfullyLogger = () => toast.info('Bank details updated successfully');
export const bankDetailsUpdateFailLogger = () => toast.warning('Bank details update failed');


// Crypto
export const cryptoDetailsUpdatedSuccessfullyLogger = () => toast.info('Crypto details updated successfully');
export const cryptoDetailsUpdateFailLogger = () => toast.warning('Crypto details update failed');

