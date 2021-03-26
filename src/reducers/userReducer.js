import { 
    REGISTRATION_SUCCESSFUL,
    REGISTRATION_FAILED,
    SET_PROFILE,
    LOGIN_FAILED,
    LOGIN_SUCCESSFUL,
    LOG_OUT
 } from '../actions/types';

const initialState = {
    isLoggedIn: false,
    profile: null,
    error: null,
}


const authReducer = (state = initialState, action) =>{
    // Destructure the action
    const  { type, payload } = action;
    switch (type) {
        case REGISTRATION_SUCCESSFUL:
            return {
                ...state
            } 
        case REGISTRATION_FAILED:
            return {
                ...state,
                error: payload
            }
        case LOGIN_SUCCESSFUL:
            return {
                ...state,
                isLoggedIn: true,
            }
        case LOGIN_FAILED:
            return {
                ...state,
                error: payload
            }
        case SET_PROFILE:
            return {
                ...state,
                isLoggedIn: true,
                profile: payload
            }
        case LOG_OUT:
            return {
                isLoggedIn: false,
                profile: null,
                error: null
            }
    
        default:
            return state
    }
}


export default authReducer;