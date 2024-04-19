/* eslint-disable react/prop-types */
import styles from "../css/ListingSection.module.css";
import { useContext } from "react";
import { AppContext } from "../app-context";

function ListingDate() {
  const { currentDate: selectedDate, setCurrentDate: setSelectedDate } =
    useContext(AppContext);
  return (
    <div className={styles["listing-picker"]}>
      <label htmlFor="date" className={styles["listing-picker-label"]}>
        Select date:
      </label>
      <input
        type="date"
        id="listingDate"
        className={styles["listing-picker-input"]}
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
    </div>
  );
}
export default ListingDate;
