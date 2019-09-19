import React from "react";

const Counter = ({ number, increment, decrement }) => {
  return (
    <div>
      <h3>{number}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
