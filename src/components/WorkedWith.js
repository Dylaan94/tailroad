import React, { useContext } from "react";

// context imports
import { languageContext } from "../providers/LanguageProvider";

// impage imports
import honyaku from "../images/honyaku.png";
import asoviva from "../images/asoviva.png";
import manabu from "../images/manabu.png";
import queenco from "../images/queenco.png";

export default function WorkedWith() {
  const { language, toggleLanguage } = useContext(languageContext);

  const content = [
    ["Companies we've worked with", "私たちが協力した会社"],
    ["building success together", "一緒に成功を築く"],
  ];

  return (
    <div className="worked-with my-8 flex w-full justify-center bg-primary-grey py-20">
      <div className="container flex flex-col">
        <h2 className="worked-with-heading text-center text-3xl text-white">
          {language === "en" ? content[0][0] : content[0][1]}
        </h2>
        <h3 className="worked-with-sub-heading text-center text-primary-green">
          {language === "en" ? content[1][0] : content[1][1]}
        </h3>
        <div className="company-images flex flex-col flex-wrap items-center justify-between py-6 md:flex-row">
          <img className="h-24 py-4 lg:py-0" src={honyaku} alt="honyaku" />
          <img className="h-24 py-4 lg:py-0" src={asoviva} alt="asoviva" />
          <img className="h-24 py-4 lg:py-0" src={manabu} alt="manabu" />
          <img className="h-24 py-4 lg:py-0" src={queenco} alt="queenco" />
        </div>
      </div>
    </div>
  );
}
