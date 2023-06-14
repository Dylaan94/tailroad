import React from "react";

// images
import tailroad from "../../../images/tailroad.png";

// components
import CustomButton from "../../CustomButton";

export default function MainHero() {
  return (
    // container
    <div className="mainHero-container flex h-[85vh] max-w-screen-xl flex-col items-center pb-36 pt-28">
      {/* main text section */}
      <div className="w-2/3 ">
        <p className="py-3 text-lg text-secondary-grey">
          a web design agency based in the midlands
        </p>
        {/* logo section */}
        <img src={tailroad} alt="tailroad logo" />
      </div>
      {/* button section */}
      <div className="w-2/3 py-12 ">
        <CustomButton text="get a quote" className="mr-4" type="primary" />
        <CustomButton text="about us" type="secondary" />
      </div>
    </div>
  );
}
