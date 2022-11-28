import React from "react";

function Search({ handleOnChange }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          className="prompt" 
          placeholder="search by name..." 
          onChange={handleOnChange}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
