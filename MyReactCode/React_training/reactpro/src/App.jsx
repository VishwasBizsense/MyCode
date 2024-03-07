import Deck from "./components/Deck";
import Fruits from "./components/Fruits";
import ConditionalFilter from "./components/ConditionalFilter";
import Message from "./components/Message"
import Profile from "./components/Profile"
import Counter from "./components/Counter"
import Gallery from "./components/Gallery";
import Form from "./components/form";
import './App.css';
import ShoppingCart from "./components/ShoppingCart";
import Shopping from "./components/Shopping";
function App() {
  const myDeck = ["Pekka", "Wall-Breakers", "Bandit", "Ghost", "Zap"];
  let condition = true;

  return (
    <div className="App">
      <Deck myDeck={myDeck} />
      {condition ? <Fruits /> : <ConditionalFilter />}
      <Message />
      <Profile />
      <Counter />
      <Gallery />
      <Form />
      <Shopping />
    </div>
  );
}

export default App;
