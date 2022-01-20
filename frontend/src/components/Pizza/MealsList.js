import { useState, Fragment, useEffect } from "react";
import MealItem from "./PizzaList";

const MealsList = () => {
  const [mealsList, setMealsList] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API + "pizza")
      .then((response) => response.json())
      .then((meals) => setMealsList(meals));
  }, []);

  return (
    <Fragment>
      {mealsList &&
        mealsList.map((meal) => (
          <MealItem
            key={meal.productId}
            id={meal.productId}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
        ))}
      {!mealsList && <p>Ładowanie...</p>}
    </Fragment>
  );
};

export default MealsList;
