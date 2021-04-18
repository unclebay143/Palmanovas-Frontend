import axios from "axios";
import { URL_FOR_LOAD_USER } from "../root-endpoints"



const getUser = (id) =>{
    return axios.get(URL_FOR_LOAD_USER + id)
}



const TestService = {
    getUser,
}

export default TestService;