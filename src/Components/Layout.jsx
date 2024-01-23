import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import NavbarContainer from "./Navbar/NavbarContainer";
import Header from "./Header/Header";

const Layout = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="app_container">
        <div className="app_menu">
          <NavbarContainer />
        </div>

        <div className="app-wrapper-content">
          <Suspense fallback={<p>123</p>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Layout;
