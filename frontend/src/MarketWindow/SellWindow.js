import React from "react";

function SellWindow({ marketData }) {
    // console.log("sellwindow marketData:", marketData)

    return(
        <div className="border border-secondary">
            <h6>
            Sellers Window
            </h6>

            <div >
                <ul className="overflow-auto" style={{ height: "250px" }}>
                    <h4>sortable columns in sellers window</h4>
                    {marketData.map((item) => {
                        return <li key={item.order_id} className="list-group-item-dark list-unstyled">Jumps | {item.volume_remain} | {item.is_buy_order ? null : item.price } | Location | Expires in</li>
                    })}
               {/* <tr><td>Jumps | Quantity | {} | Location | Expires in</td></tr>
               <tr><td>Jumps | Quantity | Price | Location | Expires in</td></tr>
               <tr><td>Jumps | Quantity | Price | Location | Expires in</td></tr>  */}
                </ul>
               
            </div>
            
        </div>
    )
}

export default SellWindow;