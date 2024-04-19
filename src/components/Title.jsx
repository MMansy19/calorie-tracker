/* eslint-disable react/prop-types */
import styles from "../css/Title.module.css";
function Title() {
  return (
    <h1 className={styles.title}>
      Welcome to Calorie Tracker{" "}
      <img
        className={styles["responsive-image"]}
        src="src\assets\calories.png"
        alt="Calories image"
      />
    </h1>
  );
}
export default Title;
