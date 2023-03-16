import React, { useState } from "react";
import ItemList from "./ItemList";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  const changeHandler = (event) => {
    setSearchValue(event.target.value);
    console.log(searchValue);
  };

  return (
    <div>
      <h4>Search-Bar Column</h4>
      <div className="dropdown">
        <label>Location: </label>
        <select name="location" id="location" className="btn btn-secondary dropdown-toggle">
            <option value="Jita">Jita</option>
            <option value="Rens">Rens</option>
            <option value="Doxie">Doxie</option>
        </select>
      </div>

      <div>
        <label>Search Item:</label>
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Item name"
          onChange={changeHandler}
          value={searchValue}
        />
      </div>
      <br/>
      <ItemList string={searchValue} />
    </div>
  );
}

export default SearchBar;
