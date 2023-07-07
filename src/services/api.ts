import axios from "axios";

function getLocalAccessToken() {
  const accessToken = window.localStorage.getItem("token");
  return accessToken;
}

// function getLocalRefreshToken() {
//   const refreshToken = window.localStorage.getItem("refreshToken");
//   return refreshToken;
// }

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL as string,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config: any) => {
    const token = getLocalAccessToken();

    if (token) {
      config.headers["authorization"] = "Bearer " + token;
    }

    return config;
  },
  (error: any) => {
    if (
      error.response.data.message === "No token provided." ||
      error.response.data.message === "Failed to authenticate token."
    ) {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    if (
      error.response.data.message === "No token provided." ||
      error.response.data.message === "Failed to authenticate token."
    ) {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default api;
