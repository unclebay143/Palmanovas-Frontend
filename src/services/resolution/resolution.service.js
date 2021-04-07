import axios from "axios";
import { BASE_URL, FOR_POST_RESOLUTION } from "../root-endpoints";

const sendResolutionComplain = async(payLoad) =>{
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
    const response = await axios.post (BASE_URL + FOR_POST_RESOLUTION, payLoad, configWithToken);
    console.log(response);
    return response;
}


const ResolutionService = {
    sendResolutionComplain,
}

export default ResolutionService;