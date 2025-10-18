import axios, { AxiosError } from "axios";
import type { InternalAxiosRequestConfig } from "axios";
import { useAppStore } from "./stores/store";

// Extend AxiosRequestConfig to include _retry
interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

// Extend AxiosRequestConfig to include _retry
interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

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
  resolve: (token: string | null) => void;
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
  async (err: AxiosError) => {
    const originalRequest = err.config as CustomAxiosRequestConfig;

    // Token expired — try refresh
    if (
      err.response?.status === 401 &&
      (err.response?.data as any)?.message === "Token expired" &&
      !originalRequest?._retry
    ) {
      if (isRefreshing) {
        return new Promise<string | null>((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            if (token && originalRequest?.headers) {
              originalRequest.headers["Authorization"] = "Bearer " + token;
            }
            return api(originalRequest!);
          })
          .catch((refreshErr) => Promise.reject(refreshErr));
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

        const { access_token: newAccessToken } = refreshResponse.data;

        useAppStore.getState().setToken(newAccessToken);

        if (originalRequest.headers) {
          originalRequest.headers["Authorization"] = "Bearer " + newAccessToken;
        }

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

    // Invalid token — redirect to login
    if (
      err.response?.status === 401 &&
      (err.response?.data as any)?.message === "Invalid Token"
    ) {
      useAppStore.getState().setToken(null);
      window.location.href = "/login";
      return Promise.reject(err);
    }

    if (err.response?.status === 401) {
      useAppStore.getState().setToken(null);
    }

    return Promise.reject(err);
  }
);

export default api;
