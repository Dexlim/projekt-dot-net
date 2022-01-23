import styles from "./Form.module.css";

const Form = () => {
  return (
    <form className={styles.form}>
      <div className={styles.controlgroup}>
        <input id="name" type="text" placeholder="Imię" />
        <label forhtml="name">Imię</label>
      </div>
      <div className={styles.controlgroup}>
        <input id="surname" type="text" placeholder="Nazwisko"/>
        <label forhtml="surname">Nazwisko</label>
      </div>
      <div className={styles.controlgroup}> 
        <input id="email" type="email" placeholder="Adres e-mail"/>
        <label forhtml="email">Adres e-mail</label>
      </div>
      <div className={styles.controlgroup}>
        <input id="phone" type="text" placeholder="Telefon" />
        <label forhtml="phone">Telefon</label>
      </div>
      <div className={styles.controlgroup}>
        <input id="street" type="text" placeholder="Nazwa ulicy"/>
        <label forhtml="street">Nazwa ulicy</label>
      </div>
      <div className={styles.controlgroup}>
        <input id="building" type="text" placeholder="Numer budynku" />
        <label forhtml="building">Numer budynku</label>
      </div>
      <div className={styles.controlgroup}>
        <input id="flat" type="text" placeholder="Numer mieszkania" />
        <label forhtml="flat">Numer mieszkania</label>
      </div>
      <div className={styles.controlgroup}>
        <input id="postalcode" type="text" placeholder="Kod pocztowy"/>
        <label forhtml="postalcode">Kod pocztowy</label>
      </div>
      <div>
      <button className={styles.submit} type="submit">Złóż zamówienie</button>
      </div>
    </form>
  );
};

export default Form;
