import React from "react";
import BuyWindow from "./BuyWindow";
import SearchBar from "./SearchBar";
import SellWindow from "./SellWindow";
import Tabs from "./Tabs";

function MarketWindow() {
  return (
    <div>
      <h2>Market Window</h2>

      <div className="container-fluid">
        <div className="row h-100">
          <div className="col-md-2 side-bar">
            <SearchBar />
          </div>
          <div className="col">
            <Tabs />
            <SellWindow />
            <BuyWindow />
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default MarketWindow;
