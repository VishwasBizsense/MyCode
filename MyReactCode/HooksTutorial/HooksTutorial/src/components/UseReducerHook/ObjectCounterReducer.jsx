import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 1,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        firstCounter: state.firstCounter + state.secondCounter,
      };
    case "incrementby":
      return {
        ...state,
        secondCounter: state.secondCounter + 1,
      };
    case "decrement":
      return {
        ...state,
        firstCounter: state.firstCounter - state.secondCounter,
      };
    case "decrementby":
      return {
        ...state,
        secondCounter: state.secondCounter - 1,
      };
    case "reset":
      return initialState;

    default:
      return state;
  }
};

export default function ObjectCounterReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>Count - {count.firstCounter}</h3>
      <h3>increment/decrement by - {count.secondCounter}</h3>
      <button onClick={() => dispatch({ type: "increment" })}>
        increment +1
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        decrement -1
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <div>
        <button onClick={() => dispatch({ type: "incrementby" })}>
          IncrementBy
        </button>
        <button onClick={() => dispatch({ type: "decrementby" })}>
          DecrementBy
        </button>
      </div>
    </div>
  );
}
