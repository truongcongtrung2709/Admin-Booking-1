import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://airbnbnew.cybersoft.edu.vn/api",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0MyIsIkhldEhhblN0cmluZyI6IjA0LzExLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5OTA1NjAwMDAwMCIsIm5iZiI6MTY2OTQ4MjAwMCwiZXhwIjoxNjk5MjAzNjAwfQ.7A1g8",
  },
});

fetcher.interceptors.response.use(
  (response) => {
    return response.data.content;
  },
  (error) => {
    return error;
  }
);

fetcher.interceptors.request.use(
  (config) => {
    const { token } = JSON.parse(localStorage.getItem("user")) || {};

    if (token) {
      // config.headers.token = `Bearer ${token}`;
      config.headers.token = token;
    }

    return config;
  },
  (error) => {
    return error;
  }
);

export default fetcher;
