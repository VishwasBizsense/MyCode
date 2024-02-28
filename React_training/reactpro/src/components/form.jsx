import { useState } from "react";

export default function Form() {
  const [formData, setName] = useState({ firstName: "", lastName: "" });

  // function handleChange(e) {
  //   setname(e.target.value);
  // }

  return (
    <div>
      
      <form>
        <input
          type="text"
          placeholder="FirstName"
          value={formData.firstName}
          onChange={(e) => {
            setName({ ...formData, firstName: e.target.value });
          }}
        ></input>
        <input
          type="text"
          placeholder="LastName"
          value={formData.lastName}
          onChange={(e) => {
            setName({ ...formData, lastName: e.target.value });
          }}
        />
        <button onClick={(e) =>{ e.preventDefault();console.log(formData);}}>Submit</button>
      </form>
    </div>
  );
}
