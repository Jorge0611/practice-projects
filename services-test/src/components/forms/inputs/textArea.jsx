import React from "react";

/**
 * @param {string} label
 * @param {React.InputHTMLAttributes<HTMLTextAreaElement> | undefined} props
 * @returns {JSX.Element}
 * @constructor
 */
export function TextArea({ ...props }) {
  return (
    <>
      <label>
        {props.title}:
        <textarea style={{ width: "100%" }} {...props} />
      </label>
      <br />
    </>
  );
}
