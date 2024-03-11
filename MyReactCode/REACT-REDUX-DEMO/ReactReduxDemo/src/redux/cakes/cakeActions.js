import { BUY_CAKE, ADD_CAKE } from "./cakeTypes";

//---------------------------------Action creator----------------------------------------
const buyCake = (buyNum = 1) => {
  return {
    type: BUY_CAKE,
    payload: buyNum,
  };
};
const addCake = (addNum = 1) => {
  return {
    type: ADD_CAKE,
    payload: addNum,
  };
};

export { buyCake, addCake };
