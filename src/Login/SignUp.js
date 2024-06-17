import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userSignUp } from "../services/userService";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../Css/Login.css";
import { ValidationSignUp } from "./../Utils/ValidationSignUp";
const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showErrorMessage, setshowErrorMessage] = useState("");
  const [formError, setFormError] = useState("");
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const OnHandleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "email" || name === "password" || name === "name") {
      setInput((prev) => ({ ...prev, [name]: value }));
    }
  };
  const onToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const onsubmit = async () => {
    const error = ValidationSignUp(input);
    if (Object.keys(error).length > 0) {
      setFormError(ValidationSignUp(input));
    } else {
      try {
        await userSignUp(input);
        navigate("/Login");
      } catch (error) {
        setshowErrorMessage(error.response.data.message);
      }
    }
  };

  return (
    <center>
      <div className="block">
        <h1>SIGNUP</h1>

        <div className="login-form">
          NAME
          <div className="name-input">
            <input
              type="text"
              id="name"
              name="name"
              value={input.name}
              placeholder="Enter your name"
              onChange={OnHandleInputChange}
              required
            />
            <div style={{ color: "red" }}>{formError.name}</div>
          </div>
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
          <div style={{ color: "red" }}>{formError.email}</div>
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
            />
            <button onClick={onToggleShowPassword}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <div style={{ color: "red" }}>{formError.password}</div>
        </div>
        <div>
          <button className="submit-login-form" onClick={onsubmit}>
            Submit
          </button>
        </div>
        <div>{showErrorMessage && <h1>{showErrorMessage}</h1>}</div>
      </div>
    </center>
  );
};
export default SignUp;
