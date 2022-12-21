import React from "react";

/**
 * @param {React.InputHTMLAttributes<HTMLInputElement>=} props - Props for the input element
 * @returns {JSX.Element}
 * @constructor
 */
export function TextInput({ ...props }) {
  return (
    <>
      <label>
        {props.title}:
        <input style={{ width: "100%" }} {...props} />
      </label>
      <br />
    </>
  );
}
