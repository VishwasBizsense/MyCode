const redux = require("redux");
//creating a store
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
//action creator
function buyCake() {
  //an action is an object with a type property
  return {
    type: BUY_CAKE,
    info: "First Redux action",
  };
}
function buyIceCream() {
  //an action is an object with a type property
  return {
    type: BUY_ICECREAM,
  };
}
//(prevState,action)=>newState
const initialCakeState = {
  numOfCakes: 10,
};
const initialIceCreamState = {
  numOfIceCreams: 10,
};
//Reducer functions for individual actions
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCakes: state.numOfCakes - 1 };

    default:
      return state;
  }
};
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numOfIceCreams: state.numOfIceCreams - 1 };
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = createStore(rootReducer);
console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  //setting up a listener to the store
  console.log("Updated state", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
