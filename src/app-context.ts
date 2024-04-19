import { createContext } from "react";
import { getTodayDate } from "./utils";

export const AppContext = createContext({
  currentDate: getTodayDate,
  setCurrentDate: (val) => {},
  totalCalories: 0,
  setTotalCalories: (val) => {},
});
