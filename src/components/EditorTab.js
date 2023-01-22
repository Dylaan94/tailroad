import React from "react";

export default function EditorTab({ heading, onClick, active }) {
  return (
    <button
      className={`h-full w-40 border-r-2 border-b-2 border-editor-secondary-dark-grey  text-sm text-secondary-grey ${
        active
          ? " border-b-0 bg-editor-primary-light-grey "
          : " bg-editor-primary-dark-grey "
      }}`}
      onClick={onClick}
    >
      {heading}
    </button>
  );
}
