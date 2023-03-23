import React, { useState } from "react";
import ItemList from "./ItemList";
import { getItemId } from "../Utilities/API";


function SearchBar({ setItem }) {
  const [ searchValue, setSearchValue ] = useState("");
  const [ searchResults, setSearchResults ] = useState([]);

  const changeHandler = (event) => {
    setSearchValue(event.target.value);
  };

  const clickHandler = (event) => {
    event.preventDefault()
    const abortController = new AbortController()

    async function getId () {
      const response = await getItemId(searchValue, abortController.signal)
      setSearchResults(response);
    }
    
    getId()
  }

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
        <button className="btn btn-secondary" onClick={clickHandler}>Search</button>
      </div>
      <br/>
      <ItemList searchResults={searchResults} setItem={setItem} />
    </div>
  );
}

export default SearchBar;
