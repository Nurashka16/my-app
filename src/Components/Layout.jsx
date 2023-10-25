import React from "react";
import { Outlet } from "react-router-dom";
import NavbarContainer from "./Navbar/NavbarContainer";
import Header from "./Header/Header";

const Layout = (props) => {
  return (
      <div className="app-wrapper">
        <Header />
        <div className="app_container">
          <div className="app_navbar">
            <NavbarContainer />
          </div>
          <div className="app-wrapper-content">
            <Outlet />
          </div>
        </div>
      </div>
  );
};

export default Layout;
