import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import reducer from "./reducers"

const store = (store) => {
  return createStore(
    // reducer,
    store,
    applyMiddleware(thunk)
  )
}

export default store
