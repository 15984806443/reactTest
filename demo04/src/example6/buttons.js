import React, { useContext } from "react";
import { ColorContext, UPDATE_COLOR } from "./color";

const Buttons = () => {
  console.log(useContext(ColorContext));
  const { dispatch } = useContext(ColorContext);
  console.log(dispatch);
  return (
    <React.Fragment>
      <button
        onClick={() => {
          dispatch({ type: UPDATE_COLOR, color: "red" });
        }}
      >
        红色
      </button>
      <button
        onClick={() => {
          dispatch({ type: UPDATE_COLOR, color: "yellow" });
        }}
      >
        黄色
      </button>
      <button
        onClick={() => {
          dispatch({ type: UPDATE_COLOR, color: "green" });
        }}
      >
        绿色
      </button>
    </React.Fragment>
  );
};

export default Buttons;
