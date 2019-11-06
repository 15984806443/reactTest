import React, { useRef, useState, useEffect } from "react";

const Example8 = () => {
  const inputEl = useRef(null);
  const [text, setText] = useState("ayu");
  const textRef = useRef(null);
  useEffect(() => {
    textRef.current = text;
    console.log(textRef.current);
  });
  return (
    <React.Fragment>
      <input ref={inputEl} type="text" />
      <button
        onClick={() => {
          console.log(inputEl.current.value);
        }}
      >
        获取input
      </button>
      <br />
      <br />
      <input
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
        type="text"
      />
    </React.Fragment>
  );
};

export default Example8;
