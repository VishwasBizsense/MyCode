import React from "react";
import { useReducer, createContext } from "react";
import Consumer1 from "./Consumer1";
import Consumer2 from "./Consumer2";
import Consumer3 from "./Consumer3";

export const CountContext = createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;

    default:
      return state;
  }
};

export default function ReducerContextProvider() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div>
        <h3>Count - {count}</h3>
        <Consumer1 />
        <Consumer2 />
        <Consumer3 />
      </div>
    </CountContext.Provider>
  );
}
