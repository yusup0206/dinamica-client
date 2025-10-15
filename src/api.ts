import axios, { AxiosError } from "axios";
import { useAppStore } from "./stores/store";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token =
    useAppStore.getState().token ?? localStorage.getItem("access_token");
  const language = useAppStore.getState().language;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  if (language) {
    config.headers["Content-Language"] = language;
  }
  return config;
});

let isRefreshing = false;

interface FailedRequestPromise {
  resolve: (value: string | PromiseLike<string | null> | null) => void;
  reject: (reason?: Error | AxiosError | unknown) => void;
}

let failedQueue: FailedRequestPromise[] = [];

const processQueue = (
  error: Error | unknown | null,
  token: string | null = null
) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config;

    if (
      err.response?.status === 401 &&
      err.response?.data?.message === "Token Expired" &&
      !originalRequest._retry
    ) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then((token) => {
          originalRequest.headers["Authorization"] = "Bearer " + token;
          return api(originalRequest);
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const expiredToken = useAppStore.getState().token;

        const refreshResponse = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/auth/refresh`,
          {},
          {
            headers: {
              Authorization: `Bearer ${expiredToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        const { accessToken: newAccessToken } = refreshResponse.data;

        useAppStore.getState().setToken(newAccessToken);

        originalRequest.headers["Authorization"] = "Bearer " + newAccessToken;

        processQueue(null, newAccessToken);

        return api(originalRequest);
      } catch (refreshErr) {
        useAppStore.getState().setToken(null);

        processQueue(refreshErr, null);

        return Promise.reject(refreshErr);
      } finally {
        isRefreshing = false;
      }
    }

    if (err.response?.status === 401) {
      useAppStore.getState().setToken(null);
    }

    return Promise.reject(err);
  }
);

export default api;
