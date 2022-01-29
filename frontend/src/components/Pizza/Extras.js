import React, { useState, useContext, useEffect } from "react";
import ReactDOM from "react-dom";

import CartContext from "../../store/cart-context";
import styles from "./Extras.module.css";

const ExtrasBackdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.closeModal} />;
};

const ExtrasModalOverlay = (props) => {
  const cartCtx = useContext(CartContext);
  const [itemAmount, setItemAmount] = useState(1);
  const [clientPizzaPrice, setClientPizzaPrice] = useState(props.price);
  const [choosenIngredients, setChoosenIngredients] = useState([]);
  const [availableIngredients, setAvailableIngredients] = useState();

  const [ingredientList,setIngredientList] = useState(''); // do wyswietlania w opisie produktu

  async function fetchData() {
    try {
      const response = await fetch("https://localhost:44376/api/Ingredients");

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();
      setAvailableIngredients(data);
    } catch (e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  const addIngredient = (ingredient) => {
    let updatedIngredients = [...choosenIngredients];

    const existingIngredientIndex = updatedIngredients.findIndex(
      (item) => item.ingredientId === ingredient.ingredientId
    );

    const existingIngredient = choosenIngredients[existingIngredientIndex];

    if (!existingIngredient) {
      let newIngredient = {
        ...ingredient,
        amount: 1,
      };
      updatedIngredients = [...choosenIngredients, newIngredient];
    } else {
      let updatedIngredient = {
        ...existingIngredient,
        amount: (existingIngredient.amount += 1),
      };
      updatedIngredients[existingIngredientIndex] = updatedIngredient;
    }

    setChoosenIngredients(updatedIngredients);
    setClientPizzaPrice((prev) => (prev += ingredient.price));
    
    let ingList = updatedIngredients.map(x =>(
      x.ingredientName + " x" + x.amount + "("+(x.amount*x.price).toFixed(2)+"zł), "
  )).join("").slice(0,-2);
    setIngredientList(ingList);
  };

  const removeIngredient = (ingredient) => {
    let updatedIngredients = [...choosenIngredients];

    const existingIngredientIndex = updatedIngredients.findIndex(
      (item) => item.ingredientId === ingredient.ingredientId
    );

    const existingIngredient = choosenIngredients[existingIngredientIndex];

    if (existingIngredient) {
      let updatedIngredient = {
        ...existingIngredient,
        amount: (existingIngredient.amount -= 1),
      };
      if (updatedIngredient.amount <= 0) {
        updatedIngredients.splice(existingIngredientIndex);
      } else {
        updatedIngredients[existingIngredientIndex] = updatedIngredient;
      }
      setChoosenIngredients(updatedIngredients);
      setClientPizzaPrice((prev) => (prev -= ingredient.price));
      let ingList = updatedIngredients.map(x =>(
        x.ingredientName + " x" + x.amount + "("+(x.amount*x.price).toFixed(2)+"zł), "
    )).join("").slice(0,-2);
      setIngredientList(ingList);
    }
  };

  const returnCurrentAmount = (id) => {
    const existingIngredientIndex = [...choosenIngredients].findIndex(
      (item) => item.ingredientId === id
    );

    const existingIngredient = choosenIngredients[existingIngredientIndex];

    if (existingIngredient) {
      return existingIngredient.amount;
    } else {
      return 0;
    }
  };

  const submitHandler = (event) => {
    function dynamicSort(property) {
      return function(a, b) {
          return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      }
   }
   let submitingredients = choosenIngredients;
   submitingredients.sort(dynamicSort('ingredientId'));

    event.preventDefault();
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: clientPizzaPrice.toFixed(2),
      amount: itemAmount,
      extras: submitingredients
    });

    props.closeModal();
  };


  return (
    <div className={styles.extramodal}>
      <button onClick={props.closeModal} className={styles.close}>
        X
      </button>
      <div className={styles.foodcontainer}>
        <img src={props.imgUrl} alt={props.name} />
        <div className={styles.imageoverlay} />
        <div className={styles.fooddesc}>
          <h2>{props.name}</h2>
          <p>{props.description}</p>
          <p><b>Dodatki:</b><br/></p>
          <p>{ingredientList}</p>
          <h3>Ilość: {itemAmount}</h3>
          <div className={styles.control}>
            <button
              onClick={() => {
                if (itemAmount > 1) {
                  setItemAmount(itemAmount - 1);
                }
              }}
            >
              -
            </button>
            <h1>{(itemAmount * clientPizzaPrice).toFixed(2)} zł</h1>
            <button
              onClick={() => {
                setItemAmount(itemAmount + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className={styles["ingredient-list"]}>
        <h1>Dodatki</h1>
        {availableIngredients && availableIngredients.map((item) => (
          <div className={styles.ingredient} key={item.ingredientId}>
            <p>{item.ingredientName}</p>
            <p>{item.price.toFixed(2)} zł</p>
            <div className={styles["btn-container"]}>
              <button onClick={() => removeIngredient(item)}>-</button>
              <p>{returnCurrentAmount(item.ingredientId)}</p>
              <button onClick={() => addIngredient(item)}>+</button>
            </div>
          </div>
        ))}
        <button className={styles.confirm} onClick={submitHandler}>
          Dodaj do koszyka
        </button>
      </div>
    </div>
  );
};

const Extras = (props) => {
  const portalElement = document.getElementById("overlays");

  document.onkeydown = function (evt) {
    if (evt.key === "Escape") {
      props.closeModal();
    }
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ExtrasBackdrop closeModal={props.closeModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ExtrasModalOverlay
          id={props.id}
          closeModal={props.closeModal}
          imgUrl={props.imgUrl}
          name={props.name}
          description={props.description}
          price={props.price}
        >
          {props.children}
        </ExtrasModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Extras;