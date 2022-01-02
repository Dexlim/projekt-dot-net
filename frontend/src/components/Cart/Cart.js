import { useContext } from "react";

import CartContext from "../../store/cart-context";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <Modal onClose={props.closeModal}>
      <h2>Podsumowanie zamówienia</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem item={item} />
        ))}
      </ul>
      <p>Wartosc koszyka: {cartCtx.totalAmount} zł</p>
      <button onClick={props.closeModal}>Zamknij</button>
    </Modal>
  );
};

export default Cart;
