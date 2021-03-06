import { useContext, useState } from "react";

import CartContext from "../../store/cart-context";

import styles from "./Form.module.css";

const defaultEnteredValues = {
  firstName: "",
  secondName: "",
  email: "",
  phoneNumber: "",
  streetNumber: "",
  houseNumber: "",
  flatNumber: "",
  postalCode: "",
};

const Form = () => {
  const [enteredValues, setEnteredValues] = useState(defaultEnteredValues);

  const cartCtx = useContext(CartContext);

  async function fetchData() {
    const itemsDetails = [];

    const items = cartCtx.items.map((item, index) => {
      if (item.extras.length > 0) {
        item.extras.map((extra) => {
          itemsDetails.push({
            productId: item.id,
            ingredientId: extra.ingredientId,
            quantity: extra.amount,
            pizzaId: index,
            amount: extra.amount ? extra.amount * extra.price : 0,
          });
        });
      } else {
        itemsDetails.push({
          productId: item.id,
          ingredientId: 78,
          quantity: item.amount,
          pizzaId: index,
          amount: item.amount * item.price,
        });
      }
    });

    const enteredDate = {
      customer: enteredValues,
      totalAmount: cartCtx.totalAmount,
      orderDetails: itemsDetails,
    };
    console.log(JSON.stringify(enteredDate));

    try {
      const result = await fetch("https://localhost:44376/api/Orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enteredDate),
      });

      if (!result.ok) {
        throw new Error();
      }

      const promiseData = await result.json();
      console.log(promiseData);
    } catch (e) {
      console.log(e.message);
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(enteredValues);
    fetchData();
    setEnteredValues(defaultEnteredValues);
    cartCtx.clearItemsList();
  };

  const onChangeHandler = (e) => {
    setEnteredValues({ ...enteredValues, [e.target.id]: e.target.value });
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.controlgroup}>
        <input
          id="firstName"
          type="text"
          placeholder="Imi??"
          onChange={onChangeHandler}
          required
        />
        <label forhtml="firstName">Imi??</label>
      </div>
      <div className={styles.controlgroup}>
        <input
          id="secondName"
          type="text"
          placeholder="Nazwisko"
          onChange={onChangeHandler}
          required
        />
        <label forhtml="secondName">Nazwisko</label>
      </div>
      <div className={styles.controlgroup}>
        <input
          id="email"
          type="email"
          placeholder="Adres e-mail"
          onChange={onChangeHandler}
          required
        />
        <label forhtml="email">Adres e-mail</label>
      </div>
      <div className={styles.controlgroup}>
        <input
          id="phoneNumber"
          type="tel"
          placeholder="Telefon"
          onChange={onChangeHandler}
          required
        />
        <label forhtml="phoneNumber">Telefon</label>
      </div>
      <div className={styles.controlgroup}>
        <input
          id="streetNumber"
          type="text"
          placeholder="Nazwa ulicy"
          onChange={onChangeHandler}
          required
        />
        <label forhtml="streetNumber">Nazwa ulicy</label>
      </div>
      <div className={styles.controlgroup}>
        <input
          id="houseNumber"
          type="text"
          placeholder="Numer budynku"
          onChange={onChangeHandler}
          required
        />
        <label forhtml="houseNumber">Numer budynku</label>
      </div>
      <div className={styles.controlgroup}>
        <input
          id="flatNumber"
          type="text"
          placeholder="Numer mieszkania"
          onChange={onChangeHandler}
        />
        <label forhtml="flatNumber">Numer mieszkania</label>
      </div>
      <div className={styles.controlgroup}>
        <input
          id="postalCode"
          type="text"
          placeholder="Kod pocztowy"
          pattern="[0-9]{2}[-][0-9]{3}"
          onChange={onChangeHandler}
          required
        />
        <label forhtml="postalCode">Kod pocztowy</label>
      </div>
      <div>
        <button className={styles.submit} type="submit">
          Z?????? zam??wienie
        </button>
      </div>
    </form>
  );
};

export default Form;
