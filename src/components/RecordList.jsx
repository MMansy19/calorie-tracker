// /* eslint-disable react/prop-types */
import CaloriesRecord from "./CaloriesRecord";
import styles from "../css/RecordList.module.css";
import PropTypes from "prop-types";
import { motion, Reorder } from "framer-motion";
import { CiCalendarDate } from "react-icons/ci";
import { GiMeal } from "react-icons/gi";
import { FaQuestion } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { TfiSearch } from "react-icons/tfi";

// eslint-disable-next-line react/prop-types
function RecordList({ records, removeMeal, setRecords }) {
  if (records.length === 0) {
    return (
      <div className={styles.placeholder}>
        <TfiSearch className={styles.noRecordsIcon} />
        <img />
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
            <ul className={styles.recordTitle}>
              <li className={styles.CiCalendarDate}>
                <CiCalendarDate />
              </li>
              <li>
                <FaQuestion />
              </li>
              <li>
                <GiMeal className={styles.GiMeal} />
              </li>
              <li>
                <svg
                  width="30px"
                  height="30px"
                  className={styles.calorieIcon}
                  viewBox="0 0 24.00 24.00"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                  transform="rotate(0)"
                  strokeWidth="0.8160000000000001"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#CCCCCC"
                    strokeWidth="0.9600000000000002"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M14.5 10.0003C14.5 9.20875 15.5528 8.99895 15.8321 9.73957C16.5077 11.5311 17 13.1337 17 14.0002C17 16.7616 14.7614 19.0002 12 19.0002C9.23858 19.0002 7 16.7616 7 14.0002C7 13.0693 7.56822 11.2887 8.32156 9.33698C9.29743 6.80879 9.78536 5.54469 10.3877 5.4766C10.5804 5.45482 10.7907 5.49399 10.9626 5.58371C11.5 5.86413 11.5 7.24285 11.5 10.0003C11.5 10.8287 12.1716 11.5003 13 11.5003C13.8284 11.5003 14.5 10.8287 14.5 10.0003Z"
                      stroke="#ffffff"
                    ></path>{" "}
                    <path
                      d="M11 19L10.7372 18.343C10.2816 17.204 10.4737 15.9079 11.24 14.95V14.95C11.6296 14.463 12.3704 14.463 12.76 14.95V14.95C13.5263 15.9079 13.7184 17.204 13.2628 18.343L13 19"
                      stroke="#ffffff"
                    ></path>{" "}
                  </g>
                </svg>
              </li>
              <li>
                <MdDelete />
              </li>
            </ul>{" "}
            <div className={styles.group}>
              {records.map((record) => (
                <Reorder.Item
                  key={record.id}
                  value={record}
                  whileDrag={{
                    scale: 0.9,
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
            </div>
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
