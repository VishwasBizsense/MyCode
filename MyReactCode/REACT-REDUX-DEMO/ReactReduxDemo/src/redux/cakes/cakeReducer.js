import { BUY_CAKE, ADD_CAKE } from "./cakeTypes";

const initialCakeState = {
  numOfCakes: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCakes: state.numOfCakes - action.payload };

    case ADD_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + Number(action.payload),
      };

    default:
      return state;
  }
};

export default cakeReducer;
