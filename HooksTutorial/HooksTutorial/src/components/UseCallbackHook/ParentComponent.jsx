import React from "react";
import Title from "./Title";
import Button from "./Button";
import Count from "./Count";
export default function ParentComponent() {
  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button hancleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button hancleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}
