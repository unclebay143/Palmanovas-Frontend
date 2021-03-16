import UserService from "../services/user.service"
import { registrationCompletedLogger, registrationFailLogger, somethingWentWrongLogger, userIsAuthenticatedLogger } from "../toaster"


// Action function that handles login

export const handleLogin = ({email, password}, action) => dispatch =>{
    console.log(email, password)
    return UserService.tryLogin(email, password)
    .then((response)=>{ // handle response
        console.log(response)
        userIsAuthenticatedLogger()
        action.setIsSubmitting(false)
        
    })
    .catch((error)=>{ // handle error
        console.log(error)
        somethingWentWrongLogger()
        action.setSubmitting(false)
    })
}


// Action function that handles registration

export const handleRegistration = (values, action) => dispatch =>{
    console.table(values)
    return UserService.tryRegister(values)
    .then((response)=>{
        console.log(response)
        registrationCompletedLogger()
        action.setSubmitting(false)
    })
    .catch((error)=>{
        console.log(error)
        registrationFailLogger()
        action.setSubmitting(false)
    })
}