// Api endpoint
import { AUTH_API } from "./root-endpoints";

import axios from 'axios'

// send user login details to the backend
const tryLogin = ( email, password ) =>{
    return axios.post(AUTH_API + 'api/users/2',{email, password});
}

// send user details for registration

const tryRegister = (values) =>{
    // return axios.post()
}

const UserService = {
    tryRegister,
    tryLogin
};

export default UserService;