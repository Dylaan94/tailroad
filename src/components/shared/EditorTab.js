import React from "react";

export default function EditorTab({ heading, onClick, active }) {
  return (
    <button
      className={`h-full w-full border-r-2 border-b-2 border-editor-secondary-dark-grey py-2 text-sm  text-secondary-grey sm:w-40 ${
        active
          ? " border-b-0 border-t-2 border-primary-green bg-editor-primary-light-grey "
          : " bg-editor-primary-dark-grey "
      }}`}
      onClick={onClick}
    >
      {heading}
    </button>
  );
}
