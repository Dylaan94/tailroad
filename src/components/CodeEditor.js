import React, { useState, useEffect } from "react";
import EditorTab from "./EditorTab";
import Highlight from "react-highlight";

export default function CodeEditor({ title, content }) {
  // set initial state as the first item in the content array
  const [activeTab, setActiveTab] = useState(content[0].heading);
  const [activeContent, setActiveContent] = useState(content[0].content);
  const [activeLang, setActiveLang] = useState(content[0].lang);

  const handleClick = (e) => {
    setActiveTab(e.target.innerText);
    setActiveContent(
      content.find((item) => item.heading === e.target.innerText).content
    );
    setActiveLang(
      content.find((item) => item.heading === e.target.innerText).lang
    );
  };

  return (
    <div className="code-editor h-full w-full overflow-hidden rounded-3xl bg-editor-primary-light-grey">
      <div className="code-editor-banner flex h-10 w-full items-center justify-center rounded-t-3xl border-b-2 border-editor-secondary-dark-grey bg-editor-primary-dark-grey">
        <h2 className="code-editor-title text-white">{title} </h2>
      </div>
      <div className="code-editor-body flex h-full w-full ">
        <div className="code-editor-sidebar h-full w-12 border-r-2 border-editor-secondary-dark-grey"></div>
        <div className="code-editor-main-section h-full w-full">
          <div className="code-editor-tabs h-10 w-full   bg-editor-primary-dark-grey">
            {content.map((item, i) => {
              let active;
              item.heading === activeTab ? (active = true) : (active = false);

              return (
                <EditorTab
                  key={i}
                  onClick={handleClick}
                  heading={item.heading}
                  active={active}
                />
              );
            })}
          </div>
          <div className="code-editor-content h-full w-full border-editor-secondary-dark-grey">
            <Highlight className={activeLang}>{activeContent}</Highlight>
          </div>
        </div>
      </div>
    </div>
  );
}
