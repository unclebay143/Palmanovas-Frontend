import axios from "axios"
import { BASE_URL, FOR_BONUS_PAID, FOR_GET_USERS_BONUS_HISTORY, FOR_GET_USER_BONUS_HISTORY, GET_REFERRAL_BONUS } from "../root-endpoints"

const bonusPaid = async(referralCount, userID) =>{
    const userReferral = {
        referralCount
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
    const response = await axios.post(BASE_URL + FOR_BONUS_PAID + userID, userReferral, configWithToken)
    return response
}


// Admin get all the bonus history
const getAllUsersBonusHistory = async() =>{
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
    const response = await axios.get(BASE_URL + FOR_GET_USERS_BONUS_HISTORY, configWithToken)
    console.log(response)
    return response
}

// USER get all their bonus history
const getUserBonusHistory = async(userID) =>{
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
    const response = await axios.get(BASE_URL + FOR_GET_USER_BONUS_HISTORY + userID, configWithToken)
    return response
}


// Get user referral bonus percentage
const getUserReferralBonus = (userID) =>{
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
  return axios.get(BASE_URL + GET_REFERRAL_BONUS + userID, configWithToken)
  .then((response)=>{
    console.log("service",response.data.data[0].bonus);
    return response.data.data[0].bonus
  })
}


const BonusService = {
    bonusPaid,
    getAllUsersBonusHistory,
    getUserBonusHistory,
    getUserReferralBonus
}

export default BonusService;