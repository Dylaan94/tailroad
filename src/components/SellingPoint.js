import React from "react";

export default function SellingPoint({ header, description, link }) {
  return (
    <div className="flex flex-col px-6 md:px-4 col-span-1 row-span-1 h-full w-full py-6 border-t-2 md:border-none">
      <h3 className="text-xl font-bold">{header}</h3>
      <div className="seperator md:hidden w-10 border-primary-green border-[1px] "></div>
      <p className="text-text-grey text-sm font-fine ">{description}</p>
      <a className="text-primary-green mt-auto text-end">learn more</a>
    </div>
  );
}
