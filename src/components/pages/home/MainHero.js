import React from "react";

// images
import crossing from "../../../images/crossing.jpg";
import tailroad from "../../../images/tailroad.png";

export default function MainHero() {
  return (
    // container
    <div className="mainHero-container flex flex-col justify-center items-center py-20">
      {/* main text section */}
      <div className="w-2/3 ">
        <p className="text-secondary-grey text-lg py-3">
          a web design agency based in the midlands
        </p>

        {/* logo section */}

        <img src={tailroad} alt="tailroad logo" />
      </div>
      {/* button section */}
      <div>
        <button> get a quote</button>
        <button> about us </button>
      </div>
    </div>
  );
}
