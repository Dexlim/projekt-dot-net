import styles from "./Form.module.css";

const Form = () => {
  return (
    <form className={styles.form}>
      <div>
        <label forhtml="name">Imię</label>
        <input id="name" type="text" />
      </div>
      <div>
        <label forhtml="surname">Nazwisko</label>
        <input id="surname" type="text" />
      </div>
      <div>
        <label forhtml="email">Adres e-mail</label>
        <input id="email" type="email" />
      </div>
      <div>
        <label forhtml="phone">Telefon</label>
        <input id="phone" type="text" />
      </div>
      <div>
        <label forhtml="street">Nazwa ulicy</label>
        <input id="street" type="text" />
      </div>
      <div>
        <label forhtml="building">Numer budynku</label>
        <input id="building" type="text" />
      </div>
      <div>
        <label forhtml="flat">Numer mieszkania</label>
        <input id="flat" type="text" />
      </div>
      <div>
        <label forhtml="postalcode">Kod pocztowy</label>
        <input id="postalcode" type="text" />
      </div>
    </form>
  );
};

export default Form;
