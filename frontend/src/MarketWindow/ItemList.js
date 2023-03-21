import React, { useState } from "react";

function ItemList({ searchResults }) {

// loop through search results from parent component <SearchBar/> and when the name is clicked do the APi call to get price. 
console.log("searchresults from itemList:", searchResults)
  return (
    <div className="border border-secondary">
      <h4>Item List goes below</h4>

      <div>
        <ul>
        {searchResults.map((item)=> {
         return <li className="list-group-item-dark" >
            {item.item_name}
          </li>
        })
        }
        </ul>
      </div>
      <div>string: </div>
    </div>
  );
}

export default ItemList;
