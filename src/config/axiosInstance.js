import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://b72e2037c35ad095.mokky.dev/",
  headers: {
    "Content-Type": "application/json",
  },
});

let store;

export const injectStore = (main) => {
  return (store = main);
};

axiosInstance.interceptors.request.use(
  function (config) {
    const updateCOnfig = { ...config };
    const token = localStorage.getItem("adminToken");

    if (token) {
      updateCOnfig.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
