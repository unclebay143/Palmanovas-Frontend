import { TOGGLE_SIDEBAR } from "../actions/types";

const initialState = {
    isReduxWorking: true,
    isSideBarOpen: true,
}


const layoutReducer = (state=initialState, action) =>{
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return {
                ...state,
                isSideBarOpen: !state.isSideBarOpen
            }
        default:
            return state
    }
}

export default layoutReducer;