const CartItem = (props) => {
  return (
    <li>
      <h3>{props.item.name}</h3>
      <p>liczba: {props.item.amount}zł</p>
      <p>cena: {props.item.amount * props.item.price}zł</p>
    </li>
  );
};

export default CartItem;
