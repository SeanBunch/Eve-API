import React, { useMemo, useState } from "react";

function SellWindow({ marketData = [] }) {

    // I think here will go the useCallback to sort the data in the window.

    // since marketData is an array of objects and the data I need to sort is an array that is created by the .map() I need to maybe think about how to get the const data to be that array. Or maybe I can look to useing a useCallback function. Not sure yet but I am close. 

const  tableData  = marketData
const [ sortedField, setSortedField ] = useState(null)
const [ sortConfig, setSortConfig ] = useState({key: "", direction: ""})

const tableMemo = useMemo(() => {
    let sortedTable = [...tableData];
    if (sortedField !== null) {
        sortedTable.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === "ascending" ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === "ascending" ? 1 : -1;
            }
            return 0;
        });
    }
    return sortedTable;
}, [tableData, sortConfig])

// sortedTable.sort((a, b) => {
//     if (a[sortConfig.key] < b[sortConfig.key]) {
//         return sortConfig.direction === "ascending" ? -1 : 1;
//     }
//     if (a[sortConfig.key] > b[sortConfig.key]) {
//         return sortConfig.direction === "ascending" ? 1 : -1;
//     }
//     return 0;
// });
const requestSort = key => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
        direction = "descending";
    }
    setSortConfig({ key, direction});
}

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

console.log("tableData:", tableData)




// =============================================================================================
// =============================================================================================
// =============================================================================================
    const [ order, setOrder ] = useState("ascending");
    const [ data, setData ] = useState({marketData});

    const sorting = (col) => {
        // const dataArr = marketData.map((item)=> item[col])
        if (order === "ascending") {
            const sorted = [...data].sort((a, b) => a < b ? 1 : -1);
            setData(sorted)
            setOrder("decending")
        }
        if (order === "decending") {
            const sorted = [...data].sort((a, b) => a > b ? 1 : -1);
            setData(sorted)
            setOrder("ascending")
        }
    }
// =============================================================================================
// =============================================================================================
// =============================================================================================

    return(
        <div className="container tbl-container border border-secondary">
            <div className="row tbl fixtable-responsive overflow-auto">
                    <h5>Seller's Window</h5>
                <table className="table table-bordered table-dark table-sm">
                    <thead>
                        <tr>
                            <th >Jumps</th>
                            <th onClick={()=> requestSort("volume_remain")}>Quantity</th>
                            <th onClick={()=> sorting("price")}>Price</th>
                            <th>Location</th>
                            <th>Expires in</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    {marketData.map((item) => {
                      
                      return <tr key={item.order_id}>
                          {item.is_buy_order ? null : <>
                            <td > Jumps *needlogic*</td> 
                            <td > {item.volume_remain} </td> 
                            <td > {item.price} </td> 
                            <td > Location *needlogic*</td> 
                            <td > {item.duration}*need logic </td> 
                          </>
                          }
                      </tr>
                  })} 
                        
                    </tbody>
                </table>


            </div>
        </div>




        // <div className="border border-secondary">
        //     <h6>
        //     Seller's Window
        //     </h6>

        //     <div >
        //         <ul className="overflow-auto" style={{ height: "250px" }}>
        //             <h4>sortable columns in sellers window</h4>
        //             {marketData.map((item) => {
                      
        //                 return <div>
        //                     {item.is_buy_order ? null : <li key={item.order_id} className="list-group-item-dark list-unstyled"> Jumps | {item.volume_remain} |{item.price}  | Location | Expires in</li> }
        //                 </div>
        //             })}
        //         </ul>
        //     </div>
            
        // </div>
    )
}

export default SellWindow;