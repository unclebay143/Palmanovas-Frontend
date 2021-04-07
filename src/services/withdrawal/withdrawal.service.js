import axios from 'axios';
import { BASE_URL, 
  FOR_REQUEST_WITHDRAWAL, 
  FOR_VIEW_ALL_USERS_WITHDRAWAL_REQUEST, 
  FOR_VIEW_WITHDRAWAL_METHOD_DETAILS, 
  FOR_WITHDRAWAL_COMPLETED,
  FOR_VIEW_USER_ROI_WITHDRAWAL_HISTORY, 
  FOR_VIEW_ALL_USERS_ROI_WITHDRAWAL_HISTORY
} from '../root-endpoints';

// push user to waiting list of users with matured ROI
const requestWithdrawal = (userID, withdrawalMethod) =>{
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
    return axios.post(BASE_URL + FOR_REQUEST_WITHDRAWAL + userID, withdrawalMethod, configWithToken)
}


const getAllWithdrawalRequest = () =>{
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
  return axios.get(BASE_URL + FOR_VIEW_ALL_USERS_WITHDRAWAL_REQUEST, configWithToken)
}


const confirmWithdrawal = (userID, id) =>{
  const payLoad = {
    userID,
    id
  }
  console.log(payLoad);
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
  return axios.put(BASE_URL + FOR_WITHDRAWAL_COMPLETED, payLoad, configWithToken)
}

// get the user withdrawal option detail, bank/crypto
const getWithdrawalMethodDetails = (withdrawalMethod, userID) =>{
  const payLoad = {
    withdrawalMethod,
    userID
  }
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
  return axios.post(BASE_URL + FOR_VIEW_WITHDRAWAL_METHOD_DETAILS, payLoad, configWithToken)
}

// get the user ROI history
const getUserROIHistory = (userID) =>{
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
  return axios.get(BASE_URL + FOR_VIEW_USER_ROI_WITHDRAWAL_HISTORY + userID, configWithToken)
}

// get the user ROI history
const getAllUsersROIHistories = () =>{
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
  return axios.get(BASE_URL + FOR_VIEW_ALL_USERS_ROI_WITHDRAWAL_HISTORY, configWithToken)
}

const WithDrawalService = {
    requestWithdrawal,
    getAllWithdrawalRequest,
    confirmWithdrawal,
    getWithdrawalMethodDetails,
    getUserROIHistory,
    getAllUsersROIHistories
}

export default WithDrawalService;