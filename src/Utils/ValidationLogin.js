export const ValidationLogin = (values) => {
  let error = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!values.email) {
    error.email = "Email is required";
  } else if (!regex.test(values.email)) {
    error.email = "This is not valid Email";
  }
  if (!values.password) {
    error.password = "Password is required";
  } else if (values?.password?.length < 4) {
    error.password = "More than 4 letters is required";
  }
  return error;
};
