import React from "react";
import { Link } from "react-router-dom";
import { LOGO } from "../Utils/constants.jsx";
import "../Css/header.css";

const Header = () => {
  //subscribing our store using a selecteor
  // const cart = useSelector(appStore);
  return (
    <div>
      <div className="header">
        <div className="left-side ">
          <div className="logo">
            <img alt="Logo" src={LOGO} />
          </div>
        </div>
        <div className="right-side">
          <div className="home-navbar">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Home
            </Link>
          </div>

          <div className="login-navbar">
            <Link
              to="/createRecipe"
              style={{ textDecoration: "none", color: "black" }}
            >
              Create Recipes{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
