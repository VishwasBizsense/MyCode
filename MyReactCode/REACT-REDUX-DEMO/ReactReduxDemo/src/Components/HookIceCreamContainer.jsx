/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";

export default function HookIceCreamContainer() {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Num of Icecreams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream)}>Buy Icecream</button>
    </div>
  );
}
