import React, { useContext, useEffect } from "react";

// context imports
import { languageContext } from "../../../../providers/LanguageProvider";

// image imports
import honyaku from "../../../../images/honyaku.png";
import asoviva from "../../../../images/asoviva.png";
import manabu from "../../../../images/manabu.png";
import queenco from "../../../../images/queenco.png";
import crest from "../../../../images/crest.jpg";
import hachinohe from "../../../../images/hachinohe.svg";

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

  const companies = [
    { image: honyaku, alt: "honyaku" },
    { image: crest, alt: "crest" },
    { image: asoviva, alt: "asoviva" },
    { image: hachinohe, alt: "hachinohe" },
    { image: manabu, alt: "manabu" },
    { image: queenco, alt: "queenco" },
  ];

  return (
    <div className=" flex  w-full justify-center bg-white py-28  ">
      <div className="worked-with container flex flex-col opacity-0">
        <h2 className="worked-with-heading text-center text-3xl text-primary-grey">
          {language === "en" ? content[0][0] : content[0][1]}
        </h2>
        <h3 className="worked-with-sub-heading text-center text-lg text-primary-green">
          {language === "en" ? content[1][0] : content[1][1]}
        </h3>
        <div className="company-images flex flex-wrap items-center justify-around  py-12">
          {companies.map((company) => {
            return (
              <img
                className="company-image h-16 py-4 px-2 lg:py-0"
                src={company.image}
                alt={company.alt}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
