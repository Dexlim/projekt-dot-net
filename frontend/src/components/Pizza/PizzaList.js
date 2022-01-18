import { useContext } from "react";

import CartContext from "../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const submitHandler = (event) => {
    event.preventDefault();
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: 1,
    });
  };

  return (
    <li>
      <div>
        <h2>{props.name}</h2>
        <h3>{props.description}</h3>
        <span>{props.price}</span>
      </div>
      <div>
        <form onSubmit={submitHandler}>
          <button>Dodaj</button>
        </form>
      </div>
    </li>
  );
};

export default MealItem;
