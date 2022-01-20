import { Fragment } from "react";
import MealItem from "./PizzaList";

const mealsList = [
  {
    "pizzaId": 1,
    "pizzaName": "Neapolitana",
    "description": "Super pizza",
    "price": 10.2,
    "pictureUrl": "https://rukola.com.pl/uploads/imgs/thumb/8rgPPh3YUU_nachos.jpg"
  },
  {
    "pizzaId": 2,
    "pizzaName": "Bonapartiana",
    "description": "Fajna pizza",
    "price": 42.0,
    "pictureUrl": "https://rukola.com.pl/uploads/imgs/thumb/chorizo.jpg"
  },
];

const MealsList = () => {
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
            imgUrl={meal.pictureUrl}
          />
        ))}
      {!mealsList && <p>Menu jest aktualnie puste.</p>}
    </Fragment>
  );
};

export default MealsList;
