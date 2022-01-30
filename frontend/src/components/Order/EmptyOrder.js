import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import styles from "./EmptyOrder.module.css";

const EmptyOrder = () => {
  return (
    <Fragment>
      <div className={styles.emptyorder}>
        <p>
          Twój koszyk jest aktualnie pusty.<br/>
          Przejrzyj naszą ofertę aby wybrać coś dla siebie.
        </p>
        <Link to="/menu">Wróć do menu</Link>
      </div>
    </Fragment>
  );
};

export default EmptyOrder;
