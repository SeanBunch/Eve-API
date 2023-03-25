import React from "react";

function SellWindow({ marketData }) {
    console.log("sellwindow marketData:", marketData)

    return(
        <div className="border border-secondary">
            <h6>
            Sellers Window
            </h6>

            <table>
                <tbody className="overflow-auto" style={{ height: "250px" }}>
                    <th>sortable columns in sellers window</th>
                    {marketData.map((item) => {
                        return <tr className="list-group-item-dark list-unstyled"><td>Jumps | Quantity | {item.is_buy_order? null : item.price} | Location | Expires in</td></tr>
                    })}
               {/* <tr><td>Jumps | Quantity | {} | Location | Expires in</td></tr>
               <tr><td>Jumps | Quantity | Price | Location | Expires in</td></tr>
               <tr><td>Jumps | Quantity | Price | Location | Expires in</td></tr>  */}
                </tbody>
               
            </table>
            
        </div>
    )
}

export default SellWindow;