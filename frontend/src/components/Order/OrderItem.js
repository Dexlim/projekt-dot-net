import {useContext} from 'react';

import CartContext from "../../store/cart-context";

import styles from "./OrderItem.module.css";

const OrderItem = (props) => {
const cartCtx = useContext(CartContext);

const ingredientsToString = () =>{
  let ingList = props.item.extras.filter((x) => x.ingredientType === "extra").map(x =>(
    x.ingredientName + " x" + x.amount + "("+(x.amount*x.price).toFixed(2)+"zł), "
    )).join("").slice(0,-2); 
  return ingList 
}

const fullName = () =>{
  if(props.item.type === "Pizza"){
    return props.item.name+" "+props.item.extras[0].ingredientName;
  }
  else
    return props.item.name;
}

  return (
    <li key={props.id}>
      <div className={styles.container}>
      <div className={styles.amount}>{props.item.amount}</div>
      <div className={styles.name}>{fullName()}</div>
      <div className={styles.price}>{(props.item.amount*props.item.price).toFixed(2)}zł</div>
      </div>
      <div className={styles.extras}>{ingredientsToString()}</div>
      <div className={styles.control}>
        <button onClick={()=>{cartCtx.removeItem({...props.item,amount: 1})}}>-</button>
        <button onClick={()=>{cartCtx.addItem({...props.item,amount: 1})}}>+</button>
      </div>
    </li>
  );
};

export default OrderItem;
