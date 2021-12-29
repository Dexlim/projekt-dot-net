import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css"

const MainNavigation = () => {
  return (
    <nav>
      <ul>
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
