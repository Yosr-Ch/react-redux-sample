import React from "react";
import Counter from "./Counter";
import { addCounter, increment, decrement, removeCounter } from "../actions";
import { connect } from "react-redux";

const CounterList = ({
  list,
  onIncrement,
  onDecrement,
  onAddCounter,
  onRemoveCounter
}) => {
  /* addCounter = () => {
    this.setState(state => ({
      list: [...state.list, 0]
    }));
  };

  removeCounter = () => {
    this.setState(state => ({
      list: [...state.list.slice(0, -1)]
    }));
  };

  increment = count => {
    this.setState(state => ({
      list: [
        ...state.list.slice(0, i),
        state.list[i] + 1,
        ...state.list.slice(i + 1)
      ]
    }));
  };

  decrement = count => {
    this.setState(state => ({
      list: [
        ...state.list.slice(0, i),
        state.list[i] - 1,
        ...state.list.slice(i + 1)
      ]
    }));
  }; */

  return (
    <>
      {list && list.length
        ? list.map((count, i) => (
            <Counter
              key={i}
              number={count}
              increment={() => onIncrement(count, i)}
              decrement={() => onDecrement(count, i)}
            />
          ))
        : "no counters"}
      <p>-------------------</p>
      <button onClick={onAddCounter}>add counter</button>
      <button onClick={onRemoveCounter}>remove counter</button>
    </>
  );
};
const mapStateToProps = state => {
  return {
    list: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddCounter: () => dispatch(addCounter(0)),
    onRemoveCounter: () => dispatch(removeCounter()),
    onIncrement: (count, i) => dispatch(increment(count, i)),
    onDecrement: (count, i) => dispatch(decrement(count, i))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterList);
