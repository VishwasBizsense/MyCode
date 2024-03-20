import Header from "./src/components/header/Header";
import React from "react";
import TopSlider from "./src/components/header/TopSlider";
import HomePage from "./src/components/header/HomePage";
import Categories from "./src/components/header/Categories";
import Banner from "./src/components/header/Banner";
import MVPProducts from "./src/components/header/MVPProducts";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <TopSlider />
      <Outlet />
    </>
  );
}

export default Layout;
