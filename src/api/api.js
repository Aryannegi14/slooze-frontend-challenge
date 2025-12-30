import axios from "axios";

const api = axios.create({
  baseURL: "https://assessment.api.slooze.xyz",
});

export default api;
