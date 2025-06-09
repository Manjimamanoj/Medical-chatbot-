import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

export default function Rootlayout() {
  return (
    <div>
      <Navbar />
      <div style={{ minHeight: "70vh" }}>
        <div className="container">
          {" "}
          <Outlet />
        </div>
      </div>
      <div style={{ marginTop: "100px" }}>
        <Footer />
      </div>
    </div>
  );
}