import MealItem from "./PizzaList";

const DUMMY_DATA = [
  {
    id: 0,
    name: "pizza wloska",
    price: 12.9,
  },
  {
    id: 1,
    name: "pizza polska",
    price: 10.9,
  },
];

const MealsList = () => {
  const mealsList = DUMMY_DATA.map((meal) => (
    <MealItem key={meal.id} id={meal.id} name={meal.name} price={meal.price} />
  ));

  return <ul>{mealsList}</ul>;
};

export default MealsList;
