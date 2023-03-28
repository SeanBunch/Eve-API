import React, { useState, useEffect } from "react";

function ItemList({ searchResults, setItem }) {
  // ================Code moved==========================
  // ======Code below moved up to MarketWIndow.js =========
  // =======================================================
  // const [marketData, setMarketData] = useState({});
  // const [itemSelected, setItemSelected] = useState("");

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const response = await fetch(
  //         `https://api.evemarketer.com/ec/marketstat/json?typeid=${itemSelected}&usesystem=30000142`
  //       );
  //       const apiData = await response.json();

  //       setMarketData(apiData[0]);
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //   }

  //   getData();
  // }, [itemSelected]);
  // =======================================================
  // =======================================================
  // =======================================================


  const clickHandler = (event) => {
    event.preventDefault();
    const typeId = event.target.value;
    setItem(typeId);
  };

  // loop through search results from parent component <SearchBar/> and when the name is clicked do the APi call to get price.

  return (
    <div className="border border-secondary">
      <h4>Search results</h4>

      <div>
        <ul className="overflow-auto" style={{ height: "500px" }}>
          {searchResults.map((item) => {
            return (
              // console.log(item)
              <li
                key={item.key}
                className="list-group-item-dark list-unstyled"
                onClick={clickHandler}
                value={item.type_id}
              >
                {item.item_name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ItemList;
