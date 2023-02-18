import React from "react";
// import { Route } from "react-router-dom";
import Header from "./Header";
import Routing from "./Routing";

function Layout() {

  return (
    <div className="container-fluid">
      <div className="row h-100">
        <div className="col-md-2 side-bar">
          <Header />
        </div>
        <div className="col">
          <Routing />
        </div>
      </div>
    </div>
  )
}

export default Layout;