import React from "react";

function SearchInput({ search }) {
  return (
    <div>
      <input
        onChange={(e) => {
          search(e.target.value);
        }}
      ></input>
    </div>
  );
}

export default SearchInput;
