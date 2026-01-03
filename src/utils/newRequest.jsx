import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://final-server2-4zoh.onrender.com/api",
  withCredentials: true,
});

newRequest.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export default newRequest;
