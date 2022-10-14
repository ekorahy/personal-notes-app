import React from "react";
import PropTypes from "prop-types";
import LocaleContext from "../../contexts/LocaleContext";

function SearchBar({ keyword, keywordChange }) {
  const { theme, language } = React.useContext(LocaleContext);

  return (
    <div className="input-group w-100 mt-4">
      <input
       type="search" 
       className={`form-control rounded form-control-lg bg-${theme === "dark" ? "white" : "dark"} text-${theme}`}
       placeholder={`${language === "id" ? "Cari berdasarkan judul" : "Search by title"} ...`}
       aria-label="Search" 
       aria-describedby="search-addon" 
       value={keyword} 
       onChange={(event) => keywordChange(event.target.value)} />
    </div>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
}

export default SearchBar;
