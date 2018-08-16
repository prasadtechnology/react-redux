import { FETCH_POSTS, NEW_POST } from "../actions/types";

const intitalState = {
  items: [],
  item: {}
};

export default function(state = intitalState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log("returning the payload...");
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    default:
      return intitalState;
  }
}
