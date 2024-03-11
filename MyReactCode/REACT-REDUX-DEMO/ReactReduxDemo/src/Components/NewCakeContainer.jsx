/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake, addCake } from "../redux";
// import buyCake from "../redux/cakes/cakeActions";
function NewCakeContainer(props) {
  const [buyNum, setBuyNum] = useState(1);
  const [addNum, setAddNum] = useState(1);

  // console.log(props.numOfCakes);
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <input
        type="text"
        value={buyNum}
        onChange={(e) => setBuyNum(e.target.value)}
      />
      <button onClick={() => props.buyCake(buyNum)}>Buy {buyNum} cakes</button>
      <br></br>
      <input
        type="text"
        value={addNum}
        onChange={(e) => setAddNum(e.target.value)}
      />
      <button onClick={() => props.addCake(addNum)}>Add {addNum} cakes</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { numOfCakes: state.cake.numOfCakes };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (buyNum) => {
      dispatch(buyCake(buyNum));
    },
    addCake: (addNum) => {
      dispatch(addCake(addNum));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
