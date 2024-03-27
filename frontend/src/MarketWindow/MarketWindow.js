import React, { useState, useEffect } from "react";
import BuyWindow from "./BuyWindow";
import SearchBar from "./SearchBar";
import SellWindow from "./SellWindow";
import Tabs from "./Tabs";


function MarketWindow() {
  const [marketData, setMarketData] = useState([]);
  const [itemSelected, setItemSelected] = useState(0);
  const [ region, setRegion ] = useState("10000002");
  const [ stationIdByName, setStationIdByName ] = useState({});
  
  
  const stationNamePromise = (uniqueLocationIds) => new Promise((resolve, reject) => {
        const stationIdByName = {};
          uniqueLocationIds.forEach(async (locId) => {
            try {
              const stationName = (await fetch(`https://esi.evetech.net/latest/universe/stations/${locId}/?datasource=tranquility`)).json();
              stationIdByName[locId] = stationName;
            } catch (error) {
              reject(error.message);
            }
          });  
          resolve(stationIdByName); 
  });
  
  useEffect(() => {
    async function getMarketESI() {
      try {
        const esiData = await fetch(`https://esi.evetech.net/latest/markets/${region}/orders/?datasource=tranquility&order_type=all&page=1&type_id=${itemSelected}`).json();
        const uniqueLocationIds = [];
        for (let item of esiData) {
          if (item.location_id < 100000000) {
            const locId = item.location_id.toString();
            if(!uniqueLocationIds.includes(locId)){
              uniqueLocationIds.push(locId);
            }
          }
        }
        
        const stationIdByName = await stationNamePromise(uniqueLocationIds);

        setStationIdByName(stationIdByName);
        setMarketData(esiData);      
      } catch (error) {
        console.error(error.message)
      }
    }
    getMarketESI()
  }, [itemSelected, region])

  // useEffect(() => {
  //   async function getLocationNames() {
  //     for (let item of marketData) {
  //       if (item.location_id < 100000000) {
  //         const locId = item.location_id;
          
  //         if (!locationList.locId) {
  //           const apiResponse = await fetch(`https://esi.evetech.net/latest/universe/stations/${locId}/?datasource=tranquility`);
  //           const stationInfo = await apiResponse.json()
  //           setlocationList(locationList[locId] = stationInfo.name)
            
  //         }
  //       }
  //     }
  //   }
  //   getLocationNames()

  //   setTimeout(() => {
  //     console.log("locationList:", locationList)
      
  //   }, 2000);
    
  // },[marketData])

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

            <BuyWindow marketData={marketData} stationIdByName={stationIdByName} />
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default MarketWindow;
