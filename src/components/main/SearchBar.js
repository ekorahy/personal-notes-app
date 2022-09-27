import React from "react";

function SearchBar({ keyword, keywordChange }) {
    return (
        <div class="container input-group w-75 mt-4">
            <input
             type="search" 
             class="form-control rounded" 
             placeholder="Search" 
             aria-label="Search" 
             aria-describedby="search-addon" 
             value={keyword} 
             onChange={(event) => keywordChange(event.target.value)} />
        </div>
    );
}

export default SearchBar;