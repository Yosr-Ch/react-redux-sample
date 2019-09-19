import { createStore } from "redux";

const counter = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      if (state.i === action.index) {
        return state.count + 1;
      }
      return state.count;
    case "DECREMENT":
      if (state.i === action.index) {
        return state.count - 1;
      }
      return state.count;
    case "ADD_COUNTER":
      return action.number;
    default:
      return state.count;
  }
};
const counters = (state = [], action) => {
  switch (action.type) {
    case "INCREMENT":
      return state.map((count, i) => {
        return counter({ count, i }, action);
      });
    case "DECREMENT":
      return state.map((count, i) => {
        return counter({ count, i }, action);
      });
    case "ADD_COUNTER":
      return [...state, counter(undefined, action)];
    case "REMOVE_COUNTER":
      return [...state.slice(0, state.length - 1)];
    default:
      return state;
  }
};

const store = createStore(counters);
export default store;
