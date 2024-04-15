/* eslint-disable react/prop-types */
import { useState } from "react";
import RecordList from "./RecordList";
import ListingDate from "./ListingDate.jsx";
import { getTodayDate } from "../utils";

function ListingRecord({ allRecords }) {
  // Set initial state to today's date
  const [selectedDate, setSelectedDate] = useState(getTodayDate());

  const filteredRecords = allRecords.filter(
    (record) => record.date.toISOString().split("T")[0] === selectedDate
  );

  return (
    <>
      <ListingDate
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <RecordList records={filteredRecords} />
    </>
  );
}
export default ListingRecord;
