import axios from "axios";

const api = axios.create({
  baseURL: "http://ec2-18-230-123-84.sa-east-1.compute.amazonaws.com:8000/",
});

export default api;