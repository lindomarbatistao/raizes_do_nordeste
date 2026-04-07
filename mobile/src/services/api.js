import axios from "axios";

const api = axios.create({
  baseURL: "http:// 192.168.88.234:8000/api/",
//   baseURL: "http://SEU_IP_LOCAL:8000/api/",
});

export default api;