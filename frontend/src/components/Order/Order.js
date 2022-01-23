import { useContext } from "react";
import CartContext from "../../store/cart-context";
import { Fragment } from "react/cjs/react.production.min";
import { NavLink } from "react-router-dom";

import OrderItem from "./OrderItem";

import styles from "./Order.module.css";

const Order = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <div className={styles.order}>
      <h2 className={styles.label}>Koszyk</h2>
      <ul className={styles.orderlist}>
        {cartCtx.items.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </ul>
      <br/><p>Łączna suma: {cartCtx.totalAmount.toFixed(2)} zł</p>
      <NavLink
            to="/menu"
            className={styles.submit}
            onClick={cartCtx.clearItemsList}
          >
            Wyczyśc koszyk
          </NavLink>
    </div>
  );
};

export default Order;
