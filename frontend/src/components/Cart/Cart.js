import Modal from "../UI/Modal";

import styles from "./Cart.module.css";
import Order from "../Order/Order";
import { Link } from "react-router-dom";

const Cart = (props) => {
  return (
    <Modal onClose={props.closeModal}>
      <button onClick={props.closeModal} className={styles.close}>
        X
      </button>
      <Order closeModal={props.onClose} />
      <Link to="/zamowienie" onClick={props.closeModal}>
        Złóż zamówienie
      </Link>
    </Modal>
  );
};

export default Cart;
