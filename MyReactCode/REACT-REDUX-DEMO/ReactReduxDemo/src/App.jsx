// eslint-disable-next-line no-unused-vars
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import CakeContainer from "./Components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HookCakeContainer from "./Components/HookCakeContainer";
import HookIceCreamContainer from "./Components/HookIceCreamContainer";
import IceCreamContainer from "./Components/IceCreamContainer";
import NewCakeContainer from "./Components/NewCakeContainer";
import ItemContainer from "./Components/ItemContainer";
import UserContainer from "./Components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <>
        <div className="App">
          {/* <CakeContainer /> */}
          {/* <IceCreamContainer /> */}
          {/* ---------------------------Icecream and cake containers---------------------------------- */}
          {/* <HookCakeContainer />
          <HookIceCreamContainer /> */}
          {/*------------------------------------- change by input---------------------------------------- */}
          {/* <NewCakeContainer /> */}
          {/* Conditional mapping of icecream or cake*/}
          {/* <ItemContainer cake />
          <ItemContainer /> */}

          <UserContainer />
        </div>
      </>
    </Provider>
  );
}

export default App;
