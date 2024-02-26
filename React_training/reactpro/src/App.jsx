import Deck from "./components/Deck";
import Fruits from './components/Fruits'
import ConditionalFilter from './components/ConditionalFilter'
function App() {
  const myDeck = ["Pekka", "Wall-Breakers", "Bandit", "Ghost", "Zap"];


  return (
    <div className="App">
      <Deck myDeck={myDeck} />
      <Fruits/>
      <ConditionalFilter />
    </div>
  );
}

export default App;
