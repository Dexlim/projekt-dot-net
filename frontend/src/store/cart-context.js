import React, { useState } from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (product) => {},
  removeItem: (product) => {},
});

export const CartContextProvider = (props) => {
  const [itemsList, setItemsList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItemToCartHandler = (item) => {
    const updatedTotalAmount = totalAmount + item.price;

    const existingPizzaIndex = itemsList.findIndex(
      (pizza) => pizza.id === item.id
    );

    let updatedItems = [...itemsList];

    const existingPizzaItem = itemsList[existingPizzaIndex];

    if (!existingPizzaItem) {
      updatedItems.push(item);
    } else {
      const updatedPizza = {
        ...existingPizzaItem,
        amount: existingPizzaItem.amount + item.amount,
      };
      updatedItems[existingPizzaIndex] = updatedPizza;
    }

    setItemsList(updatedItems);
    setTotalAmount(updatedTotalAmount);
  };

  const removeItemFromCartHandler = (id) => {
    console.log("usuwanie");
  };

  const cartContext = {
    items: itemsList,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
