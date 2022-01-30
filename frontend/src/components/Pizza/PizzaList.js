import React, { useContext, useState } from "react";

import CartContext from "../../store/cart-context";
import Extras from "./Extras";
import styles from "./PizzaList.module.css";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const [showExtras, setShowExtras] = useState(false);

  const showExtrasHandler = () => {
    setShowExtras(true);
  };

  const closeExtrasHandler = () => {
    setShowExtras(false);
  };


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
    <React.Fragment>
      {showExtras && (
        <Extras
          id = {props.id}
          imgUrl={props.imgUrl}
          name={props.name}
          description={props.description}
          price={props.price}
          type={props.type}
          closeModal={closeExtrasHandler}
        />
      )}
      <li key={props.id} className={styles.pizzalist}>
        <img src={props.imgUrl} alt={props.name} />
        <div className={styles.pizzatext}>
          <h2>{props.name}</h2>
          <h3>{props.description}</h3>
        </div>
        <div className={styles.btn}>
          {props.price} zł
          <i onClick={showExtrasHandler} className="fas fa-plus"></i>
        </div>
      </li>
    </React.Fragment>
  );
};

export default MealItem;
