import React from "react";

function SellWindow({ marketData }) {
    console.log("sellwindow marketData:", marketData.sell)

    return(
        <div className="border border-secondary">
            <h6>
            Sellers Window
            </h6>

            <table>
                <tbody>
                   <tr>
                <th>sortable columns in sellers window</th>
               </tr>
               <tr><td>Jumps | Quantity | {} | Location | Expires in</td></tr>
               <tr><td>Jumps | Quantity | Price | Location | Expires in</td></tr>
               <tr><td>Jumps | Quantity | Price | Location | Expires in</td></tr> 
                </tbody>
               
            </table>
            
        </div>
    )
}

export default SellWindow;