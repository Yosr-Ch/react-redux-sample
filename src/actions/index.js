export const addCounter = number => {
  return { type: "ADD_COUNTER", number };
};

export const removeCounter = () => {
  return { type: "REMOVE_COUNTER" };
};

export const increment = (number, i) => {
  return { type: "INCREMENT", number, index: i };
};

export const decrement = (number, i) => {
  return { type: "DECREMENT", number, index: i };
};
