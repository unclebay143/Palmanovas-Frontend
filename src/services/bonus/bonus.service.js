import axios from "axios"
import { BASE_URL, FOR_ACTIVE_BONUS_PAID, FOR_BONUS_PAID, FOR_GET_USERS_BONUS_HISTORY, FOR_GET_USER_BONUS_HISTORY, GET_REFERRAL_BONUS, GET_REFERRAL_BONUS_HISTORY } from "../root-endpoints"

const bonusPaidForActiveReferrals = async(bonus, userID) =>{
    const amount = {
        amount: bonus
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
      // console.log(amount);
    const response = await axios.post(BASE_URL + FOR_ACTIVE_BONUS_PAID + userID, amount, configWithToken)
    return response
}


// Admin get all the bonus history MONTHLY
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
    // console.log(response)
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
    // console.log("service",response.data.data[0].bonus);
    return response.data.data[0].bonus
  })
  .catch((error)=>{
    console.log(error)
  })
}

// Admin get all the bonus history REFERRAL BONUS
const getAllUsersReferralBonusHistory = async() =>{
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
  const response = await axios.get(BASE_URL + GET_REFERRAL_BONUS_HISTORY, configWithToken)
  // console.log(response)
  return response
}

// FUNCTION TO PAY USERS SALARY
const bonusPaidForCertainReferrals = async(referralsSize, userID) =>{
  const referralCount = {
      referralCount: referralsSize
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
    // console.log(referralCount, userID);
  const response = await axios.post(BASE_URL + FOR_BONUS_PAID + userID, referralCount, configWithToken)
  return response
}

const BonusService = {
    bonusPaidForActiveReferrals,
    getAllUsersBonusHistory,
    getUserBonusHistory,
    getUserReferralBonus,
    bonusPaidForCertainReferrals,
    getAllUsersReferralBonusHistory
}

export default BonusService;