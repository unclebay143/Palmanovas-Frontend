import { TOGGLE_SIDEBAR } from "./types"

// Open new employee form
const toggleSidebar = () => (dispatch) =>{
    dispatch({
        type: TOGGLE_SIDEBAR
    })
}


export {
    toggleSidebar
}