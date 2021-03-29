import UserService from "../services/user.service"
import { 
    bankDetailsUpdatedSuccessfullyLogger,
    bankDetailsUpdateFailLogger,
    cryptoDetailsUpdatedSuccessfullyLogger,
    cryptoDetailsUpdateFailLogger,
    logOutSuccessLogger,
    passwordUpdateCompletedLogger,
    passwordUpdateFailLogger,
    profileUpdateCompletedLogger,
    profileUpdateFailLogger,
    registrationCompletedLogger, 
    registrationFailLogger, 
    somethingWentWrongLogger, 
    userIsAuthenticatedLogger,
    userNameOrEmailNotFoundLogger
} from "../toaster"
import { LOGIN_SUCCESSFUL, LOG_OUT, SET_BANK_DETAILS, SET_CRYPTO_DETAILS, SET_ERROR, SET_PROFILE } from "./types"

// Action function that handles registration

export const handleRegistration = (values, action) => dispatch =>{
    return UserService.tryRegister(values)
    .then((response)=>{
        registrationCompletedLogger()
        action.setSubmitting(false)
    })
    .catch((error)=>{
        registrationFailLogger()
        action.setSubmitting(false)
    })
}


// Action function that handles login

export const handleLogin = (values, action) => dispatch =>{
    return UserService.tryLogin(values)
    .then((response)=>{ // handle response
        const _token = response.data.data.accessToken;
        localStorage.setItem('token', _token);
        if(localStorage.token){
            dispatch({
                type: LOGIN_SUCCESSFUL
            })
            loadUserProfile()
            userIsAuthenticatedLogger()
            action.setSubmitting(false)
        }
        if(!localStorage.token){

            somethingWentWrongLogger()
        }
        
    })
    .catch((err)=>{ // handle error

        if(err){ // catch all errors in this block
            userNameOrEmailNotFoundLogger()
        }
        somethingWentWrongLogger()
        action.setSubmitting(false)
    })
}


// Function that loads user details from the server

export const loadUserProfile = () => dispatch =>{
    return UserService.fetchUserProfile()
    .then((response)=>{
        dispatch({
            type: SET_PROFILE,
            payload: response.data.data[0]
        })
    })
    .catch((error)=>{
        console.log(error)
    })
}

// function that update the user profile
export const updateUserProfile = (values, userID, action) => dispatch =>{
    return UserService.updateUserProfile(values, userID)
    .then((response)=>{
        profileUpdateCompletedLogger()
        action.setSubmitting(false)
    })
    .catch((error)=>{
        profileUpdateFailLogger()
        action.setSubmitting(false)
    })
}

// function that update the user password
export const updateUserPassword = (values, userID, action) => dispatch =>{
    return UserService.updateUserPassword(values, userID)
    .then((response)=>{
        passwordUpdateCompletedLogger()
        action.setSubmitting(false)
    })
    .catch((error)=>{
        passwordUpdateFailLogger()
        action.setSubmitting(false)
    })
}

// function to get the user bank details
export const getUserBankDetails = (userID) => dispatch =>{
    return UserService.fetchUserBankDetails(userID)
    .then((response)=>{
        dispatch({
            type: SET_BANK_DETAILS,
            payload: response.data.data[0]
        })
    })
    .catch((error)=>{
        dispatch({
            type: SET_ERROR,
            payload: error
        })
    })
}

// function that update the user bank details
export const updateUserBankDetails = (values, userID, action) => dispatch =>{
    return UserService.updateUserBankDetails(values, userID)
    .then((response)=>{
        bankDetailsUpdatedSuccessfullyLogger()
        action.setSubmitting(false)
    })
    .catch((error)=>{
        bankDetailsUpdateFailLogger()
        action.setSubmitting(false)
    })
}

// function to get the user bank details
export const getUserCryptoDetails = (userID) => dispatch =>{
    return UserService.fetchUserCryptoDetails(userID)
    .then((response)=>{
        dispatch({
            type: SET_CRYPTO_DETAILS,
            payload: response.data.data[0]
        })
    })
    .catch((error)=>{
        dispatch({
            type: SET_ERROR,
            payload: error
        })
    })
}

// function that update the user crypto details
export const updateUserCryptoWallet = (values, userID, action) => dispatch =>{
    return UserService.updateUserCryptoWallet(values, userID)
    .then((response)=>{
        cryptoDetailsUpdatedSuccessfullyLogger()
        action.setSubmitting(false)
    })
    .catch((error)=>{
        cryptoDetailsUpdateFailLogger()
        action.setSubmitting(false)
    })
}



export const tryLogout = () => dispatch =>{
    localStorage.removeItem('token');
    logOutSuccessLogger()
    setTimeout(() => {
        dispatch({
            type: LOG_OUT
        })
    }, 3000);
}