import { useContext } from "react";
import CartContext from "../../store/cart-context";
import { Fragment } from "react/cjs/react.production.min";

import CartItem from "./CartItem";

const Order = (props) => {
  const cartCtx = useContext(CartContext);
  return (
    <Fragment>
      <h2>Podsumowanie zamówienia</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem item={item} />
        ))}
      </ul>
      <p>Wartosc koszyka: {cartCtx.totalAmount} zł</p>
      <button onClick={cartCtx.clearItemsList}>Wyczyść koszyk</button>
    </Fragment>
  );
};

export default Order;
