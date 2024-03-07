import React, { useState, useMemo } from "react";

function UseMemoCounter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementCount1 = () => {
    setCount1(count1 + 1);
  };
  const incrementCount2 = () => {
    setCount2(count2 + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return count1 % 2 === 0;
  }, [count1]);
  return (
    <div>
      <button onClick={incrementCount1}>counter1 - {count1}</button>
      <span>{isEven ? "even" : "odd"}</span>
      <div>
        <button onClick={incrementCount2}>counter2 - {count2}</button>
      </div>
    </div>
  );
}

export default UseMemoCounter;
