import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://final-server1.onrender.com/api",

  withCredentials: true,
});

export default newRequest;
