import axios from "axios";

const token = localStorage.getItem("token");

const createRequestInstance = axios.create({
  baseUrl: "http://palmanovas.herokuapp.com/api/",
  timeout: 5000,
  headers: {
    "Authorization" : `Bearer ${token}`
  }
})

export default createRequestInstance;
