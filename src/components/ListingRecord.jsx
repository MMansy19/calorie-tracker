/* eslint-disable react/prop-types */
import { useState } from "react";
import RecordList from "./RecordList";
import styles from "../css/ListingSection.module.css";
import { getTodayDate } from "../utils";

function ListingRecord({ allRecords }) {
  // Set initial state to today's date
  const [selectedDate, setSelectedDate] = useState(getTodayDate());

  const filteredRecords = allRecords.filter(
    (record) => record.date.toISOString().split("T")[0] === selectedDate
  );

  return (
    <>
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
      <RecordList records={filteredRecords} />
    </>
  );
}
export default ListingRecord;
