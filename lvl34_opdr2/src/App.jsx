import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, loginout } from "./actions"

const App = () => {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(1))}>+</button>
      &nbsp;
      <button onClick={() => dispatch(decrement(1))}>-</button>
      <p><button onClick={() => dispatch(loginout())}>
        {isLogged ? "Log out" : "Log in"}
      </button></p>
      {isLogged ? <h3>Only here when logged in!</h3> : ""}
    </div>
  );
}

export default App;
