/* eslint-disable react/prop-types */
// import { useState, useEffect } from "react";
import CaloriesRecord from "./CaloriesRecord";
// import { getUser } from "../utils";
import styles from "../css/RecordList.module.css";
function RecordList({ records }) {
  // const [user, setUser] = useState({});

  // useEffect(() => {
  //   getUser(setUser);
  // }, []);

  if (records.length === 0) {
    return (
      <div className={styles.placeholder}>
        <img
          src="src\assets\not-found.svg"
          alt="No records found Icon"
          width="200"
        />
        <p className={styles.noRecords}> No records found for this date</p>
        {/* {user.first_name}
        {"    "}
        {user.last_name}
        {"    "}
        {user.id} */}
      </div>
    );
  } else {
    return (
      <>
        {records.map((record) => (
          <CaloriesRecord
            key={record.id}
            {...record}
            date={new Date(record.date)}
          />
        ))}
      </>
    );
  }
}
export default RecordList;
