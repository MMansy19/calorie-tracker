import { forwardRef } from "react";
import PropTypes from "prop-types";

const FormInput = forwardRef((props, ref) => {
  const { text, type, id, value, onChange } = props;
  return (
    <>
      <label htmlFor="content">{text}</label>
      <input
        type={type}
        id={id}
        required
        ref={ref}
        value={value}
        onChange={onChange}
      />
    </>
  );
});

FormInput.displayName = "FormInput";

export default FormInput;

FormInput.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
