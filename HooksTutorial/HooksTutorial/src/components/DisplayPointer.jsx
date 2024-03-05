import React, { useState } from "react";
import MousePointer from "./MousePointer";

export default function DisplayPointer() {
  const [display, setDisplay] = useState(false);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>
        Toggle Display : {String(display)}
      </button>
      {display && <MousePointer />}
    </div>
  );
}
