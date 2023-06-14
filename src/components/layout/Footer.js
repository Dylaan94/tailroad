import React, { useContext } from "react";
import { Link } from "gatsby";

// image imports
import logo from "../../images/logo.svg";

// context imports
import { languageContext } from "../../providers/LanguageProvider";

export default function Footer() {
  const { language, toggleLanguage } = useContext(languageContext);

  const content = [
    [
      "a web design based in the midlands",
      "ミッドランドに拠点を置くウェブデザイン会社",
    ],
    ["links", "リンク"],
    ["home", "ホーム"],
    ["about", "私たちについて"],
    ["contact", "お問い合わせ"],
  ];

  return (
    <div className="footer margin-t flex w-full justify-center pt-8 pb-16 text-white ">
      <div className="container flex w-11/12 max-w-screen-xl flex-col sm:w-4/5">
        <div className="footer-logo mb-4">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer-content flex justify-between">
          <div className="footer-left w-1/3">
            <h2 className="footer-heading">tailroad</h2>
            <p className="footer-text">
              {language === "en" ? content[0][0] : content[0][1]}
            </p>
            <p className="hover:cursor-pointer hover:text-primary-green hover:underline">
              <a href="mailto:dylan@tailroad.com">dylan@tailroad.com</a>
            </p>
          </div>
          <div className="footer-right w-1/4">
            <h2 className="footer-heading text-2xl underline decoration-primary-green">
              {language === "en" ? content[1][0] : content[1][1]}
            </h2>
            <ul className="footer-list">
              <Link to="/">
                <li className="footer-list-item hover:text-primary-green">
                  {language === "en" ? content[2][0] : content[2][1]}
                </li>
              </Link>
              <Link to="/about">
                <li className="footer-list-item hover:text-primary-green">
                  {language === "en" ? content[3][0] : content[3][1]}
                </li>
              </Link>

              <Link to="/contact">
                <li className="footer-list-item hover:text-primary-green">
                  {language === "en" ? content[4][0] : content[4][1]}
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
