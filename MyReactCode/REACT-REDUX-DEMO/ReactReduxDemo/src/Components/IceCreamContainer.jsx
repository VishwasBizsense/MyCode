/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";
// import buyCake from "../redux/cakes/cakeActiSons";
function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of icecreams - {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy icecream</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { numOfIceCreams: state.numOfIceCreams };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => {
      dispatch(buyIceCream());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
