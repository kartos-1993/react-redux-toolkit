import { useState } from "react";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "./counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.count);
  const [incrementAmount, setincrementAmount] = useState("");
  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setincrementAmount(0);
    dispatch(reset());
  };

  return (
    <div className="card">
      <p>count is {JSON.stringify(count)}</p>
      <input
        type="text"
        onChange={(e) => setincrementAmount(e.target.value)}
        value={incrementAmount}
      />
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <button onClick={resetAll}>reset</button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(addValue));
        }}
      >
        add amount
      </button>
    </div>
  );
};

export default Counter;
