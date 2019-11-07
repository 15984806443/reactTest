import React, { useContext } from "react";

import { CountContext } from "./example4";
function Counter() {
  let count = useContext(CountContext);
  console.log(useContext(CountContext));
  return <h2>{count}</h2>;
}

export default Counter;
