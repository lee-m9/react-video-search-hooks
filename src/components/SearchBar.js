import React, { useState } from "react";

const SearchBar = ({ onSearchSubmit }) => {
  const [searchText, setSearchText] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(searchText);
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label className="ui top attached label">Video Search</label>
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
