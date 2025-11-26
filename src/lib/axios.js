import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-app-backend-mivh.onrender.com" : "/api",
  withCredentials: true,
});
