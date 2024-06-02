import React from "react";
import { Outlet, Link } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./global.css"



const Layout = () => {
  return (
    <>
    <NavBar></NavBar>
    <main>
      <Outlet />

    </main>

    </>
  )
};

export default Layout;