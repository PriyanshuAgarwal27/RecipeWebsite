import "../Css/header.css";
import { Link } from "react-router-dom";
import { LOGO } from "../Utils/constants.jsx";
const Header = () => {
  return (
    <div>
      <div className="flex-1  ">
        <div className="left-side">
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
          <div className="about-navbar">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              About us
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
