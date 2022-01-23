import {useState} from 'react';

import styles from "./CategoryNav.module.css";

const CategoryNav = (props) => {
  const [optionChosen,setOptionChosen] = useState("Pizza");

  return (
    <ul className={styles.ul}>
      <li key="1cat" onClick={()=>{setOptionChosen("Pizza"); props.filterChange("Pizza");}} className={`${optionChosen==="Pizza" ? styles.active : ""}`}>Pizza</li>
      <li key="2cat" onClick={()=>{setOptionChosen("Makaron"); props.filterChange("Makaron");}} className={`${optionChosen==="Makaron" ? styles.active : ""}`}>Makaron</li>
      <li key="3cat" onClick={()=>{setOptionChosen("Salatki"); props.filterChange("Salatka");}} className={`${optionChosen==="Salatki" ? styles.active : ""}`}>Sałatki</li>
      <li key="4cat" onClick={()=>{setOptionChosen("Dzieciece"); props.filterChange("Dzieciece");}} className={`${optionChosen==="Dzieciece" ? styles.active : ""}`}>Menu dziecięce</li>
      <li key="5cat" onClick={()=>{setOptionChosen("Dodatki"); props.filterChange("Dodatki");}} className={`${optionChosen==="Dodatki" ? styles.active : ""}`}>Dodatki</li>
      <li key="6cat" onClick={()=>{setOptionChosen("Napoje"); props.filterChange("Napoje");}} className={`${optionChosen==="Napoje" ? styles.active : ""}`}>Napoje</li>
    </ul>
  );
};

export default CategoryNav;
