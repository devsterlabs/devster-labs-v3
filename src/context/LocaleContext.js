import React, { createContext, useEffect, useState } from "react";
import { de } from "../locales/de";
import { en } from "../locales/en";
export const LocaleContext = createContext();

// Create the Provider
export const LocaleProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem("locale") || "en");
  const [trans, setTrans] = useState({ ...en });
  const updateLang = (lg) => {
    localStorage.setItem("locale", lg);
    setLang(lg);
  };

  const t = (sent) => {
    return trans?.[sent] || sent;
  };

  useEffect(() => {
    if (lang === "en") {
      setTrans({ ...en });
    } else {
      setTrans({ ...de });
    }
  }, [lang]);

  return (
    <LocaleContext.Provider value={{ t, updateLang }}>
      {children}
    </LocaleContext.Provider>
  );
};
