import {
  createStore,
  applyMiddleware,
  compose
} from "../../../../.cache/typescript/2.9/node_modules/redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const intitalState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  intitalState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
