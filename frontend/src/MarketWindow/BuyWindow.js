import React, { useState } from "react";
import "../App.css"

function BuyWindow({ marketData, locationList }) {
  const [ order, setOrder ] = useState("ascending");
  // const [ locationList, setlocationList ] = useState({});

  const sorting = (col) => {
    if (order === "ascending") {
     marketData.sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setOrder("decending");
    }
    if (order === "decending") {
       marketData.sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setOrder("ascending");
    }
  };

// ================================================================================
// not sure if the code below should go here or in the useEffect where the marketData is called. For now I have put this block of code for the location in the useEffect where the marketData is being called in the MarketWindow component.
// ================================================================================
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
// ================================================================================

  return (
    <div className="container tbl-container border border-secondary">
        <h5>Buyer's Window</h5>
      <div className="row tbl fixtable-responsive scrollable">
        <table className="table table-bordered table-dark table-sm market-table">
          <thead className="sticky">
            <tr>
              <th>Jumps</th>
              <th onClick={() => sorting("volume_remain")}>Quantity</th>
              <th onClick={() => sorting("price")}>Price</th>
              <th>Location</th>
              <th>Expires in</th>
            </tr>
          </thead>
          <tbody>
            {marketData.map((item) => {
                  const currentDate = new Date().getTime();
                  const issuedDate = new Date(item.issued).getTime();
                  const dateDiff = (currentDate - issuedDate) / 86400000;
                  const expiresIn = item.duration - dateDiff;
   
                  const days = Math.trunc(expiresIn);
   
                  const milliSecRemainAfterDays = (currentDate - issuedDate) % 86400000;
                  const hours = 24 - (Math.trunc(milliSecRemainAfterDays / 3600000));
   
                  const milliSecRemainAfterHours = milliSecRemainAfterDays % 3600000;
                  const minutes = 60 - (Math.trunc(milliSecRemainAfterHours / 60000));
   
                  const milliSecRemainAfterMinutes = milliSecRemainAfterHours % 60000;
                  const seconds = 60 - (Math.trunc(milliSecRemainAfterMinutes / 1000));

                  const locationId = item.location_id;

              return (
                <tr key={item.order_id}>
                  {item.is_buy_order ? (
                    <>
                      <td> Jumps *needlogic*</td>
                      <td> {item.volume_remain} </td>
                      <td> {item.price} </td>
                      <td> {locationList[locationId]} </td>
                      <td> {days}d {hours}h {minutes}m {seconds}s </td>
                    </>
                  ) : null}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BuyWindow;
