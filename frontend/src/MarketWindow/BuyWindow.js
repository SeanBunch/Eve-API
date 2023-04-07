import React, { useState } from "react";
import "../App.css"

function BuyWindow({ marketData }) {
  const [order, setOrder] = useState("ascending");
  const [data, setData] = useState([]);

  const sorting = (col) => {
    if (order === "ascending") {
      const sorted = marketData.sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setOrder("decending");
    }
    if (order === "decending") {
      const sorted = marketData.sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setOrder("ascending");
    }
  };

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

              return (
                <tr key={item.order_id}>
                  {item.is_buy_order ? (
                    <>
                      <td> Jumps *needlogic*</td>
                      <td> {item.volume_remain} </td>
                      <td> {item.price} </td>
                      <td> Location *needlogic*</td>
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

  // return(
  //     <div className="border border-secondary">
  //         <h6>
  //         Buyer's Window
  //         </h6>

  //         <div >
  //             <ul className="overflow-auto" style={{ height: "250px" }}>
  //                 <h4>sortable columns in sellers window</h4>
  //                 {marketData.map((item) => {

  //                     return <div key={item.order_id}>
  //                         {item.is_buy_order ? <li className="list-group-item-dark list-unstyled"> Jumps | {item.volume_remain} |{item.price}  | Location | Expires in</li> : null  }
  //                     </div>
  //                 })}

  //             </ul>

  //         </div>

  //     </div>
  // )
}

export default BuyWindow;
