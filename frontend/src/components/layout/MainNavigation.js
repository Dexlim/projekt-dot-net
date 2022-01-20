import { NavLink } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import CartContext from "../../store/cart-context";

import styles from "./MainNavigation.module.css";

import logo from "../../images/logo.png";

const MainNavigation = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const [activePage, setActivePage] = useState("Home");

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
      <div className={styles.picHolder}>
        <NavLink
          to="/"
          className={(navData) => (navData.isActive ? styles.active : "")}
        >
          <img src={logo} alt="Zale(w)scy pizza" className={styles.logo} />
        </NavLink>
      </div>
      <ul>
        <li className={activePage === "Home" && styles.active}>
          <NavLink
            to="/"
            className={(navData) => (navData.isActive ? styles.active : "")}
            onClick={() => {
              setActivePage("Home");
            }}
          >
            Home
          </NavLink>
        </li>
        <li className={activePage === "Menu" && styles.active}>
          <NavLink
            to="/menu"
            className={(navData) => (navData.isActive ? styles.active : "")}
            onClick={() => {
              setActivePage("Menu");
            }}
          >
            Menu
          </NavLink>
        </li>
        <li
          className={`${styles.cart}`}
          onClick={() => {
            setActivePage("Koszyk");
          }}
        >
          <i
            className="fas fa-shopping-cart"
            type="button"
            onClick={props.showModal}
          >
            Koszyk ({cartCtx.numberOfItems})
          </i>
          <div className={styles.tooltip}>
            Cena: {cartCtx.totalAmount.toFixed(2)}
            <br />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
