import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <nav className="navbar navbar-dark align-items-start p-0">
        <div className="container-fluid d-flex flex-column p-0">
          <Link
            className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
            to="/"
          >
            <div className="sidebar-brand-text mx-3">
              <span>MENU</span>
            </div>
          </Link>
          <hr className="sidebar-divider my-0" />
          <ul className="nav navbar-nav text-light" id="accordionSidebar">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <span className="oi oi-dashboard" />
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <span className="oi oi-magnifying-glass" />
                ISK donations
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <span className="oi oi-plus" />
                One time ISK fee 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <span className="oi oi-layers" />
                New Table
              </Link>
            </li>
          </ul>
          <div className="text-center d-none d-md-inline">
            <button
              className="btn rounded-circle border-0"
              id="sidebarToggle"
              type="button"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
