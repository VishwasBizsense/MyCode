import React, { useEffect, useRef } from "react";

export default function Scrolled() {
  const divRef = useRef(null);
  const handleScroll = (e) => {
    console.log("Window scrolled");
    console.log(e);
  };

  useEffect(() => {
    const divElement = divRef.current;
    if (divElement) divElement.addEventListener("scroll", handleScroll);
    // console.log(`working`);
    return () => {
      divElement.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        overflowY: "scroll",
        border: "1px solid #ccc",
        padding: "10px",
      }}
    >
      <div ref={divRef} style={{ height: "1000px" }}>
        {/* This div is taller than the container, causing scrollbars */}
        Scrollable Content
      </div>
    </div>
  );
}
