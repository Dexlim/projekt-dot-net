import { NavLink } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import CartContext from "../../store/cart-context";

import styles from "./MainNavigation.module.css";

import logo from "../../images/logo.png";

const MainNavigation = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ""}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

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
            className={btnClasses}
          >
            Koszyk
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
