import { Link } from "gatsby";
import React, { useEffect } from "react";
import animations from "./animations";

export default function Banner({ colour }) {
  // handle scroll and animations
  useEffect(animations, []);

  const content = {
    header: "navigate the road to business growth",
    subheader: "unleash your company's full potential with tailroad",
    content:
      "we empower businesses on their journey to success. Discover our expert services in our interactive IDE below. Click on the tabs to explore how we can help your business thrive",
    link: "/contact",
  };

  return (
    <div className="banner flex w-full items-center justify-center bg-primary-grey py-24 opacity-0">
      {console.log(colour)}
      <div className=" w-11/12 text-center text-white md:w-2/3 lg:w-1/2">
        {/* checks if colour has been given and sets text colour */}
        <h1
          className={`bannerHeader text-xl font-normal text-${
            colour ? colour : "white"
          } `}
        >
          {content.header}
        </h1>
        <h3 className="bannerSubheader py-4 text-4xl font-bold leading-snug sm:text-5xl">
          {content.subheader}
        </h3>

        <p className="bannerContent text-lg font-thin">{content.content}</p>

        {content?.link && (
          <p className="bannerLink pt-2">
            or{" "}
            <Link className="text-xl text-primary-green" to={content.link}>
              {" "}
              contact us{" "}
            </Link>{" "}
            for free a quote
          </p>
        )}
      </div>
    </div>
  );
}
