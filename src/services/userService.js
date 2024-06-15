import axios from "../api_instance.js";

export const userSignUp = (userSignUpInput) => {
  return axios.post("/users/signup", userSignUpInput);
};

export const userLogin = (userLoginInput) => {
  return axios.post("/users/login", userLoginInput);
};
