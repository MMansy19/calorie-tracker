/* eslint-disable react/prop-types */
import CaloriesRecord from "./CaloriesRecord";
import styles from "../css/RecordList.module.css";
function RecordList({ records }) {
  if (records.length === 0) {
    return (
      <div className={styles.placeholder}>
        <p className={styles.noRecords}> No records found</p>
      </div>
    );
  }
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
export default RecordList;
