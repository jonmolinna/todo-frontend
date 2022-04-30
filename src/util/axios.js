import axios from "axios";

// const apiUrl = "http://localhost:9000/";
const apiUrl = "https://todo-project-28042022.herokuapp.com/";

const instance = axios.create({
  baseURL: apiUrl,
});

export default instance;
