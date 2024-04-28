import React, { useState } from "react";
import "../Css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../services/userService";

const Login = () => {
  const navigate = useNavigate();
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
  const onsubmit = async () => {
    await userLogin(input);
    navigate("/");
  };

  return (
    <center>
      <div className="block">
        <h1>LOGIN</h1>
        <div className="login-form">
          EMAIL
          <div className="email-input">
            <input
              type="text"
              id="email"
              name="email"
              value={input.email}
              placeholder="Enter your email"
              onChange={OnHandleInputChange}
              required
            />
          </div>
          PASSWORD
          <div className="pass-input">
            <input
              type="password"
              name="password"
              id="password"
              value={input.password}
              placeholder="Enter your password"
              onChange={OnHandleInputChange}
              required
              autoComplete="off"
            />
          </div>
        </div>
        <div>
          <button className="submit-login-form" onClick={onsubmit}>
            Submit
          </button>
        </div>
      </div>
      <Link to="/Signup">
        {" "}
        <div>Don't have an account? SignUp</div>
      </Link>
    </center>
  );
};
export default Login;
