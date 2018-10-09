import React from "react";
import "./Button.css";

const Button = ({className, style, children, onClick }) => {
  return (
    <button
      type="submit"
      className={"button " + className }
      style={ style }
      onClick={ onClick }>
      { children }
    </button>
  );
};

export default Button;
