import axios from "axios";

const newRequest = axios.create({
  baseURL: "http://localhost:8800/api",

  withCredentials: true,
  headers: {
    Authorization: localStorage.getItem("token"),
  },
});

export default newRequest;
