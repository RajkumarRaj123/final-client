import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://final-server2.onrender.com/api",

  withCredentials: true,
  headers: {
    Authorization: localStorage.getItem("token"),
  },
});

export default newRequest;
