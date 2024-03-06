import React, { useContext } from "react";
import ComponentTo from "./ComponentTo";

import { AgeContext, UserContext } from "../../App";

export default function ComponentMiddle() {
  const name = useContext(UserContext);
  const age = useContext(AgeContext);
  return (
    <div>
      <div>
        UserContext value is - {name} & AgeContext value is - {age}
      </div>
      <ComponentTo />
    </div>
  );
}
