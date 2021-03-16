import { 
    REGISTRATION_SUCCESSFUL,
    REGISTRATION_FAILED,
    SET_PROFILE,
    LOGIN_FAILED,
    LOGIN_SUCCESSFUL
 } from '../actions/types';

const initialState = {
    isLoggedIn: false,
    profile: null,
    error: null,
}


const authReducer = (state = initialState, action) =>{
    switch (action) {
        case REGISTRATION_SUCCESSFUL:
            return {
                ...state
            } 
        case REGISTRATION_FAILED:
            return {
                ...state,
                error: action.payload
            }
        case LOGIN_SUCCESSFUL:
            return {
                isLoggedIn: true
            }
        case LOGIN_FAILED:
            return {
                ...state,
                error: action.payload
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.payload
            }
    
        default:
            return state
    }
}


export default authReducer;