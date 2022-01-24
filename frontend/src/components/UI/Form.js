import styles from "./Form.module.css";
import { useState } from "react";

const defaultEnteredValues = {
  firstName: "KASIA",
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

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(enteredValues.firstName);
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
          placeholder="Imię"
          onChange={onChangeHandler}
          required
        />
        <label forhtml="firstName">Imię</label>
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
          type="text"
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
          onChange={onChangeHandler}
          required
        />
        <label forhtml="postalCode">Kod pocztowy</label>
      </div>
      <div>
        <button className={styles.submit} type="submit">
          Złóż zamówienie
        </button>
      </div>
    </form>
  );
};

export default Form;
