import React, { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  return (
    <div>
      <p>You clicked {count} times</p>
      <input
        value={value}
        onChange={e => {
          setValue(e.target.value);
        }}
        type="text"
      />
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(value);
        }}
      >
        Chlick me
      </button>
    </div>
  );
};

export default Example;
