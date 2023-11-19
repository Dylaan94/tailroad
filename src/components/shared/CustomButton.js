import React from "react";

const ButtonType = {
  primary: "bg-primary-green text-white",
  secondary: "bg-primary-grey text-white",
};

export default function CustomButton({ text, handleClick, type = "primary" }) {
  return (
    <button
      onClick={handleClick}
      className={"mr-8 rounded-sm px-6 py-3" + " " + ButtonType[type]}
    >
      {text}
    </button>
  );
}
