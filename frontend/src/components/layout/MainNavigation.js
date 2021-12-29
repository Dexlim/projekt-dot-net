import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css"

import logo from "../../images/logo.png"

const MainNavigation = () => {
  return (
    <nav>
      <ul>
      <li>
          <NavLink to="/" className={(navData) => (navData.isActive ? classes.active : "")}>
              <img src={logo} alt="Zale(w)scy pizza" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={(navData) => (navData.isActive ? classes.active : "")}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/menu" className={(navData) => (navData.isActive ? classes.active : "")}>Menu</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
