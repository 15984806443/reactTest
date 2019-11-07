import React, { useState, createContext } from "react";
import Counter from "./example41";
export const CountContext = createContext();

const Example4 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Chlick me
      </button>
      <CountContext.Provider value={count}>
        <Counter></Counter>
      </CountContext.Provider>
    </div>
  );
};

export default Example4;
