// /* eslint-disable react/prop-types */
import CaloriesRecord from "./CaloriesRecord";
import styles from "../css/RecordList.module.css";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
function RecordList({ records, removeMeal }) {
  if (records.length === 0) {
    return (
      <div className={styles.placeholder}>
        <img
          src="src\assets\not-found.svg"
          alt="No records found Icon"
          width="200"
        />
        <p className={styles.noRecords}> No records found for this date</p>{" "}
      </div>
    );
  } else {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeOut",
            opacity: { duration: 0.6 },
            y: { duration: 0.5 },
          }}
        >
          {records.map((record) => (
            <CaloriesRecord
              key={record.id}
              {...record}
              date={new Date(record.date)}
              removeMeal={removeMeal}
            />
          ))}
        </motion.div>
      </>
    );
  }
}
export default RecordList;

RecordList.propTypes = {
  records: PropTypes.arrayOf(PropTypes.object).isRequired,
};
