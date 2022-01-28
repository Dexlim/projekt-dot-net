import React, { useEffect, useState } from "react";

import MealItem from "./PizzaList";
import mealsList from "./placeholderMeals";
import CategoryNav from "./CategoryNav";
import Extras from "./Extras";

import styles from "./MealsList.module.css";

const MealsList = () => {
  const [filter, setFilter] = useState("Pizza");


  //const [mealsList, setMealsList] = useState();

  // async function fetchData() {
  //   try {
  //     const response = await fetch("https://localhost:44376/api/Products");

  //     if (!response.ok) {
  //       throw new Error();
  //     }

  //     const data = await response.json();

  //     setMealsList(data);
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const filterChangeHandler = (param) => {
    setFilter(param);
  };
  

  return (
    <div className={styles.menu}>
      <CategoryNav filterChange={filterChangeHandler} />
      <ul className={styles.mealscard}>
        {mealsList &&
          mealsList
            .filter((meal) => meal.productType === filter)
            .map((meal) => (
              <MealItem
                key={meal.productId}
                id={meal.productId}
                name={meal.productName}
                type={meal.productType}
                description={meal.description}
                price={meal.price}
                imgUrl={meal.pictureUrl}
              />
            ))}
        {!mealsList && <p>Menu jest aktualnie puste.</p>}
      </ul>
    </div>
  );
};

export default MealsList;
