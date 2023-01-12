import React, { createContext, useState } from "react";

export const languageContext = createContext();

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ja" : "en");
  };

  return (
    <languageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </languageContext.Provider>
  );
}
