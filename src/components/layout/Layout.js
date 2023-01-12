import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="w-full bg-primary-grey flex flex-col items-center ">
      <Navbar />
      <div className=" max-w-screen-lg">{children}</div>
      <Footer />
    </div>
  );
}
