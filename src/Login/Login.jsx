import React, { useState } from "react";
import "../Css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../services/userService";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ValidationLogin } from "../Utils/ValidationLogin";
const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMEssage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState("");
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const OnHandleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "email" || name === "password") {
      setInput((prev) => ({ ...prev, [name]: value }));
    }
  };
  const onToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const onsubmit = async () => {
    const error = ValidationLogin(input);
    if (Object.keys(error).length > 0) {
      setFormErrors(error);
    } else {
      try {
        await userLogin(input);
        navigate("/recipes");
      } catch (error) {
        setErrorMEssage(error.response.data.error);
      }
    }
  };

  return (
    <center>
      <div className="block">
        <h1>LOGIN</h1>
        <div className="login-form">
          EMAIL
          <div className="email-input">
            <input
              type="email"
              id="email"
              name="email"
              value={input.email}
              placeholder="Enter your email"
              onChange={OnHandleInputChange}
              required
            />
          </div>
          <div style={{ color: "red" }}>{formErrors.email}</div>
          PASSWORD
          <div className="pass-input">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value={input.password}
              placeholder="Enter your password"
              onChange={OnHandleInputChange}
              required
              autoComplete="off"
            />
            <button onClick={onToggleShowPassword}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <div style={{ color: "red" }}>{formErrors.password}</div>
        </div>
        <div>
          <button className="submit-login-form" onClick={onsubmit}>
            Submit
          </button>
        </div>
        <div>{errorMessage && <h1>{errorMessage}</h1>}</div>
      </div>
      <Link to="/signup">
        {" "}
        <div>Don't have an account? SignUp</div>
      </Link>
    </center>
  );
};
export default Login;
