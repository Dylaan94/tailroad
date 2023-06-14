import React, { useContext } from "react";
import { Link } from "gatsby";

// images
import tailroad from "../../../images/tailroad.png";

// components
import CustomButton from "../../CustomButton";

// context
import { languageContext } from "../../../providers/LanguageProvider";

export default function MainHero() {
  const { language } = useContext(languageContext);

  const content = [
    [
      "a web design agency based in the midlands",
      "ミッドランドに拠点を置くウェブデザイン会社",
    ],
    ["get a quote", "お見積もり"],
    ["about us", "私たちについて"],
  ];

  return (
    // container
    <div className="mainHero-container flex h-[85vh] max-w-screen-xl flex-col items-center pb-36 pt-28">
      {/* main text section */}
      <div className="w-2/3 ">
        <p className="py-3 text-lg text-secondary-grey">
          {language === "en" ? content[0][0] : content[0][1]}
        </p>
        {/* logo section */}
        <img src={tailroad} alt="tailroad logo" />
      </div>
      {/* button section */}
      <div className="w-2/3 py-12 ">
        <Link to={"/contact"}>
          <CustomButton
            text={language === "en" ? content[1][0] : content[1][1]}
            className="mr-4"
            type="primary"
          />
        </Link>

        <Link to={"/about"}>
          <CustomButton
            text={language === "en" ? content[2][0] : content[2][1]}
            type="secondary"
          />
        </Link>
      </div>
    </div>
  );
}
