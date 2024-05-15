import axios from "axios";

export const userSignUp = (userSignUpInput) => {
  return axios.post("/users/signup", userSignUpInput, {
    headers: { "Content-Type": "application/json" },
  });
};

export const userLogin = (userLoginInput) => {
  return axios.post("/users/login", userLoginInput, {
    headers: { "Content-Type": "application/json" },
  });
};
