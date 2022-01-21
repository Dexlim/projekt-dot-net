import React, { Fragment,useState } from "react";
import MealItem from "./PizzaList";
import styles from "./MealsList.module.css";
import AddToCartModal from "./AddToCartModal";
import mealsList from "./placeholderMeals";
import CategoryNav from "./CategoryNav";
const MealsList = () => {
  const [filter,setFilter] = useState("Pizza");
  // const [mealsList, setMealsList] = useState();

  // async function fetchData() {
  //   try {
  //     const response = await fetch("http://localhost:32520/api/Pizza");

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
  const filterChangeHandler = (param) =>{
    setFilter(param);
    console.log(param);
  }

  return (
    <div className={styles.menu}>
      <CategoryNav filterChange={filterChangeHandler}/>
      <ul className={styles.mealscard}>
        {mealsList &&
          mealsList.filter(meal=>meal.productType === filter).map((meal) => (
            <MealItem
              key={meal.pizzaId}
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
