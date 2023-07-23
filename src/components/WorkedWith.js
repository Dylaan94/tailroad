import React, { useContext, useEffect } from "react";

// context imports
import { languageContext } from "../providers/LanguageProvider";

// impage imports
import honyaku from "../images/honyaku.png";
import asoviva from "../images/asoviva.png";
import manabu from "../images/manabu.png";
import queenco from "../images/queenco.png";

export default function WorkedWith() {
  const { language, toggleLanguage } = useContext(languageContext);

  useEffect(() => {
    const handleScroll = () => {
      const workedWith = document.querySelector(".worked-with");

      const { top, bottom } = workedWith.getBoundingClientRect();
      const elementHeight = bottom - top;
      const inView =
        top + elementHeight / 3 >= 0 &&
        bottom - elementHeight / 3 <= window.innerHeight;
      if (inView) {
        workedWith.classList.remove("opacity-0");

        // workedWith animation
        workedWith.classList.add("animate__animated", "animate__fadeIn");

        // Working with heading animation
        const workedWithHeading = document.querySelector(
          ".worked-with-heading"
        );
        workedWithHeading.classList.add(
          "animate__animated",
          "animate__fadeInDown"
        );
        workedWithHeading.style.animationDelay = "0.5s";
        // Working with subheading animation
        const workedWithSubHeading = document.querySelector(
          ".worked-with-sub-heading"
        );
        workedWithSubHeading.classList.add(
          "animate__animated",
          "animate__fadeIn"
        );
        workedWithSubHeading.style.animationDelay = "0.7s";
        // company images animation
        const companyImages = document.querySelectorAll(".company-image");
        let index = 1;
        companyImages.forEach((image) => {
          image.classList.add("animate__animated", "animate__fadeInUp");
          image.style.animationDelay = `${index}s`;
          index += 0.3;
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const content = [
    ["Companies we've worked with", "私たちが協力した会社"],
    ["building success together", "一緒に成功を築く"],
  ];

  return (
    <div className="worked-with my-8 flex w-full justify-center bg-primary-grey py-20 opacity-0">
      <div className="container flex flex-col">
        <h2 className="worked-with-heading text-center text-3xl text-white">
          {language === "en" ? content[0][0] : content[0][1]}
        </h2>
        <h3 className="worked-with-sub-heading text-center text-primary-green">
          {language === "en" ? content[1][0] : content[1][1]}
        </h3>
        <div className="company-images flex flex-col flex-wrap items-center justify-between py-6 md:flex-row">
          <img
            className="company-image h-24 py-4 lg:py-0"
            src={honyaku}
            alt="honyaku"
          />
          <img
            className="company-image h-24 py-4 lg:py-0"
            src={asoviva}
            alt="asoviva"
          />
          <img
            className="company-image h-24 py-4 lg:py-0"
            src={manabu}
            alt="manabu"
          />
          <img
            className="company-image h-24 py-4 lg:py-0"
            src={queenco}
            alt="queenco"
          />
        </div>
      </div>
    </div>
  );
}