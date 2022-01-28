import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";

import CartContext from "../../store/cart-context";
import styles from "./Extras.module.css";

const ExtrasBackdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.closeModal} />;
};

const ExtrasModalOverlay = (props) => {
  const cartCtx = useContext(CartContext);
  const [itemAmount, setItemAmount] = useState(1);
  const submitHandler = (event) => {
    event.preventDefault();
    setItemAmount(1);
    props.closeModal();
  };

  return (
    <div className={styles.extramodal}>
      <button onClick={props.closeModal} className={styles.close}>
        X
      </button>
      <div className={styles.foodcontainer}>
        <img src={props.imgUrl} />
        <div className={styles.imageoverlay} />
        <div className={styles.fooddesc}>
          <h2>{props.name}</h2>
          <p>{props.description}</p>
          <h3>Ilość: {itemAmount}</h3>
          <div className={styles.control}>
            <button
              onClick={() => {
                if(itemAmount>1){
                cartCtx.removeItem({
                  id: props.id,
                  name: props.name,
                  price: props.price,
                  amount: 1,
                });
                setItemAmount(itemAmount - 1);
              }}}
            >
              -
            </button>
            <h1>{(itemAmount * props.price).toFixed(2)} zł</h1>
            <button
              onClick={() => {
                cartCtx.addItem({
                  id: props.id,
                  name: props.name,
                  price: props.price,
                  amount: 1,
                });
                setItemAmount(itemAmount + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <button className={styles.confirm} onClick={submitHandler}>Dodaj do koszyka</button>
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
