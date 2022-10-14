import React from "react";
import LocaleContext from "../../contexts/LocaleContext";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";

function ToggleTheme() {
  const { theme, toggleTheme } = React.useContext(LocaleContext);

  return (
    <>
      <button
       onClick={toggleTheme} 
       className={`btn btn-link nav-link me-1 text-${theme} fw-bold`}>
        {theme === "dark" ? <BsMoonFill className="text-dark" /> : <BsFillSunFill className="text-warning" />}
      </button>
    </>
  )
}

export default ToggleTheme;


