import axios from "axios";

export const instance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const authInstance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

authInstance.interceptors.request.use((config) => {
  const token = import.meta.env.VITE_KINOPOISK_TOKEN;

  if (config.headers && token) {
    config.headers["X-API-KEY"] = token;
  }
  return config;
});
