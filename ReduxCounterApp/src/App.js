import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from './redux/actions';


function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter (Pure Redux + Separate Actions)</h1>
      <h2>{count}</h2>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default App