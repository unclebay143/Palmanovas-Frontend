import { SET_REFERRALS } from "../actions/types";

const initialState = {
    listOfReferrals: null,
}



const userReferralsReducer = (state = initialState, action) =>{
    // Destructure the action
    const  { type, payload } = action;
    switch (type) {
        case SET_REFERRALS:
            return{
                ...state,
                listOfReferrals: payload
            }
        default:
            return state
    }
}



export default userReferralsReducer;