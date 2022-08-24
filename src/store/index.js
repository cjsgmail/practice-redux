import { createStore } from "redux";

const counterReducer = (state = { count: 0 }, action) => {
  if (action.type === "increase") {
    return {
      count: state.count + 1,
    };
  }

  if (action.type === "decrease") {
    return {
      count: state.count - 1,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
