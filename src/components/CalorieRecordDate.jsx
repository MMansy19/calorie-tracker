import PropTypes from "prop-types";
import styles from "../css/CalorieRecordDate.module.css";
function CalorieRecordDate(props) {
  const month = props.date.toLocaleString("default", { month: "long" });
  const day = props.date.getDate();
  const year = props.date.getFullYear();

  return (
    <div className={styles["record-date"]}>
      <div className={styles["record-date-month"]}>{month}</div>
      <div className={styles["record-date-day"]}>{day}</div>
      <div className={styles["record-date-year"]}>{year}</div>
    </div>
  );
}

CalorieRecordDate.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default CalorieRecordDate;
