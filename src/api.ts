import axios from "axios";
import { useAppStore } from "./stores/store";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = useAppStore.getState().token ?? localStorage.getItem("token");
  const language = useAppStore.getState().language;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  if (language) {
    config.headers["Content-Language"] = language;
  }
  return config;
});
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      useAppStore.getState().setToken(null);
      localStorage.removeItem("token");
      // maybe redirect to /login
    }
    return Promise.reject(err);
  }
);

export default api;
