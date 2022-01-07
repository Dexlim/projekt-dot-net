import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

const EmptyOrder = () => {
  return (
    <Fragment>
      <p>
        Twój koszyk jest pusty. Przejrzyj naszą ofertę aby wybrać coś dla
        siebie.
      </p>
      <Link to="/menu">Nasza oferta</Link>
    </Fragment>
  );
};

export default EmptyOrder;
