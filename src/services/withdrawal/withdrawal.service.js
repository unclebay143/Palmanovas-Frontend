import axios from 'axios';
import { FOR_REQUEST_WITHDRAWAL } from '../root-endpoints';



// push user to waiting list of users with matured ROI
const requestWithdrawal = () =>{
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
    return axios.post(FOR_REQUEST_WITHDRAWAL + userID, configWithToken)
}








const WithDrawalService = {
    requestWithdrawal,
}

export default WithDrawalService;