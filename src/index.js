import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./reducers";
import "./styles.css";
import CounterList from "./components/CounterList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CounterList />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
