import React, { useEffect, useState } from "react";

export default function MousePointer() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePointer = (e) => {
    console.log(`Mouse Event`);
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log(`Use Effect called`);
    window.addEventListener("mousemove", logMousePointer);

    return () => {
      console.log(`component unmounted`);
      window.removeEventListener("mousemove", logMousePointer);
    };
  }, []);

  return (
    <div>
      Hooks x - {x} y - {y}
    </div>
  );
}
