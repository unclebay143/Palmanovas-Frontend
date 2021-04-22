// Api endpoint
import { 
  BASE_URL, 
  FOR_SIGNUP, 
  FOR_LOGIN,
  FOR_GET_USER_PROFILE, 
  FOR_UPDATE_PROFILE,
  FOR_UPDATE_PASSWORD, 
  FOR_GET_USER_BANK_DETAILS,
  FOR_UPDATE_BANK_DETAILS, 
  FOR_UPDATE_CRYPTO_WALLET,
  FOR_GET_USER_CRYPTO_WALLET
} from "./root-endpoints";

// Axios
import axios from 'axios';

// // Authorization token
// var isTokenStored = localStorage.getItem('token');
// console.log(isTokenStored)


// const configWithToken ={
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//       'Access-Control-Allow-Origin': '*',
//       'mode': 'no-cors',
//       Authorization: `Bearer ${ isTokenStored && isTokenStored}`
//     }
//   }

const config ={
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'mode': 'no-cors',
      }
    }

// send user details for registration
const tryRegister = async(values) =>{
    const response = await axios.post(BASE_URL + FOR_SIGNUP, values, config)
    return response
}

// send user login details to the backend
const tryLogin = ( values ) =>{
    return axios.post(BASE_URL + FOR_LOGIN, values);
}


const fetchUserProfile = () =>{
    const isTokenStored = localStorage.getItem('token');
    const configWithToken ={
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'mode': 'no-cors',
          'Authorization': `Bearer ${ isTokenStored && isTokenStored}`
        }
      }
    return axios.get(BASE_URL + FOR_GET_USER_PROFILE, configWithToken)
}

// Update profile
const updateUserProfile = (values, userID) =>{
  const isTokenStored = localStorage.getItem('token');
    const configWithToken ={
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'mode': 'no-cors',
          'Authorization': `Bearer ${ isTokenStored && isTokenStored}`
        }
      }
  return axios.put(BASE_URL + FOR_UPDATE_PROFILE + userID, values, configWithToken)
}


//  Change password
const updateUserPassword = (values, userID) =>{
  const isTokenStored = localStorage.getItem('token');
    const configWithToken ={
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'mode': 'no-cors',
          'Authorization': `Bearer ${ isTokenStored && isTokenStored}`
        }
      }
  return axios.put(BASE_URL + FOR_UPDATE_PASSWORD + userID, values, configWithToken)
}

// Fetch user bank details
const fetchUserBankDetails = (userID) =>{
  const isTokenStored = localStorage.getItem('token');
    const configWithToken ={
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'mode': 'no-cors',
          'Authorization': `Bearer ${ isTokenStored && isTokenStored}`
        }
      }
  return axios.get(BASE_URL + FOR_GET_USER_BANK_DETAILS + userID, configWithToken)
}

//  Update bank details
const updateUserBankDetails = (values, userID) =>{
  const isTokenStored = localStorage.getItem('token');
    const configWithToken ={
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'mode': 'no-cors',
          'Authorization': `Bearer ${ isTokenStored && isTokenStored}`
        }
      }
  return axios.post(BASE_URL + FOR_UPDATE_BANK_DETAILS + userID, values, configWithToken)
}



// Fetch user bank details
const fetchUserCryptoDetails = (userID) =>{
  const isTokenStored = localStorage.getItem('token');
    const configWithToken ={
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'mode': 'no-cors',
          'Authorization': `Bearer ${ isTokenStored && isTokenStored}`
        }
      }
  return axios.get(BASE_URL + FOR_GET_USER_CRYPTO_WALLET + userID, configWithToken)
}

//  Update bank details
const updateUserCryptoWallet = (values, userID) =>{
  const isTokenStored = localStorage.getItem('token');
    const configWithToken ={
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'mode': 'no-cors',
          'Authorization': `Bearer ${ isTokenStored && isTokenStored}`
        }
      }
  return axios.post(BASE_URL + FOR_UPDATE_CRYPTO_WALLET + userID, values, configWithToken)
}





const UserService = {
    tryRegister,
    tryLogin,
    fetchUserProfile,
    updateUserProfile,
    updateUserPassword,
    updateUserBankDetails,
    updateUserCryptoWallet,
    fetchUserBankDetails,
    fetchUserCryptoDetails
};

export default UserService;

