import axios from "axios";

const apiUrl = "http://localhost:9000/";

const instance = axios.create({
  baseURL: apiUrl,
});

export default instance;
