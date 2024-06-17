import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",
});
instance.interceptors.request.use((config) => {
  const decodedCookie = decodeURIComponent(document.cookie);
  const uid = decodedCookie
    .split(";")
    .find((id) => id.split("=")[0] === "uid")
    ?.split("=")[1];
  config.headers.auth = uid;

  return config;
});

export default instance;
