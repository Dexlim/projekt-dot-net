import { Fragment } from "react/cjs/react.production.min";
import { useContext } from "react";

import CartContext from "../../store/cart-context";

import Form from "../UI/Form";
import Order from "./Order";
import EmptyOrder from "./EmptyOrder";

const OrderSummary = () => {
  const cartCtx = useContext(CartContext);

  const Summary = () => {
    return (
      <>
        <Form />
        <Order />
      </>
    );
  };

  return (
    <Fragment>
      {cartCtx.totalAmount > 0 ? <Summary /> : <EmptyOrder />}
    </Fragment>
  );
};

export default OrderSummary;
