import "../Css/header.css";
import { Link } from "react-router-dom";
const Header = () => {
  // const [formOpen, setFormOpen] = useState(false);
  // const openForm = () => {
  //   setFormOpen(true);
  // };
  return (
    <div>
      <div className="header">
        {/* <div className="logo">
            <img alt = "Logo" src={""}/>
            </div> */}
        <div className="home-navbar">
          <Link to="/">Home</Link>
        </div>
        <div className="about-navbar">
          <Link to="/about">About us</Link>
        </div>
        <div className="login-navbar">
          <Link to="/createRecipe">Create Recipes </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
