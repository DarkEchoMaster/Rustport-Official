import axios from "axios";
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/api",
  withCredentials: true,
  timeout: 15000
});
api.interceptors.response.use(
  response => response,
  error => Promise.reject(new Error(
    error.response?.data?.message || "Rustport could not complete that request."
  ))
);
export default api;
