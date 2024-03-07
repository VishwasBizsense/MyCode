//using custom hooks and usereducer
import React from "react";
import useRandomNumber from "./useRandomNumber";
// Component using the custom hook
function RandomNumberGenerator() {
  const { number, loading, error, fetchRandomNumber } = useRandomNumber();

  return (
    <div>
      <h2>Random Number Generator</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {number && <p>Random Number: {number}</p>}
      {/* By setting disabled={loading},
       we ensure that the button is disabled (disabled={true}) 
       when the loading state is true */}
      <button onClick={fetchRandomNumber} disabled={loading}>
        Generate Random Number
      </button>
    </div>
  );
}

export default RandomNumberGenerator;
