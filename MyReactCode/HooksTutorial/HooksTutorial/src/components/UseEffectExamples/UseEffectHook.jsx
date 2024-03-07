import React, { useEffect, useState } from "react";

export default function UseEffectHook() {
  const [count, setCount] = useState(10);
  const [count1, setCount1] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
    console.log(`Count1 is : ${count1}`);
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <button onClick={() => setCount1(count1 + 1)}>Click Me count1</button>
    </div>
  );
}
