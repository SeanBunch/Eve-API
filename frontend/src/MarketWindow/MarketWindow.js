import React, { useState, useEffect } from "react";
import BuyWindow from "./BuyWindow";
import SearchBar from "./SearchBar";
import SellWindow from "./SellWindow";
import Tabs from "./Tabs";

function MarketWindow() {
  const [marketData, setMarketData] = useState({
    buy:{avg: 0}, 
    sell:{avg: 0}
  });
  const [itemSelected, setItemSelected] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `https://api.evemarketer.com/ec/marketstat/json?typeid=${itemSelected}&usesystem=30000142`
        );
        const apiData = await response.json();

        setMarketData(apiData[0]);
        console.log("here is your market data:", marketData)
      } catch (error) {
        console.error(error.message);
      }
    }

    getData();
  }, [itemSelected]);


  return (
    <div>
      <h2>Market Window</h2>

      <div className="container-fluid">
        <div className="row h-100">
          <div className="col-md-2 side-bar">
            <SearchBar setItem={setItemSelected} />
          </div>
          <div className="col">
            <Tabs />
            <br/>
            <SellWindow marketData={marketData} />
            <br/>

            <BuyWindow marketData={marketData} />
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default MarketWindow;
