import { useState } from "react";

import Modal from "../UI/Modal";
import Form from "./Form";

import styles from "./Cart.module.css";
import Order from "./Order";

const Cart = (props) => {
  const [showForm, setShowForm] = useState(false);

  const setShowFormHandler = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <Modal onClose={props.closeModal}>
      <button onClick={props.closeModal} className={styles.close}>
        X
      </button>
      {showForm && <Form />}
      {!showForm && <Order closeModal={props.onClose} />}
      <button type="button" onClick={setShowFormHandler}>
        {!showForm ? "Złóż zamówienie" : "Pokaż zamówienie"}
      </button>
    </Modal>
  );
};

export default Cart;
