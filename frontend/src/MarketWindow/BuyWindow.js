import React, { useState } from "react";

function BuyWindow({ marketData }) {
  const [order, setOrder] = useState("ascending");
  const [data, setData] = useState([]);

  const sorting = (col) => {
    if (order === "ascending") {
      const sorted = [...marketData].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setData(sorted);
      setOrder("decending");
    }
    if (order === "decending") {
      const sorted = [...marketData].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setData(sorted);
      setOrder("ascending");
    }
  };

  return (
    <div className="container tbl-container border border-secondary">
      <div className="row tbl fixtable-responsive overflow-auto">
        <h5>Buyer's Window</h5>
        <table className="table table-bordered table-dark table-sm">
          <thead>
            <tr>
              <th>Jumps</th>
              <th onClick={() => sorting("volume_remain")}>Quantity</th>
              <th onClick={() => sorting("price")}>Price</th>
              <th>Location</th>
              <th>Expires in</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.order_id}>
                  {item.is_buy_order ? (
                    <>
                      <td> Jumps *needlogic*</td>
                      <td> {item.volume_remain} </td>
                      <td> {item.price} </td>
                      <td> Location *needlogic*</td>
                      <td> {item.duration}*need logic </td>
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
