import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Navbar from "./components/Navbar";
import BodyContainer from "./components/BodyContainer";
import "./App.css";
import InnerContainer from "./components/InnerContainer";
import RecipeBlock from "./components/RecipeBlock";
function App() {
  const [foodData, setFoodData] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <BodyContainer>
        <InnerContainer>
          <FoodList foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <RecipeBlock />
        </InnerContainer>
      </BodyContainer>
    </div>
  );
}

export default App;
