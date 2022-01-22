import { NavLink } from "react-router-dom";
import { useState, useEffect, useContext, useRef } from "react";
import CartContext from "../../store/cart-context";
import { useLocation } from "react-router-dom";

import styles from "./MainNavigation.module.css";

import logo from "../../images/logo.png";

const MainNavigation = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const ref = useRef();
  const onScreen = useOnScreen(ref, "0px");
  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ""}`;
  const location = useLocation();

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
        <li className={location.pathname === "/" && styles.active}>
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
          className={location.pathname === "/menu" && styles.active}
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
          className={`${styles.cart} ${!onScreen && styles.invisible}`}
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
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting;
}

export default MainNavigation;
