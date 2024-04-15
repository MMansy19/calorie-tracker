// App.js
import { useEffect, useState } from "react";
import ListingRecord from "./components/ListingRecord";
import Title from "./components/Title";
import Footer from "./components/Footer.jsx";
import CaloriesRecordForm from "./components/CaloriesRecordForm";
import { getTodayDate } from "./utils";

const INITIAL_RECORDS = [
  {
    id: 1,
    date: new Date(getTodayDate()),
    meal: "breakfast",
    content: "Cereal with milk",
    calories: 135,
  },
  {
    id: 2,
    date: new Date(getTodayDate()),
    meal: "lunch",
    content: "Sandwich",
    calories: 250,
  },
  {
    id: 3,
    date: new Date(getTodayDate()),
    meal: "dinner",
    content: "Pasta",
    calories: 500,
  },
];
const LOCAL_STORAGE_KEY = "caloriesRecord";

function App() {
  // const [allRecords, setAllRecords] = useState(INITIAL_RECORDS);
  const [allRecords, setAllRecords] = useState([]);
  const [nextId, setNextId] = useState(4);
  const [showForm, setShowForm] = useState(false);

  const saveRecords = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allRecords));
  };
  const loadRecords = () => {
    const storageRecords = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageRecords != null && storageRecords != "undefined") {
      setAllRecords(storageRecords);
    } else {
      setAllRecords([]);
    }
  };

  useEffect(() => {
    if (!allRecords) {
      loadRecords();
    } else {
      saveRecords();
    }
  }, [allRecords]);

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
      <Title />
      {allRecords && !showForm && (
        <>
          <ListingRecord allRecords={allRecords} />
          <Footer handleToggleForm={handleToggleForm} />
        </>
      )}

      {showForm && (
        <CaloriesRecordForm
          onAddRecord={addRecord}
          onCancel={handleToggleForm}
        />
      )}
    </>
  );
}

export default App;
