import axios from "axios";

export const userSignUp = (userInput) => {
  return axios.post("/users/signup", userInput, {
    headers: { "Content-Type": "application/json" },
  });
};

export const userLogin = (userLoginInput) => {
  return axios.post("/users/login", userLoginInput, {
    headers: { "Content-Type": "application/json" },
  });
};
