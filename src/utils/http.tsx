import Axios, { AxiosError } from "axios";

const defaultConfig = {
  baseURL: "http://localhost:8001",
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

const http = Axios.create(defaultConfig);

export default http;
