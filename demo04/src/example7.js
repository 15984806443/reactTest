import React, { useState, useMemo } from "react";

const Example7 = () => {
  const [xiaohong, setXiaohong] = useState("小红在待客状态");
  const [zhilin, setZhilin] = useState("志林在待客状态");

  return (
    <React.Fragment>
      <button
        onClick={() => {
          setXiaohong(new Date().getTime());
        }}
      >
        小红
      </button>
      <button
        onClick={() => {
          setZhilin(new Date().getTime() + "志林");
        }}
      >
        志林
      </button>
      <ChildComponent name={xiaohong}>{zhilin}</ChildComponent>
    </React.Fragment>
  );
};

const ChildComponent = ({ name, children }) => {
  function changexiaohong() {
    console.log(name);
    return name;
  }
  const actionXiaohong = useMemo(() => changexiaohong(name), [name]);
  return (
    <React.Fragment>
      <div>{actionXiaohong}</div>
      <div>{children}</div>
    </React.Fragment>
  );
};

export default Example7;
