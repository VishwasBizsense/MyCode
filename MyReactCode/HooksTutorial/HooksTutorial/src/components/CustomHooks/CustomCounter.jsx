import React, { useState } from "react";
import useCounter from "./useCounter";

export default function CustomCounter() {
  const [count, increment, decrement, reset] = useCounter();
  return (
    <div>
      {/* <input type="text" onChange={()=>} /> */}
      <h1>count= {count}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
