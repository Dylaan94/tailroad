import React from "react";

export default function Banner({ header, subheader, content, colour }) {
  return (
    <div className="flex w-full items-center justify-center py-10">
      {console.log(colour)}
      <div className=" w-11/12 text-center text-white md:w-2/3 lg:w-1/2">
        {/* checks if colour has been given and sets text colour */}
        <h1
          className={`text-xl font-normal text-${colour ? colour : "white"} `}
        >
          {header}
        </h1>
        <h3 className="py-4 text-4xl font-bold leading-snug sm:text-5xl">
          {subheader}
        </h3>

        <p className="text-lg font-thin">{content}</p>
      </div>
    </div>
  );
}
