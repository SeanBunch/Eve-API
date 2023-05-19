import React, { useState } from "react";
import ItemList from "./ItemList";
import { getItemId } from "../Utilities/API";

function SearchBar({ setItem, setRegion }) {
  const [ searchValue, setSearchValue ] = useState("");
  const [ searchResults, setSearchResults ] = useState([]);
console.log(searchValue)
  const changeHandler = (event) => {
    setSearchValue(event.target.value);
  };

  const locationHandler = (event) => {
    setRegion(event.target.value);
  };

  const clickHandler = (event) => {
    event.preventDefault();
    const abortController = new AbortController();
    const specialChars = /[`!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?~]/;
    
    if (searchValue.length > 15 || searchValue.length < 4 || specialChars.test(searchValue)) {
      alert("Search must be between 3 and 15 characters and no special characters.")
    }

      async function getId() {
        const response = await getItemId(searchValue, abortController.signal);
        setSearchResults(response);
      }
      getId();
  };

  return (
    <div>
      <h4>Select Region</h4>
      <div className="dropdown">
        <label>Region: </label>
        <select
          name="location"
          id="location"
          className="btn btn-secondary dropdown-toggle"
          onChange={locationHandler}
        >
          <option value="10000002">The Forge</option>
          <option value="10000030">Heimatar </option>
          <option value="10000032">Sinq Laison</option>
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
        <button 
        className="btn btn-secondary" 
        onClick={clickHandler}>
          Search
        </button>
      </div>
      <br />
      <ItemList searchResults={searchResults} setItem={setItem} />
    </div>
  );
}

export default SearchBar;
