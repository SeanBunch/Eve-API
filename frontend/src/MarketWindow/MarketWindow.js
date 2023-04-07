import React, { useState, useEffect } from "react";
import BuyWindow from "./BuyWindow";
import SearchBar from "./SearchBar";
import SellWindow from "./SellWindow";
import Tabs from "./Tabs";

function MarketWindow() {
  const [marketData, setMarketData] = useState([]);
  const [itemSelected, setItemSelected] = useState(0);
  const [ region, setRegion ] = useState("10000002");

  useEffect(() => {
    async function dateCompare() {
      const currentDate = new Date().getTime();
      const issuedDate = new Date(marketData[3].issued).getTime();
      
      const dateDiff = (currentDate - issuedDate) / 86400000
      console.log("issuedDate:", issuedDate, "currentDate:", currentDate, "dateDiff:", dateDiff, "marektData[3]:", marketData[3] );
    }
    dateCompare()

}, [marketData])


  useEffect(() => {
    async function getMarketESI() {
      try {
        const response = await fetch(`https://esi.evetech.net/latest/markets/${region}/orders/?datasource=tranquility&order_type=all&page=1&type_id=${itemSelected}`)

        const dataESI = await response.json()
        setMarketData(dataESI)
        
      } catch (error) {
        console.error(error.message)
      }
    }
    getMarketESI()
  }, [itemSelected, region])

  return (
    <div>
      <h2>Market Window</h2>

      <div className="container-fluid">
        <div className="row h-100">
          <div className="col-md-2 side-bar">
            <SearchBar setItem={setItemSelected} setRegion={setRegion} />
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
