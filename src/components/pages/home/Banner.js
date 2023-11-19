import React, { useEffect } from "react";

export default function Banner({ header, subheader, content, colour }) {
  // handle scroll and animations
  useEffect(() => {
    const handleScroll = () => {
      const banner = document.querySelector(".banner");
      const { top, bottom } = banner.getBoundingClientRect();
      const inView = top >= 0 && bottom <= window.innerHeight;
      if (inView) {
        const banner = document.querySelector(".banner");
        banner.classList.remove("opacity-0");
        // banner header animation

        const bannerHeader = document.querySelector(".bannerHeader");
        bannerHeader.classList.add("animate__animated", "animate__fadeInDown");
        // banner subheader animation
        const bannerSubheader = document.querySelector(".bannerSubheader");
        bannerSubheader.classList.add(
          "animate__animated",
          "animate__fadeInLeft"
        );
        bannerSubheader.style.animationDelay = "0.5s";
        // banner content animation
        const bannerContent = document.querySelector(".bannerContent");
        bannerContent.classList.add("animate__animated", "animate__fadeInUp");
        bannerContent.style.animationDelay = "0.7s";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="banner flex w-full items-center justify-center bg-primary-grey py-10 opacity-0">
      {console.log(colour)}
      <div className=" w-11/12 text-center text-white md:w-2/3 lg:w-1/2">
        {/* checks if colour has been given and sets text colour */}
        <h1
          className={`bannerHeader text-xl font-normal text-${
            colour ? colour : "white"
          } `}
        >
          {header}
        </h1>
        <h3 className="bannerSubheader py-4 text-4xl font-bold leading-snug sm:text-5xl">
          {subheader}
        </h3>

        <p className="bannerContent text-lg font-thin">{content}</p>
      </div>
    </div>
  );
}
