import { useContext } from "react";

import CartContext from "../../store/cart-context";

import styles from "./PizzaList.module.css";

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
    <li key={props.id} className={styles.pizzalist}>
      <img src={props.imgUrl} alt={props.name} />
      <div className={styles.pizzatext}>
      <h2>{props.name}</h2>
      <h3>{props.description}</h3>
      </div>
      <div className={styles.btn}>
        {props.price} zł
        <i onClick={submitHandler} className="fas fa-plus"></i>
      </div>
    </li>
  );
};

export default MealItem;
