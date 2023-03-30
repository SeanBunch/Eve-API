import React, { useMemo, useState } from "react";

function SellWindow({ marketData }) {
//   const tableData = marketData;
//   const [sortedField, setSortedField] = useState(null);
//   const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
  const [order, setOrder] = useState("ascending");
  const [data, setData] = useState([]);

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
        <h5>Seller's Window</h5>
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
                  {item.is_buy_order ? null : (
                    <>
                      <td> Jumps *needlogic*</td>
                      <td> {item.volume_remain} </td>
                      <td> {item.price} </td>
                      <td> Location *needlogic*</td>
                      <td> {item.duration}*need logic </td>
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
