import "./App.css";
import Header from "./components/header/Header";
import React from "react";
import TopSlider from "./components/header/TopSlider";
import HomePage from "./components/header/HomePage";
import Categories from "./components/header/Categories";
import Banner from "./components/header/Banner";
import MVPProducts from "./components/header/MVPProducts";

function App() {
  return (
    <div className="App">
      <Header />
      <TopSlider />
      <Banner />
      <HomePage />
    </div>
  );
}

export default App;
