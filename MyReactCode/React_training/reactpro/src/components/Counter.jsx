// State: A Component's Memory =>
// Components need to “remember” things: the current input value, the current image, the shopping cart. 
// In React, this kind of component-specific memory is called state.
//useState hook ,
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);

  function increment() {
    setCount(count + incrementBy);
  }
  function decrement() {
    setCount(count - incrementBy);
  }
  function reset() {
    setCount(0);
  }
  function increaseIncrement() {
    setIncrementBy(incrementBy+1);
  }
  function decreaseIncrement() {
    setIncrementBy(incrementBy-1);
  }

  return (
    <div>
      <h1>Value of Counter is : {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>

      <h1>We are going to increment by : {incrementBy} </h1>
      <button onClick={increaseIncrement}>Increase Increment</button>
      <button onClick={decreaseIncrement}>Decrease Increment</button>

    </div>
  );
}
