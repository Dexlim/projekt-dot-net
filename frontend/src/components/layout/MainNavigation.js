import { NavLink } from "react-router-dom";

import styles from "./MainNavigation.module.css";

import logo from "../../images/logo.png";

const MainNavigation = (props) => {
  return (
    <nav className={styles.navigation}>
      <NavLink
        to="/"
        className={(navData) => (navData.isActive ? styles.active : "")}
      >
        <img src={logo} alt="Zale(w)scy pizza" className={styles.logo} />
      </NavLink>
      <ul>
        <li>
          <NavLink
            to="/"
            className={(navData) => (navData.isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/menu"
            className={(navData) => (navData.isActive ? styles.active : "")}
          >
            Menu
          </NavLink>
        </li>
        <li>
          <button
            type="button"
            onClick={props.showModal}
            className={styles.order}
          >
            Koszyk
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
