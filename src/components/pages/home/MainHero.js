import React, { useContext, useEffect } from "react";
import { Link } from "gatsby";

// library imports
import "animate.css";

// images
import tailroad from "../../../images/tailroad.png";

// components
import CustomButton from "../../CustomButton";

// context
import { languageContext } from "../../../providers/LanguageProvider";

export default function MainHero() {
  const { language } = useContext(languageContext);

  useEffect(() => {
    setAnimations();
  }, []);

  const content = [
    [
      "a web design agency based in the midlands",
      "ミッドランドに拠点を置くウェブデザイン会社",
    ],
    ["get a quote", "お見積もり"],
    ["about us", "私たちについて"],
  ];

  const setAnimations = () => {
    // animate logo image
    document
      .querySelector(".logoImg")
      .classList.add("animate__animated", "animate__backInDown");
    // animate hero text
    const heroText = document.querySelector(".heroText");
    heroText.classList.add("animate__animated", "animate__slideInLeft");
    heroText.style.animationDelay = "1.3s";
    // animation quote button
    const quoteBtn = document.querySelector(".quoteBtn");
    quoteBtn.classList.add("animate__animated", "animate__fadeInUp");
    quoteBtn.style.animationDelay = "1.5s";
    // animate about button
    const aboutBtn = document.querySelector(".aboutBtn");
    aboutBtn.classList.add("animate__animated", "animate__fadeInUp");
    aboutBtn.style.animationDelay = "1.7s";
  };

  return (
    // container
    <div className="mainHero-container flex h-[85vh] max-w-screen-xl flex-col items-center pb-36 pt-28">
      {/* main text section */}
      <div className="w-2/3 ">
        <p className="heroText py-3 text-lg text-secondary-grey">
          {language === "en" ? content[0][0] : content[0][1]}
        </p>
        {/* logo section */}
        <img className=" logoImg" src={tailroad} alt="tailroad logo" />
      </div>
      {/* button section */}
      <div className="flex w-2/3 py-12">
        <div className="quoteBtn mr-4">
          <Link to={"/contact"}>
            <CustomButton
              text={language === "en" ? content[1][0] : content[1][1]}
              type="primary"
            />
          </Link>
        </div>

        <div className="aboutBtn">
          <Link to={"/about"} className="aboutBtn">
            <CustomButton
              text={language === "en" ? content[2][0] : content[2][1]}
              type="secondary"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
