import { eating } from "./cakeType";
import { actionCakeEating } from "./cakeaction";
const cakeInitialState = { noOfCake: 10 };
export const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case eating:
      return { ...state, noOfCake: state.noOfCake - 1 };
    default:
      return state;
  }
};
