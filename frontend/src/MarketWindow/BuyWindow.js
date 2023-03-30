import React from "react";

function BuyWindow({ marketData }) {
    return(
        <div className="border border-secondary">
            <h6>
            Buyer's Window
            </h6>

            <div >
                <ul className="overflow-auto" style={{ height: "250px" }}>
                    <h4>sortable columns in sellers window</h4>
                    {marketData.map((item) => {
                   
                        return <div key={item.order_id}>
                            {item.is_buy_order ? <li className="list-group-item-dark list-unstyled"> Jumps | {item.volume_remain} |{item.price}  | Location | Expires in</li> : null  }
                        </div>
                    })}
              
                </ul>
               
            </div>
            
        </div>
    )
}

export default BuyWindow;