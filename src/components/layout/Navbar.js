import React, { useContext, useEffect } from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

// provider imports
import { languageContext } from "../../providers/LanguageProvider";

// image imports
import logo from "../../images/logo.svg";

// organised as a three-tuple with en, ja, and slug

const content = [
  // ["services", "サービス", "services"],
  ["home", "ホーム", ""],
  ["about", "私たちについて", "about"],
  ["contact", "お問い合わせ", "contact"],
];

export default function Navbar() {
  const { language, toggleLanguage } = useContext(languageContext);

  useEffect(() => {
    setAnimations();
  }, []);

  const setAnimations = () => {
    const navbarContainer = document.querySelector(".navbar-container");
    navbarContainer.classList.add("animate__animated", "animate__fadeIn");
    navbarContainer.style.animationDelay = "1s";
  };

  const location = useLocation();

  const isHomePage = () => {
    return location.pathname === "/";
  };

  return (
    <nav
      className={`navbar flex h-24 w-screen justify-center ${
        isHomePage() ? "bg-white " : "bg-primary-grey"
      }`}
    >
      <div className="navbar-container flex w-11/12 items-center justify-between  ">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className={`links ${isHomePage() ? "text-black" : "text-white"}`}>
          {content.map((item) => {
            return (
              <Link key={item} className="ml-10" to={`/${item[2]}`}>
                {item[language === "en" ? 0 : 1]}
              </Link>
            );
          })}
          {/* <button
            className="ml-10"
            role="language toggle"
            onClick={() => toggleLanguage()}
          >
            {language === "en" ? "日本語" : "EN"}
          </button> */}
        </div>
      </div>
    </nav>
  );
}
