import React from "react";
import { Link } from "react-router-dom";
import LocaleContext from "../../contexts/LocaleContext";

function Footer() {
  const { theme, language } = React.useContext(LocaleContext);

  return (
    <p
     className="text-center p-4 mb-0">
     {language === "id" ? "Hak Cipta" : "Copyright"}
      © 2022 -<Link to="/"
      className={`text-${theme === "dark" ? "dark" : "white"} text-decoration-none fw-bold`}>
      {language === "id" ? " Aplikasi Catatan Pribadi " : " Personal Notes App "}</Link>
      {language === "id" ? "oleh " : "by"} Ekorahy
    </p>
  );
}

export default Footer;
