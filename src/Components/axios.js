import axios from "axios";

const instance = axios.create({
  baseURL: "https://safe-harbor-49395.herokuapp.com/api/",
});

export default instance;
