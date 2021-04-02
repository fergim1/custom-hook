import {useState} from 'react'

export const useCounter = (initialState = 50) => {
  
  const [counter, setCounter] = useState(initialState);

  const increment = () => {
    return setCounter(counter + 1);
  };

  const decrement = () => {
    return setCounter(counter - 1);
  };
  
  const reset = () => {
    return setCounter(initialState);
  };

  return {
    counter,
    increment,
    decrement,
    reset
  };
};
