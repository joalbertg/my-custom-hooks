import { useState } from 'react';

export const useCounter = (initialState = 10) => {
  const [counter, setCounter] = useState(initialState);
  const increment = (factor = 1) => setCounter(counter + Math.abs(factor));
  const reset = () => setCounter(initialState);
  const decrement = (factor = 1) => setCounter(counter - Math.abs(factor));

  return {
    counter,
    increment,
    decrement,
    reset
  }
}

