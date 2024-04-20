/* eslint-disable react/prop-types */
// CaloriesRecordForm.js
import { useEffect, useState, useContext, useRef } from "react";
import styles from "../css/CaloriesRecordForm.module.css";
import button from "../css/Button.module.css";
import { AppContext } from "../app-context";
import FormInput from "./common/FormInput";

function CaloriesRecordForm(props) {
  const { totalCalories, currentDate, setCurrentDate } = useContext(AppContext);
  const [isFormValid, setIsFormValid] = useState(false);
  const contentRef = useRef();
  const DEFAULT_VALUE = {
    date: currentDate,
    meal: "Breakfast",
    content: "",
    calories: "0",
  };
  const [mealRecord, setMealRecord] = useState(DEFAULT_VALUE);
  useEffect(() => {
    if (!mealRecord.content) {
      contentRef.current.focus();
    }
    const validateForm = () => {
      return mealRecord.content && mealRecord.calories;
    };

    setIsFormValid(validateForm());
  }, [mealRecord.content, mealRecord.calories]);

  const handleAddRecord = (e) => {
    e.preventDefault();

    // Add the record with the updated state values
    props.onAddRecord({
      date: new Date(mealRecord.date),
      meal: mealRecord.meal.toLowerCase(),
      content: mealRecord.content,
      calories: parseInt(mealRecord.calories),
    });

    // Reset form fields
    setMealRecord(DEFAULT_VALUE);
  };

  return (
    <form className={styles.form} onSubmit={handleAddRecord}>
      <p className={styles.warning}>
        You have spent <span className={styles.bolded}> {totalCalories}</span>{" "}
        calories
      </p>
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        required
        value={mealRecord.date}
        onChange={(e) => {
          setMealRecord({ ...mealRecord, date: e.target.value });
          setCurrentDate(e.target.value);
        }}
      />

      <label htmlFor="meal">Meal:</label>
      <select
        id="meal"
        required
        value={mealRecord.meal}
        onChange={(e) => setMealRecord({ ...mealRecord, meal: e.target.value })}
      >
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snack">Snack</option>
      </select>
      <FormInput
        text={"Content:"}
        type={"text"}
        id={"content"}
        value={mealRecord.content}
        onChange={(e) =>
          setMealRecord({ ...mealRecord, content: e.target.value })
        }
        ref={contentRef}
      />
      <FormInput
        text={"Calories:"}
        type={"number"}
        id={"calories"}
        value={mealRecord.calories}
        onChange={(e) =>
          setMealRecord({ ...mealRecord, calories: e.target.value })
        }
      />

      <div className={button.footer}>
        <button
          disabled={!isFormValid}
          className={button["submit-button"]}
          type="submit"
        >
          Add Record
        </button>
        <button
          className={button["cancel-button"]}
          type="button"
          onClick={props.onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default CaloriesRecordForm;
