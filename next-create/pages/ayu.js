import { useState } from "react";
const Ayu = () => {
  const [color, setColor] = useState("blue");
  const changeColor = () => {
    setColor(color === "blue" ? "red" : "blue");
  };
  return (
    <>
      <div>ayu免费学习</div>
      <button onClick={changeColor}>切换</button>
      <style jsx>
        {`
          div {
            color: ${color};
          }
        `}
      </style>
    </>
  );
};

export default Ayu;
