/* eslint-disable react-hooks/exhaustive-deps */
// App.js
import { useEffect, useState } from "react";
import ListingRecord from "./components/ListingRecord";
import Title from "./components/Title";
import Footer from "./components/Footer.jsx";
import CaloriesRecordForm from "./components/CaloriesRecordForm";
import Modal from "react-modal";
// import AppContextProvider from "./AppContext";

const LOCAL_STORAGE_KEY = "caloriesRecord";

function App() {
  const [records, setRecords] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function save() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(records));
  }
  function removeMeal(id) {
    setRecords((prev) => prev.filter((meal) => meal.id !== id));
  }

  function loadRecords() {
    const storageRecords = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storageRecords != null && storageRecords !== "undefined") {
      setRecords(
        JSON.parse(storageRecords).map((record) => ({
          ...record,
          date: new Date(record.date),
          calories: Number(record.calories),
        }))
      );
    } else {
      setRecords([]);
    }
  }

  useEffect(() => {
    if (!records) {
      loadRecords();
    } else {
      save();
    }
  }, [records]);

  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none", // Remove the border
      padding: "0px", // Remove padding
      backgroundColor: "rgb(50, 50, 50,.1)",
    },
    overlay: {
      backgroundColor: "rgba(0,0,0,0.1)",
      blur: "2px",
    },
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const formSubmitHandler = (record) => {
    const formattedRecord = {
      ...record,
      date: record.date,
      id: crypto.randomUUID(),
    };
    setRecords((prevRecords) => [formattedRecord, ...prevRecords]);

    handleCloseModal();
  };

  return (
    <>
      <Title />
      {/* <AppContextProvider> */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Modal"
        style={modalStyles}
        className="Modal"
        overlayClassName="Overlay"
      >
        <CaloriesRecordForm
          onAddRecord={formSubmitHandler}
          onCancel={handleCloseModal}
        />
      </Modal>
      {records && (
        <ListingRecord allRecords={records} removeMeal={removeMeal} />
      )}
      {/* </AppContextProvider> */}

      <Footer handleToggleForm={handleOpenModal} />
    </>
  );
}

export default App;
