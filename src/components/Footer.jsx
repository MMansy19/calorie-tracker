/* eslint-disable react/prop-types */
import button from "../css/Button.module.css";
function Footer({ handleToggleForm }) {
  return (
    <div className={button.footer}>
      <button className={button.button} onClick={handleToggleForm}>
        Tarck food
      </button>
    </div>
  );
}
export default Footer;
