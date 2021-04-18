// ui
// set type
// create reducer
// create action
// create service

import TestService from "../../services/test/test.service"
import { LOAD_USER } from "../types"


export const loadUser = (id) => dispatch =>{
    return TestService.getUser(id)
    .then((response)=>{
        dispatch({
            type: LOAD_USER,
            payload: response.data
        })
        return response
    })
    .catch((error)=>console.log(error))
}