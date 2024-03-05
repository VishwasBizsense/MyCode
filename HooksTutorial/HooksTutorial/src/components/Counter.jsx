import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {/* <input type="text" onChange={()=>} /> */}
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>0</button>
      <h1>count={count}</h1>
    </div>
  );
}
