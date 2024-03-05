import React from "react";
import { AgeContext, UserContext } from "../../App";

export default function ComponentTo() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <AgeContext.Consumer>
              {(age) => {
                return (
                  <div>
                    Getting context as {user} of age {age}
                  </div>
                );
              }}
            </AgeContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}
