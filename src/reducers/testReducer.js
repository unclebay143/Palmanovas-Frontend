import { LOAD_USER } from "../actions/types";


const initialState= {
    user: null
}


const testReducer = (state=initialState, action) =>{
    const { type, payload } = action;
    switch (type) {
        case LOAD_USER:
            return {
                ...state, 
                user: payload
            }



        default:
            return state;
    }
}


export default testReducer;