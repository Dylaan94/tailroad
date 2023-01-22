import React, { useContext } from "react";
import { Link } from "gatsby";

// provider imports
import { languageContext } from "../../providers/LanguageProvider";

// image imports
import logo from "../../images/logo.svg";

// organised as a three-tuple with en, ja, and slug

const content = [
  ["services", "サービス", "services"],
  ["about", "私たちについて", "about"],
  ["contact", "お問い合わせ", "contact"],
];

export default function Navbar() {
  const { language, toggleLanguage } = useContext(languageContext);

  return (
    <nav className="navbar w-screen flex justify-center h-32 bg-primary-black">
      <div className="container max-w-screen-xl w-11/12 sm:w-4/5 flex items-center justify-between ">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="links text-white">
          {content.map((item) => {
            return (
              <Link key={item} className="ml-10" to={`/${item[2]}`}>
                {item[language === "en" ? 0 : 1]}
              </Link>
            );
          })}
          <button
            className="ml-10"
            role="language toggle"
            onClick={() => toggleLanguage()}
          >
            {language === "en" ? "日本語" : "EN"}
          </button>
        </div>
      </div>
    </nav>
  );
}
