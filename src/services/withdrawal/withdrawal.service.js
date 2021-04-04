import axios from 'axios';
import { BASE_URL, FOR_REQUEST_WITHDRAWAL, FOR_VIEW_ALL_USERS_WITHDRAWAL_REQUEST } from '../root-endpoints';

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




const WithDrawalService = {
    requestWithdrawal,
    getAllWithdrawalRequest
}

export default WithDrawalService;