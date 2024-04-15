/* eslint-disable react/prop-types */
// CaloriesRecordForm.js
import { useEffect, useState } from "react";
import styles from "../css/CaloriesRecordForm.module.css";
import button from "../css/Button.module.css";
import { getTodayDate } from "../utils";
const DEFAULT_VALUE = {
  date: new Date(getTodayDate()),
  meal: "Breakfast",
  content: "",
  calories: "",
};

function CaloriesRecordForm(props) {
  const [isFormValid, setIsFormValid] = useState(false);
  const [mealRecord, setMealRecord] = useState(DEFAULT_VALUE);

  useEffect(() => {
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
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        required
        value={mealRecord.date}
        onChange={(e) => setMealRecord({ ...mealRecord, date: e.target.value })}
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

      <label htmlFor="content">Content:</label>
      <input
        type="text"
        id="content"
        required
        value={mealRecord.content}
        onChange={(e) =>
          setMealRecord({ ...mealRecord, content: e.target.value })
        }
      />

      <label htmlFor="calories">Calories:</label>
      <input
        type="number"
        id="calories"
        min={0}
        value={mealRecord.calories}
        onChange={(e) =>
          setMealRecord({ ...mealRecord, calories: e.target.value })
        }
      />

      <div className={button.footer}>
        <button disabled={!isFormValid} className={button.button} type="submit">
          Add Record
        </button>
        <button
          className={button.button}
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
