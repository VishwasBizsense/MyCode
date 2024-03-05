import React, { useEffect, useState } from "react";
import UseEffect2 from "./UseEffect2";

export default function UseEffect1() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <UseEffect2 count={count} />
    </div>
  );
}
