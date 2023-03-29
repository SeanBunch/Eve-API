import React, { useState, useEffect } from "react";
import BuyWindow from "./BuyWindow";
import SearchBar from "./SearchBar";
import SellWindow from "./SellWindow";
import Tabs from "./Tabs";

function MarketWindow() {
  const [marketData, setMarketData] = useState([]);
  const [itemSelected, setItemSelected] = useState(0);
  
  useEffect(() => {

    async function getMarketESI() {
      try {
        const response = await fetch(`https://esi.evetech.net/latest/markets/10000002/orders/?datasource=tranquility&order_type=all&page=1&type_id=${itemSelected}`)

        const dataESI = await response.json()

        setMarketData(dataESI)
        console.log("dataESI:", dataESI)
        console.log("marketESI:", marketData)


      } catch (error) {
        console.error(error.message)
      }
    }
    getMarketESI()

  }, [itemSelected])


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
