import React from "react";
import "../styles/searchInput.css";

function SearchInput({ search }) {
  return (
    <div>
      <input
        placeholder="search tickets"
        className="searchInput"
        id="searchInput"
        onChange={(e) => {
          search(e.target.value);
        }}
      ></input>
    </div>
  );
}

export default SearchInput;
