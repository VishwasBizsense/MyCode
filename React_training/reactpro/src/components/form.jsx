import { useState } from "react";

export default function Form() {
  const person = {firstName : "" , lastName : "",}
  const [name, setname] = useState(person);

  // function handleChange(e) {
  //   setname(e.target.value);
  // }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="FirstName"
          value={name.firstName}
          onChange={(e) => {
            setname({...person,firstName:e.target.value});
          }
          
        }
        ></input>
        <input
          type="text"
          placeholder="LastName"
          value={name.lastName}
          onChange={(e) => {
            setname({...person,lastName:e.target.value});
          }
          
        }
        ></input>
      </form>
    </div>
  );
}
