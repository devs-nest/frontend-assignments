import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ onChange, label, ...otherProps }) => (
  <div className="group">
    <input
      type="text"
      className="form-input"
      onChange={onChange}
      {...otherProps}
    />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
