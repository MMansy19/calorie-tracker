/* eslint-disable react/prop-types */
import styles from "../css/CaloriesRecord.module.css";
import CalorieRecordDate from "./CalorieRecordDate";

function CalorieRecord(props) {
  return (
    <>
      {props.calories >= 0 && (
        <ul className={styles.record}>
          <li className={styles["record-date"]}>
            <CalorieRecordDate date={props.date} />
          </li>
          <li className={styles["record-calories"]}>{props.meal}</li>
          <li className={styles["record-content"]}>{props.content}</li>
          <li className={styles["record-calories"]}>
            <img
              src="src\assets\calories.png"
              alt="Calories image"
              width="25"
              height="25"
            />
            {props.calories}
          </li>
        </ul>
      )}
    </>
  );
}

export default CalorieRecord;
