import { decrement, increment } from 'feature/Counter/CounterSlice';
import React from 'react';
import { useDispatch } from 'react-redux';

function ControlCounter(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <button onClick={() => dispatch(increment())}>Increase</button>
    </div>
  );
}

export default ControlCounter;
