import React from "react";
import PropTypes from 'prop-types';

function SearchBar({ keyword, keywordChange }) {
    return (
        <div class="input-group w-100 mt-4">
            <input
             type="search" 
             class="form-control rounded form-control-lg" 
             placeholder="Search by Title ..." 
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