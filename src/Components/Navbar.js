import React from "react";
import logo1 from "../Images/Blue4.png";
import logo2 from "../Images/Archslate.png";
import img1 from "../Images/Candidates.png";
import img2 from "../Images/Companies.png";
import img3 from "../Images/jobs.png";
import img4 from "../Images/Notifications.png";
import img5 from "../Images/Username.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="container">
        <div className="nav-img">
        <img className="logo1" src={logo1} alt="Log02"></img>
        <img className="logo2" src={logo2} alt="Logo"></img>
        </div>
        <ul className="nav-links">
          <Link to="/Candidates">
            <li className="nav-item">
              <img className="nav-image" src={img1} alt="Log002"></img>
              <div className="negative-m">Candidates</div>
            </li>
          </Link>
          <Link to="/Companies">
            <li className="nav-item">
              <img className="nav-image" src={img2} alt="Log002"></img><div className="negative-m">Companies</div>
            </li>
          </Link>
          <Link to="/Jobs">
            <li className="nav-item">
              <img className="nav-image" src={img3} alt="Log002"></img><div className="negative-m">Jobs</div>
            </li>
          </Link>
          <Link to="/Notifications">
            <li className="nav-item">
              <img className="nav-image2" src={img4} alt="Log002"></img><div className="negative-m">Notifications</div>
            </li>
          </Link>
          <Link to="/Username">
            <li className="nav-item">
              <img className="nav-image" src={img5} alt="Log002"></img><div className="negative-m">User Name</div>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
