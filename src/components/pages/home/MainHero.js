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
      <div className="mainHero relative flex h-[calc(100vh-96px)] w-full justify-center bg-white lg:justify-start ">
        <div className="flex h-full w-4/5 items-center justify-center lg:w-[60%] ">
          <div className="mainHero-container flex w-4/5 flex-col pb-16 lg:w-2/3">
            <h1 className="text-7xl font-bold text-primary-grey lg:text-9xl">
              tailroad
            </h1>
            <p className="text-xl font-[300] text-text-grey lg:text-2xl">
              We pride ourselves on crafting unique online experiences.
            </p>
            <p className="text-xl font-[300] text-text-grey lg:text-2xl">
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

      {/* Sun image */}
      <img
        className=" absolute left-0 top-[40%] mb-[30%] h-[10%] opacity-40 lg:opacity-90 xl:h-[20%] "
        src={redEllipse}
      />

      {/* Logo */}
      <img
        className="absolute bottom-0 right-0 h-1/4 opacity-40 md:h-1/2 lg:opacity-90 xl:h-[85%]"
        src={logoLarge}
        alt="logo"
      />
    </>
  );
}
