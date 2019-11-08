import React, { useState } from "react";
import dynamic from "next/dynamic";
const One = dynamic(import("../components/ayu"));

const Time = () => {
  const [nowTime, setTime] = useState(Date.now());
  const changeTime = async () => {
    const moment = await import("moment");
    setTime(moment.default(Date.now()).format());
  };
  return (
    <>
      <div>{nowTime}</div>
      <One>阿鱼</One>
      <div>
        <button onClick={changeTime}>切换</button>
      </div>
    </>
  );
};

export default Time;
