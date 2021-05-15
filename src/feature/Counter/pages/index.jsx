import React from 'react';
import { useSelector } from 'react-redux';
import ControlCounter from '../components/ControlCounter';

function CounterPage(props) {
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      {counter} <ControlCounter />
    </div>
  );
}

export default CounterPage;
