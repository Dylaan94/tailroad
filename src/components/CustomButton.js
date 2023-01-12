import React from "react";

const ButtonType = {
  primary: "bg-primary-green text-white",
  secondary: "bg-primary-grey text-white",
};

export default function CustomButton({ text, clicked, type = "primary" }) {
  return (
    <button
      onClick={clicked}
      className={"px-6 py-3 mr-8 rounded-sm" + " " + ButtonType[type]}
    >
      {text}
    </button>
  );
}
