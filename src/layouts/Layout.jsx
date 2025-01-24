import React from "react";
import Navbar from "../components/common/navbar/Navbar";
import Footer from "../components/common/footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      {/* Page Content*/}
      <div style={{ paddingTop: "32px", paddingBottom: "32px" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
