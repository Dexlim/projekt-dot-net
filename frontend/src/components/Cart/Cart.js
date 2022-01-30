
import { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";

import CartContext from "../../store/cart-context";

import Modal from "../UI/Modal";
import Order from "../Order/Order";

import styles from "./Cart.module.css";


const Cart = (props) => {
  const [showForm, setShowForm] = useState(false);
  const cartCtx = useContext(CartContext);
  const setShowFormHandler = () => {
    setShowForm((prev) => !prev);
  };

  const orderNotEmpty = (
    <Fragment>
      <button onClick={props.closeModal} className={styles.close}>
        X
      </button>
      <Order closeModal={props.onClose} />
      <br/>
      <Link to="/zamowienie" onClick={props.closeModal} className={styles.order}>
        <i className={"fas fa-wallet"}/> Przejdź do zamówienia
      </Link>
    </Fragment>
  );

  const orderIsEmpty = (
    <Fragment>
      <div className={styles.emptycart}>Twój koszyk jest aktualnie pusty.</div>
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
