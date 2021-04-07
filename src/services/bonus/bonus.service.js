import axios from "axios"
import { BASE_URL, FOR_BONUS_PAID, FOR_GET_USERS_BONUS_HISTORY, FOR_GET_USER_BONUS_HISTORY } from "../root-endpoints"

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


const BonusService = {
    bonusPaid,
    getAllUsersBonusHistory,
    getUserBonusHistory
}

export default BonusService;