import React from "react";

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
console.log("searchresults itemlist:", searchResults)
  
  const clickHandler = (event) => {
    event.preventDefault();
    const typeId = event.target.value;
    setItem(typeId);
  };

  // loop through search results from parent component <SearchBar/> and when the name is clicked make the APi call to get price.

  return (
    <div className="border border-secondary" style={{ height: "500px", width: "200px" }}>
      <h4>Search results</h4>

      <div>
        <ul className="overflow-auto" style={{ height: "461px", width: "198px", padding: "0" }}>
          {searchResults.map((item) => {
            return (
              <li
                key={item.type_id}
                className="table table-bordered table-dark table-sm"
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
