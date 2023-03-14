import React from "react";
import BuyWindow from "./BuyWindow";
import ItemList from "./ItemList";
import SellWindow from "./SellWindow";
import Tabs from "./Tabs";

function MarketWindow() {

    return (
        <div>
            <h2>
            Market Window
            </h2>

            <Tabs />
            <ItemList />
            <SellWindow />
            <BuyWindow />

        </div>
    )
}

export default MarketWindow;