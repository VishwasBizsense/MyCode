import React from "react";
import Counter from "./components/Counter";
import Name from "./components/Name";
import UseEffect1 from "./components/UseEffectExamples/UseEffect1";
import MousePointer from "./components/MousePointer";
import DisplayPointer from "./components/DisplayPointer";
import Scrolled from "./components/Scrolled";
import Tick from "./components/Tick";
import FetchData from "./components/FetchData";
import ComponentFrom from "./components/UseContextHook/ComponentFrom";

export const UserContext = React.createContext();
export const AgeContext = React.createContext();

function App() {
  //const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Counter />
      <Name /> */}
      {/* <UseEffect1 /> */}
      {/* <MousePointer /> */}
      {/* <DisplayPointer /> */}
      {/* <Scrolled /> */}
      {/* <Tick /> */}
      {/* <FetchData /> */}
      <UserContext.Provider value={"Vishwas"}>
        <AgeContext.Provider value={22}>
          <ComponentFrom />
        </AgeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
