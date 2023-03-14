import React from "react";
import { Routes, Route } from "react-router-dom";
import MarketWindow from "../MarketWindow/MarketWindow";
import Header from "./Header";
import Menu from "./Menu";

function Layout() {

  return (
    <div className="container-fluid">
      <div className="row h-100">
        <div className="col-md-2 side-bar">
        <Header />
        </div>
        <div className="col">
          <Menu />
          <MarketWindow />


        </div>
      </div>
    </div>
  )
}

export default Layout;