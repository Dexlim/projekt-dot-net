import React, { useState,useEffect,useCallback } from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  numberOfItems: 0,
  addItem: (product) => {},
  removeItem: (product) => {},
  clearItemsList: () => {},
});

export const CartContextProvider = (props) => {
  


  const [itemsList, setItemsList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [numberOfItems, setNumberOfItems] = useState(0);

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

    setNumberOfItems((prev) => (prev += item.amount));
    setItemsList(updatedItems);
    setTotalAmount(updatedTotalAmount);
  };

  const clearItemsList = () => {
    setNumberOfItems(0);
    setItemsList([]);
    setTotalAmount(0);
  };

  const removeItemFromCartHandler = (item) => {
    const updatedTotalAmount = totalAmount - item.price;

    const existingPizzaIndex = itemsList.findIndex(
      (pizza) => pizza.id === item.id
    );

    let updatedItems = [...itemsList];

    const existingPizzaItem = itemsList[existingPizzaIndex];

    if (!existingPizzaItem) {
      updatedItems.pop(item);
    } else {
      const updatedPizza = {
        ...existingPizzaItem,
        amount: existingPizzaItem.amount - item.amount,
      };
      if(updatedPizza.amount<=0)
      {
            updatedItems.splice(existingPizzaIndex,1);
      }
      else{
        updatedItems[existingPizzaIndex] = updatedPizza;
      }
    }

    setNumberOfItems((prev) => (prev -= item.amount));
    setItemsList(updatedItems);
    setTotalAmount(updatedTotalAmount);
  };

  const cartContext = {
    items: itemsList,
    totalAmount: totalAmount,
    numberOfItems: numberOfItems,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearItemsList: clearItemsList,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
