import axios from "axios";

// Axios instance create kar rahe hain
const API = axios.create({
  baseURL: "http://localhost:3000", // Yahan meri api ki  backend ki base URL hai
  // headers: {
  //   "Content-Type": "application/json",
  // },
  withCredentials: true, // Agar aapko cookies bhejni hain toh ye zaruri hai
});

// Har request se pehle localStorage se token lo
// API.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );


// Response interceptor [If error handeling karna hai toh]
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.log("Session expired or unauthorized");

      // Optional:
      // localStorage.removeItem("token");
      // localStorage.removeItem("user");
    }

    return Promise.reject(error);
  }
);

export default API;