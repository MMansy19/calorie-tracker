// /* eslint-disable react/prop-types */
import CaloriesRecord from "./CaloriesRecord";
import styles from "../css/RecordList.module.css";
import PropTypes from "prop-types";
import { motion, AnimatePresence, Reorder } from "framer-motion";

// eslint-disable-next-line react/prop-types
function RecordList({ records, removeMeal, setRecords }) {
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
          <Reorder.Group
            as="ol"
            axis="y"
            values={records}
            onReorder={setRecords}
          >
            <AnimatePresence>
              {records.map((record) => (
                <Reorder.Item
                  key={record.id}
                  value={record}
                  whileDrag={{
                    scale: 0.85,
                    boxShadow: "0px 1px 8px rgba(0, 0, 0, 0.4)",
                  }}
                >
                  <CaloriesRecord
                    key={record.id}
                    {...record}
                    date={new Date(record.date)}
                    removeMeal={removeMeal}
                  />
                </Reorder.Item>
              ))}
            </AnimatePresence>
          </Reorder.Group>
        </motion.div>
      </>
    );
  }
}
export default RecordList;

RecordList.propTypes = {
  records: PropTypes.arrayOf(PropTypes.object).isRequired,
};
