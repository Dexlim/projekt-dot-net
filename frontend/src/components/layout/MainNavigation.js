import { NavLink } from "react-router-dom";
import { useState, useEffect, useContext, useRef } from "react";
import { useLocation } from "react-router-dom";

import CartContext from "../../store/cart-context";

import logo from "../../images/logo.png";

import styles from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  const cartCtx = useContext(CartContext);
  const location = useLocation();
  const ref = useRef();
  const onScreen = useOnScreen(ref, "0px");

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
        <li className={location.pathname === "/" ? styles.active : ""}>
          <NavLink
            to="/"
            className={(navData) => (navData.isActive ? styles.active : "")}
            onClick={() => {}}
          >
            HOME
          </NavLink>
        </li>
        <li
          ref={ref}
          className={location.pathname === "/menu" ? styles.active : ""}
        >
          <NavLink
            to="/menu"
            className={(navData) => (navData.isActive ? styles.active : "")}
            onClick={() => {}}
          >
            MENU
          </NavLink>
        </li>
        <li
          className={`${styles.cart} ${!onScreen ? styles.invisible : ""}`}
          onClick={props.showModal}
        >
          <i
            className="fas fa-shopping-cart"
            type="button"

          >
            KOSZYK
          </i>
          <div className={styles.cartitems}> {cartCtx.numberOfItems}</div>
          <div className={styles.tooltip}>
            CENA: {cartCtx.totalAmount.toFixed(2)}
            <br />
          </div>
        </li>
      </ul>
    </nav>
  );
};

function useOnScreen(ref, rootMargin = "0px") {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting;
}

export default MainNavigation;
