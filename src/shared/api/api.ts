import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

api.interceptors.request.use(
  (req) => req,
  (err) => Promise.reject(err)
);

api.interceptors.response.use(
  (res) => res.data,
  (err) => Promise.reject(err)
);
