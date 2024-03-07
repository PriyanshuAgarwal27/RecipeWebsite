import "../Css/header.css";
import { Link } from "react-router-dom";
import { LOGO } from "../Utils/constants.jsx";
const Header = () => {
  return (
    <div>
      <div class="flex flex-row items-center bg-pink-300">
        <div className="w-3.5 h-3.5 justify-start">
          <img alt="Logo" src={LOGO} />
        </div>
        <div className="flex flex-row justify-end">
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
