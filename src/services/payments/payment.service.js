import axios from 'axios';
import { BASE_URL, FOR_DECLARE_PAYMENT, FOR_PAYMENT_CONFIRMATION, FOR_VIEW_DECLARED_PAYMENTS } from '../root-endpoints';



const declarePayment = (agentName, userID) =>{
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
    return axios.post(BASE_URL + FOR_DECLARE_PAYMENT + userID, agentName, configWithToken)
}


const fetchDeclaredPaymentList = async() =>{
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
    const response = await axios.get(BASE_URL + FOR_VIEW_DECLARED_PAYMENTS, configWithToken)
    return response
}


// For user package confirmation
const confirmPackagePayment = async(payload) =>{
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
    const response = await axios.post(BASE_URL + FOR_PAYMENT_CONFIRMATION, payload, configWithToken)
    return response
}


const PaymentService = {
    declarePayment,
    fetchDeclaredPaymentList,
    confirmPackagePayment,
}


export default PaymentService;