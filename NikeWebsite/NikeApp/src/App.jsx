import "./App.css";
import Header from "./components/header/Header";
import React from "react";
import TopSlider from "./components/header/TopSlider";
import AllProducts from "./components/header/AllProducts";

function App() {
  return (
    <div className="App">
      <Header />
      <TopSlider />
      <AllProducts />
    </div>
  );
}

export default App;
