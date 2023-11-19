import React, { useContext, useEffect } from "react";
import { Link } from "gatsby";

import logoLarge from "../../../images/LogoLarge.png";
import redEllipse from "../../../images/redEllipse.png";

// context
import { languageContext } from "../../../providers/LanguageProvider";

export default function MainHero() {
  const { language } = useContext(languageContext);

  return (
    <>
      <div className="mainHero relative z-20  h-[calc(100vh-96px)] w-full ">
        <div className="flex h-full w-1/2 items-center justify-between">
          <img className="mb-[20%] h-2/5" src={redEllipse} />
          <div className="mainHero-container flex w-2/3 flex-col ">
            <h1 className="text-9xl font-bold text-primary-grey">tailroad</h1>
            <p className="text-2xl font-[300] text-text-grey">
              We pride ourselves on crafting unique online experiences.
            </p>
            <p className="text-2xl font-[300] text-text-grey">
              Experts in web design, development, app development and
              localisation
            </p>
            <span>
              <button className="mt-10 rounded-full bg-primary-blue py-2 px-8 text-lg text-white">
                <Link to="/contact">get a quote</Link>
              </button>
              <button className="mt-10 ml-4 rounded-full py-2 px-8 text-lg text-secondary-blue">
                <Link to="/about">about us</Link>
              </button>
            </span>
          </div>
        </div>
      </div>

      <img
        className="absolute bottom-0 right-0 h-[85%]"
        src={logoLarge}
        alt="logo"
      />
    </>
  );
}
