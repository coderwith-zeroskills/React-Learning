// npm i redux react-redux(both redux and react-redux)
//we created a folder ReduxC where we will put our action
//Inside ReduxC we had created a folder "Cake" inside it a file:"cakeAction.js"(but a convention to create const action type so one more fiele) and anonther file":cakeType.js"
// inside cake folder another file named" reducer"
//inside "cake" create one more file name "store.js" and this store needs to be provided to react component where react-redux comes to picture,we wrap our component with <Provider> by importing provider from react-redux
//actually do that in App.js wrapping all component with provider hence all can access them

import React from "react";
import { actionCakeEating } from "../../ReduxC/Cake/cakeaction";
import { connect } from "react-redux";

function CakeContainer(props) {
  return (
    <>
      numnerOfCake={props.noOfCake}
      <button onClick={props.dispatch1}>CLICK to EAT</button>
    </>
  );
}
//"Selector" in official dev:alike action and reducer they return state information from redux-store,but in larger just provide what is need to be selected done in seperate file of selector
const mapStateToProps = (state, ownProps) => {
  return {
    noOfCake: state.noOfCake,
  };
};
// action import from index.js
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: () => {
      return dispatch(actionCakeEating());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
// export default CakeContainer;
