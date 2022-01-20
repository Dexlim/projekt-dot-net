import { useContext } from "react";
import CartContext from "../../store/cart-context";

import Modal from "../UI/Modal";

import styles from "./Cart.module.css";
import Order from "../Order/Order";
import { Link } from "react-router-dom";
import { Fragment } from "react";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const orderNotEmpty = (
    <Fragment>
      <button onClick={props.closeModal} className={styles.close}>
        X
      </button>
      <Order closeModal={props.onClose} />
      <Link to="/zamowienie" onClick={props.closeModal}>
        Złóż zamówienie
      </Link>
    </Fragment>
  );

  const orderIsEmpty = (
    <Fragment>
      <p>Twój koszyk jest aktaulnie pusty.</p>
    </Fragment>
  );

  return (
    <Modal onClose={props.closeModal}>
      <button onClick={props.closeModal} className={styles.close}>
        X
      </button>
      {cartCtx.totalAmount > 0 ? orderNotEmpty : orderIsEmpty}
    </Modal>
  );
};

export default Cart;
