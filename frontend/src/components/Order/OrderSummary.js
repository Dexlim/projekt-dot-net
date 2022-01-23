import { Fragment } from "react/cjs/react.production.min";
import { useContext } from "react";

import CartContext from "../../store/cart-context";

import styles from "./OrderSummary.module.css";
import Form from "../UI/Form";
import Order from "./Order";
import EmptyOrder from "./EmptyOrder";

const OrderSummary = () => {
  const cartCtx = useContext(CartContext);

  const Summary = () => {
    return (
      <div className={styles.summary}>
        <Form />
        <div className={styles.order}>
        <Order/>
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      {cartCtx.totalAmount > 0 ? <Summary /> : <EmptyOrder />}
    </Fragment>
  );
};

export default OrderSummary;
