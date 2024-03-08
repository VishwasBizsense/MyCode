// eslint-disable-next-line no-unused-vars
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import CakeContainer from "./Components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HookCakeContainer from "./Components/HookCakeContainer";
import HookIceCreamContainer from "./Components/HookIceCreamContainer";
import IceCreamContainer from "./Components/IceCreamContainer";

function App() {
  return (
    <Provider store={store}>
      <>
        <div className="App">
          {/* <CakeContainer /> */}rrontainer /> */}
          {/* <HookIceCreamContainer /> */}
          <IceCreamContainer />
        </div>
      </>
    </Provider>
  );
}

export default App;
