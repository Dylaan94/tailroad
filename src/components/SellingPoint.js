import React from "react";

export default function SellingPoint({ header, description, link }) {
  return (
    <div className="flex flex-col px-10 col-span-1 row-span-1 h-full w-full py-6">
      <h3 className="text-xl font-bold">{header}</h3>
      <p className="text-text-grey text-sm font-fine ">{description}</p>
      <a className="text-primary-green mt-auto text-end">learn more</a>
    </div>
  );
}
