import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

// providers
import LanguageProvider from "../../providers/LanguageProvider";

export default function Layout({ children }) {
  return (
    <LanguageProvider>
      {/* {console.log(children)}
      {console.log(children.map((child) => console.log(child)))} */}
      <div className="w-full bg-primary-grey flex flex-col items-center ">
        <Navbar />
        {children}
        <Footer />
      </div>
    </LanguageProvider>
  );
}
