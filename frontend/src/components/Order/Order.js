import { useContext } from "react";
import CartContext from "../../store/cart-context";
import { Fragment } from "react/cjs/react.production.min";

import OrderItem from "./OrderItem";

import styles from "./Order.module.css";

const Order = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <Fragment>
      <h2 className={styles.label}>Koszyk</h2>
      <ul className={styles.orderlist}>
        {cartCtx.items.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </ul>
      <br/><p>Łączna suma: {cartCtx.totalAmount.toFixed(2)} zł</p>
      <button onClick={cartCtx.clearItemsList}>Wyczyść koszyk</button>
    </Fragment>
  );
};

export default Order;
