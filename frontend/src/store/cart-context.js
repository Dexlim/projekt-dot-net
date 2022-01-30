import React, { useState } from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  numberOfItems: 0,
  addItem: (product) => {},
  removeItem: (product) => {},
  clearItemsList: () => {},
});

const updateLocalStorage = (itemsNumber, items, amount) => {
  localStorage.setItem("ITEMS_NUMBER", itemsNumber);
  localStorage.setItem("ITEMS", JSON.stringify(items));
  localStorage.setItem("AMOUNT", amount);
};

const clearLocalStorage = () => {
  localStorage.removeItem("ITEMS_NUMBER");
  localStorage.removeItem("ITEMS");
  localStorage.removeItem("AMOUNT");
};

export const CartContextProvider = (props) => {
  const itemsNumberLocalStorage = parseInt(
    localStorage.getItem("ITEMS_NUMBER")
  );
  const itemsLocalStorage = JSON.parse(localStorage.getItem("ITEMS"));
  const amountLocalStorage = parseFloat(localStorage.getItem("AMOUNT"));

  const [itemsList, setItemsList] = useState(
    itemsLocalStorage ? itemsLocalStorage : []
  );
  const [totalAmount, setTotalAmount] = useState(
    amountLocalStorage ? amountLocalStorage : 0
  );
  const [numberOfItems, setNumberOfItems] = useState(
    itemsNumberLocalStorage > 0 ? itemsNumberLocalStorage : 0
  );

  const addItemToCartHandler = (item) => {

   
    const updatedTotalAmount = totalAmount + item.price * item.amount;

    const existingPizzaIndex = itemsList.findIndex(
      (pizza) => pizza.id === item.id
    );

    let updatedItems = [...itemsList];

    const existingPizzaItem = itemsList[existingPizzaIndex];

  
    if (!existingPizzaItem) {
      updatedItems.push(item);
    } else {
      if (JSON.stringify(existingPizzaItem.extras) === JSON.stringify(item.extras)) {
        const updatedPizza = {
          ...existingPizzaItem,
          amount: existingPizzaItem.amount + item.amount,
        };
        updatedItems[existingPizzaIndex] = updatedPizza;
      }
      else{
        updatedItems.push(item);
      }
    }

    setNumberOfItems((prev) => (prev += item.amount));
    setItemsList(updatedItems);
    setTotalAmount(updatedTotalAmount);

    updateLocalStorage(
      numberOfItems + item.amount,
      updatedItems,
      updatedTotalAmount
    );
  };

  const clearItemsList = () => {
    setNumberOfItems(0);
    setItemsList([]);
    setTotalAmount(0);
    clearLocalStorage();
  };

  const removeItemFromCartHandler = (item) => {
    let updatedTotalAmount = totalAmount - item.price;

    const findPizza = (element) =>{
        if(element.id === item.id)
        {
          if(JSON.stringify(element.extras) === JSON.stringify(item.extras))
              return true;
        }
          return false;
    }

    const existingPizzaIndex = itemsList.findIndex(element => findPizza(element));
    console.log(existingPizzaIndex);

    let updatedItems = [...itemsList];

    const existingPizzaItem = itemsList[existingPizzaIndex];

    if (!existingPizzaItem) {
      updatedItems.pop(item);
    } else {
      const updatedPizza = {
        ...existingPizzaItem,
        amount: existingPizzaItem.amount - item.amount,
      };
      if (updatedPizza.amount <= 0) {
        updatedItems.splice(existingPizzaIndex, 1);
      } else {
        updatedItems[existingPizzaIndex] = updatedPizza;
      }
    }

    setNumberOfItems((prev) => (prev -= item.amount));

    setItemsList(updatedItems);
    if(updatedTotalAmount<0)
      updatedTotalAmount=0;
    setTotalAmount(updatedTotalAmount);


    if (updatedItems.length === 0) {
      clearLocalStorage();
    } else {
      updateLocalStorage(
        numberOfItems - item.amount,
        updatedItems,
        updatedTotalAmount
      );
    }
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
