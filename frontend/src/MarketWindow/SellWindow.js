import React, { useState } from "react";

function SellWindow({ marketData }) {
    // console.log("sellwindow marketData:", marketData)

    // I think here will go the useCallback to sort the data in the window.

    // since marketData is an array of objects and the data I need to sort is an array that is created by the .map() I need to maybe think about how to get the const data to be that array. Or maybe I can look to useing a useCallback function. Not sure yet but I am close. 

    const [ order, setOrder ] = useState("ascending");
    const [ data, setData ] = useState(marketData);
console.log(data)
    const sorting = (col) => {
        console.log(col)
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

    return(
        <div className="container tbl-container border border-secondary">
            <div className="row tbl fixtable-responsive scrollable">
                <table className="table table-bordered table-dark table-sm">
                    <thead>
                        <tr>
                            <th onClick={()=> sorting("volume_remain")}>QuantityTest</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Location</th>
                            <th>Expires in</th>
                        </tr>
                    </thead>
                    <tbody>
                    {marketData.map((item) => {
                      
                      return <tr>
                          {item.is_buy_order ? null : <td key={item.order_id}> {item.volume_remain} </td> }
                      </tr>
                  })} 
                        {/* {marketData.map((item) => {
                      
                                      return <tr>
                                          {item.is_buy_order ? null : <td key={item.order_id} className="list-group-item-dark list-unstyled"> Jumps | {item.volume_remain} |{item.price}  | Location | Expires in</td> }
                                      </tr>
                                  })} */}
                        
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