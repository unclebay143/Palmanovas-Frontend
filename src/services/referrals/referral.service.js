import axios from "axios";
import { BASE_URL, FOR_CURRENT_USER_REFERRAL_BONUS_HISTORY, FOR_REFERRAL_LIST, FOR_VIEW_USER_REFERRAL_LIST } from "../root-endpoints";


const getReferrals = async (userID) =>{
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
    const response = await axios.get(BASE_URL + FOR_REFERRAL_LIST + userID, configWithToken)
    return response;
}

const getCurrentUserRefferalBonusHistory = async(userID) =>{
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
  const response = await axios.get(BASE_URL + FOR_CURRENT_USER_REFERRAL_BONUS_HISTORY + userID, configWithToken)
  return response;
}

const getAllReferral = async () =>{
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
  const response = await axios.get(BASE_URL + FOR_VIEW_USER_REFERRAL_LIST, configWithToken)
  return response;
}


const ReferralService = {
    getReferrals,
    getAllReferral,
    getCurrentUserRefferalBonusHistory
}

export default ReferralService;