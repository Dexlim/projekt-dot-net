import { useState, Fragment, useEffect } from "react";
import MealItem from "./PizzaList";

const MealsList = () => {
  const [mealsList, setMealsList] = useState();

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:32520/api/Pizza");

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();

      setMealsList(data);
    } catch (e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Fragment>
      {mealsList &&
        mealsList.map((meal) => (
          <MealItem
            key={meal.pizzaId}
            id={meal.pizzaId}
            name={meal.pizzaName}
            description={meal.description}
            price={meal.price}
          />
        ))}
      {!mealsList && <p>Menu jest aktualnie puste.</p>}
    </Fragment>
  );
};

export default MealsList;
