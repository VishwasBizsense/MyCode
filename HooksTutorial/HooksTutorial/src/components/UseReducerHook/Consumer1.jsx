import React, { useContext } from "react";

import { CountContext } from "./ReducerContextProvider";

export default function Consumer1() {
  const countContext = useContext(CountContext);
  return (
    <div>
      Consumer 1 : {countContext.countState}
      <button onClick={() => countContext.countDispatch("increment")}>
        +1
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        -1
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
}
