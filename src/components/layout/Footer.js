import React, { useContext, useEffect } from "react";
import { Link } from "gatsby";

// image imports
import logo from "../../images/logo.svg";

// context imports
import { languageContext } from "../../providers/LanguageProvider";

export default function Footer() {
  const { language, toggleLanguage } = useContext(languageContext);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector(".footer");
      const { top, bottom } = footer.getBoundingClientRect();
      const elementHeight = bottom - top;
      const inView =
        top + elementHeight / 3 >= 0 &&
        bottom - elementHeight / 3 <= window.innerHeight;
      if (inView) {
        footer.classList.remove("opacity-0");
        // footer animation
        footer.classList.add("animate__animated", "animate__fadeIn");
        // footer heading animation
        const footerHeading = document.querySelector(".footer-heading");
        footerHeading.classList.add("animate__animated", "animate__fadeIn");
        footerHeading.style.animationDelay = "0.5s";
        // footer text animation
        const footerText = document.querySelector(".footer-text");
        footerText.classList.add("animate__animated", "animate__fadeIn");
        footerText.style.animationDelay = "0.7s";
        // footer mail animation
        const footerMail = document.querySelector(".footer-mail");
        footerMail.classList.add("animate__animated", "animate__fadeIn");
        footerMail.style.animationDelay = "0.9s";

        // footer links animation
        const footerLinks = document.querySelector(".footer-links");
        footerLinks.classList.add("animate__animated", "animate__fadeIn");
        footerLinks.style.animationDelay = "1.1s";

        // footer list animation
        const footerList = document.querySelectorAll(".footer-list-item");
        let index = 1;
        footerList.forEach((item) => {
          item.classList.add("animate__animated", "animate__fadeIn");
          item.style.animationDelay = `${index}s`;
          index += 0.3;
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div className="footer margin-t flex w-full justify-center pt-8 pb-16 text-white opacity-0 ">
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
            <p className="footer-mail hover:cursor-pointer hover:text-primary-green hover:underline">
              <a href="mailto:dylan@tailroad.com">dylan@tailroad.com</a>
            </p>
          </div>
          <div className="footer-right w-1/4">
            <h2 className="footer-links text-2xl underline decoration-primary-green">
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
