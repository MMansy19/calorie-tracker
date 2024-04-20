/* eslint-disable react/prop-types */
import button from "../css/Button.module.css";
function Button({ handleToggleForm }) {
  return (
    <div className={button.footer}>
      <button
        className={`${button["submit-button"]} ${button.mainButton}`}
        onClick={handleToggleForm}
      >
        Add a meal
      </button>
    </div>
  );
}
export default Button;
