/* eslint-disable react/prop-types */
import styles from "../css/CaloriesRecord.module.css";
import CalorieRecordDate from "./CalorieRecordDate";
import { RxCross1 } from "react-icons/rx";

function CalorieRecord(props) {
  return (
    <>
      {props.calories >= 0 && (
        <ul className={styles.record}>
          <li className={styles["record-date"]}>
            <CalorieRecordDate date={props.date} />
          </li>
          <li className={styles["record-meal"]}>{props.meal}</li>
          <li className={styles["record-content"]}>{props.content}</li>
          <li className={styles["record-calories"]}>{props.calories}</li>
          <RxCross1
            className={styles.RxCross1}
            onClick={() => props.removeMeal(props.id)}
          />
        </ul>
      )}
    </>
  );
}

export default CalorieRecord;
