import React, { useEffect, useState } from "react";
import CodeEditor from "../../shared/CodeEditor";

import {
  content,
  contentSmall,
  contentMobile,
} from "../../../editorText/content";

export default function OurServices() {
  // initialise content to contentSmall
  const [content, setContent] = useState(contentSmall);

  useEffect(() => {
    const handleScroll = () => {
      const ourServicesEditor = document.querySelector(".services-editor");
      // animation starts when element is 50% in view
      const { top, bottom } = ourServicesEditor.getBoundingClientRect();
      const elementHeight = bottom - top;
      const inView =
        top + elementHeight / 3 >= 0 &&
        top + elementHeight / 3 <= window.innerHeight;
      if (inView) {
        ourServicesEditor.classList.remove("opacity-0");
        // ourServices animation
        ourServicesEditor.classList.add(
          "animate__animated",
          "animate__zoomInDown"
        );
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleResize = () => {
    if (window.innerWidth < 640) {
      console.log("contentMobile");
      setContent(contentMobile);
    } else {
      console.log("contentSmall");
      setContent(contentSmall);
    }
  };

  // change content to contentMobile if screen width is less than 640px
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="our-services flex h-full w-11/12 items-center justify-around sm:h-[80vh] ">
      <div className="services-editor opacity-0 sm:h-[500px] sm:w-[700px] md:h-[580px] md:w-[850px]">
        <CodeEditor title="tailroad.features" content={content} />
      </div>
    </div>
  );
}
