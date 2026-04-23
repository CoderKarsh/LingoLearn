import axios from "axios";

// Always point frontend requests to the deployed backend on Render
const BASE_URL = "https://streamify-app-ii41.onrender.com/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});
