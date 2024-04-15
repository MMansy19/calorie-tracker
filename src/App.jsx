// App.js
import button from "./css/Button.module.css";
import { useState } from "react";
import ListingRecord from "./components/ListingRecord";
import CaloriesRecordForm from "./components/CaloriesRecordForm";
import { getTodayDate } from "./utils";
const INITIAL_RECORDS = [
  {
    id: 1,
    date: new Date(getTodayDate()),
    meal: "Breakfast",
    content: "Bread",
    calories: 200,
  },
  {
    id: 2,
    date: new Date(getTodayDate()),
    meal: "Launch",
    content: "Rise & Meat",
    calories: 500,
  },
  {
    id: 3,
    date: new Date(getTodayDate()),
    meal: "dinner",
    content: "Chocolate",
    calories: 200,
  },
];
function App() {
  const [showForm, setShowForm] = useState(false);
  const [allRecords, setAllRecords] = useState(INITIAL_RECORDS);
  const [nextId, setNextId] = useState(4);

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  const addRecord = (newRecord) => {
    newRecord.id = nextId;
    setNextId((lastValue) => lastValue + 1);
    setAllRecords((prevRecord) => [newRecord, ...prevRecord]);
  };

  return (
    <>
      <h1>
        Welcome to Calories Record{" "}
        <img src="src\assets\calories.png" alt="Calories image" width="35" />
      </h1>
      {!showForm && <ListingRecord allRecords={allRecords} />}

      {showForm ? (
        <CaloriesRecordForm
          onAddRecord={addRecord}
          onCancel={handleToggleForm}
        />
      ) : (
        <div className={button.footer}>
          <button className={button.button} onClick={handleToggleForm}>
            Add Record
          </button>
        </div>
      )}
    </>
  );
}

export default App;
