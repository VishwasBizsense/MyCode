import React, { useEffect } from "react";
export default function UseEffect2(count) {
  useEffect(() => {
    console.log("Prop Changed");
  }, [count]);
  return <div></div>;
}
