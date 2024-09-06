import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default RootLayout;
