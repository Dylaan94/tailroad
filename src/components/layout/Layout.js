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
      <div className="flex w-full flex-col items-center bg-primary-grey ">
        <Navbar />
        {children}
        <Footer />
      </div>
    </LanguageProvider>
  );
}
