/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import RecordList from "./RecordList";
import ListingDate from "./ListingDate.jsx";
import { getTodayDate } from "../utils";

function ListingRecord({ allRecords, removeMeal, setRecords }) {
  const [selectedDate, setSelectedDate] = useState(getTodayDate());
  const [totalCalories, setTotalCalories] = useState(0);

  useEffect(() => {
    let caloriesTotal = 0;
    allRecords.forEach((record) => {
      if (record.date.toISOString().split("T")[0] === selectedDate) {
        caloriesTotal += record.calories;
      }
    });
    setTotalCalories(caloriesTotal);
  }, [allRecords, selectedDate]);

  const filteredRecords = allRecords.filter(
    (record) => record.date.toISOString().split("T")[0] === selectedDate
  );

  return (
    <>
      <div className="top-listing-record">
        <ListingDate
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <div className="total-calories">
          Total Calories:{" "}
          <span className="total-calories-number">{totalCalories}</span>
        </div>
      </div>
      <RecordList
        records={filteredRecords}
        removeMeal={removeMeal}
        setRecords={setRecords}
      />
    </>
  );
}
export default ListingRecord;
