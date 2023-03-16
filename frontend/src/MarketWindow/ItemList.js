import React, { useState } from "react";

function ItemList({ string }) {
  return (
    <div className="border border-secondary">
      <h4>Item List goes below</h4>

      <div>
        example:
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </div>
      <div>string: {string}</div>
    </div>
  );
}

export default ItemList;
