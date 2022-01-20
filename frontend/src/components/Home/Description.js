import styles from "./Description.module.css";

const Decsription = (props) => {
  return (
    <div className={styles.description}>
      <label>{props.label}</label>
      <div className={styles["desc-text"]}>
        <p>
          {props.children}
        </p>
      </div>
    </div>
  );
};

export default Decsription;
