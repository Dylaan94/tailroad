import React, { useContext, useEffect } from "react";
import { Link } from "gatsby";

import logoLarge from "../../../../images/logoLarge.png";
import redEllipse from "../../../../images/redEllipse.png";

// context
import { languageContext } from "../../../../providers/LanguageProvider";

export default function MainHero() {
  const { language } = useContext(languageContext);

  return (
    <>
      <div className="mainHero relative flex h-[calc(100vh-96px)] w-full justify-center bg-white lg:justify-start ">
        <div className="flex h-full w-4/5 items-center justify-center lg:w-[60%] ">
          <div className="mainHero-container flex w-4/5 flex-col pb-16 lg:w-2/3">
            <h1
              style={{ animationDelay: "0.3s" }}
              className="animate__animated animate__fadeInDown text-7xl font-bold text-primary-grey lg:text-9xl"
            >
              tailroad
            </h1>
            <p
              style={{ animationDelay: "0.5s" }}
              className=" animate__animated animate__fadeInUp text-xl font-[300] text-text-grey lg:text-2xl"
            >
              We pride ourselves on crafting unique online experiences.
            </p>
            <p
              style={{ animationDelay: "0.8s" }}
              className="animate__animated animate__fadeInUp text-xl font-[300] text-text-grey lg:text-2xl"
            >
              Experts in web design, development, app development and
              localisation
            </p>
            <span>
              <button
                style={{ animationDelay: "1.1s" }}
                className="animate__animated animate__fadeInUp mt-10 rounded-full bg-primary-blue py-2 px-8 text-lg text-white"
              >
                <Link to="/contact">get a quote</Link>
              </button>
              <button
                style={{ animationDelay: "1.4s" }}
                className="animate__animated animate__fadeInUp mt-10 ml-4 rounded-full py-2 px-8 text-lg text-secondary-blue"
              >
                <Link to="/about">about us</Link>
              </button>
            </span>
          </div>
        </div>
      </div>

      {/* Sun image */}
      <img
        className=" animate__animated animate__fadeIn absolute left-0 top-[40%] mb-[30%] h-[10%] opacity-40 lg:opacity-90 xl:h-[20%] "
        src={redEllipse}
      />

      {/* Logo */}
      <img
        className="animate__animated animate__fadeIn absolute bottom-0 right-0 h-1/4 opacity-40 md:h-1/2 lg:opacity-90 xl:h-[85%]"
        src={logoLarge}
        alt="logo"
      />
    </>
  );
}
