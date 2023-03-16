import React, { useState } from "react";

function ItemList({ string }) {

    // need api call to search database with user input string data


  return (
    <div className="border border-secondary">
      <h4>Item List goes below</h4>

      <div>
        example:
        <ul>
          <li>item 1</li>
          {/* when item is clicked the Sell Window and the Buy Window needs to poplate with data of the item being clicked on */}
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </div>
      <div>string: {string}</div>
    </div>
  );
}

export default ItemList;
