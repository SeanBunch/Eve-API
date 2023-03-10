import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Routing from "./Routing";

function Layout() {

  return (
    <div className="container-fluid">
      <div className="row h-100">
        <div className="col-md-2 side-bar">
        <Header path="/*" />
        </div>
        <div className="col">
          {/* need review of React v18 */}

          <Routes>
            <Route element={<Routing />}/>
          </Routes>

        </div>
      </div>
    </div>
  )
}

export default Layout;