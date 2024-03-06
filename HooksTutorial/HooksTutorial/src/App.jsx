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
import CounterReducer from "./components/UseReducerHook/CounterReducer";
import ObjectCounterReducer from "./components/UseReducerHook/ObjectCounterReducer";
import ReducerContextProvider from "./components/UseReducerHook/ReducerContextProvider";
import FetchingUseState from "./components/UseReducerHook/FetchingUseState";
import FetchingUseReducer from "./components/UseReducerHook/FetchingUseReducer";

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

      {/* --------------Context and useContext hooks----------------------------- */}
      {/* 
      <UserContext.Provider value={"Vishwas"}>
        <AgeContext.Provider value={22}>
          <ComponentFrom />
        </AgeContext.Provider>
      </UserContext.Provider> */}

      {/* ----------------Reducer functions and UseReducer hooks --------------------*/}

      {/* <CounterReducer /> */}
      {/* <ObjectCounterReducer /> */}

      {/* -----------Reducer with context------------------------------- */}

      {/* <ReducerContextProvider /> */}

      {/*-------------------- Fetching data using useReducer------------------------ */}
      {/* <FetchingUseState /> */}
      <FetchingUseReducer />
    </div>
  );
}

export default App;
