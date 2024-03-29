import React, { useState } from "react";
import "../App.css";

function SellWindow({ marketData }) {
//   const tableData = marketData;
//   const [sortedField, setSortedField] = useState(null);
//   const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
  const [ order, setOrder ] = useState("ascending");

  // const tableMemo = useMemo(() => {
  //     let sortedTable = [...tableData];
  //     if (sortedField !== null) {
  //         sortedTable.sort((a, b) => {
  //             if (a[sortConfig.key] < b[sortConfig.key]) {
  //                 return sortConfig.direction === "ascending" ? -1 : 1;
  //             }
  //             if (a[sortConfig.key] > b[sortConfig.key]) {
  //                 return sortConfig.direction === "ascending" ? 1 : -1;
  //             }
  //             return 0;
  //         });
  //     }
  //     return sortedTable;
  // }, [tableData, sortConfig])
  // const requestSort = key => {
  //     let direction = "ascending";
  //     if (sortConfig.key === key && sortConfig.direction === "ascending") {
  //         direction = "descending";
  //     }
  //     setSortConfig({ key, direction});
  // }
  // sortedTable.sort((a, b) => {
  //     if (a[sortConfig.key] < b[sortConfig.key]) {
  //         return sortConfig.direction === "ascending" ? -1 : 1;
  //     }
  //     if (a[sortConfig.key] > b[sortConfig.key]) {
  //         return sortConfig.direction === "ascending" ? 1 : -1;
  //     }
  //     return 0;
  // });
  // if (sortedField !== null) {
  //     sortedTable.sort((a, b) => {
  //         if (a[sortedField] < b[sortedField]) {
  //             return -1;
  //         }
  //         if (a[sortedField] > b[sortedField]) {
  //             return 1;
  //         }
  //         return 0;
  //     });
  // }

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

  return (
    <div className="container tbl-container border border-secondary">
        <h5>Seller's Window</h5>
      <div className="row tbl fixtable-responsive scrollable">
        <table className="table table-bordered table-dark table-sm">
          <thead className="sticky">
            <tr>
              <th>Jumps</th>
              <th onClick={() => sorting("volume_remain")}>Quantity</th>
              <th onClick={() => sorting("price")}>Price</th>
              <th>Location</th>
              <th onClick={() => sorting("issued")}>Expires in</th>
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
                  {item.is_buy_order ? null : (
                    <>
                      <td> Jumps *needlogic*</td>
                      <td> {item.volume_remain} </td>
                      <td> {item.price} </td>
                      <td> Location *needlogic*</td>
                      <td> {days}d {hours}h {minutes}m {seconds}s </td>

                    </>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SellWindow;
