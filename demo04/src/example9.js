import React, { useState, useEffect, useCallback } from "react";

const useWinSize = () => {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });
  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    });
  }, []);
  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return size;
};

const Example9 = () => {
  const size = useWinSize();
  return (
    <React.Fragment>
      {size.width}*{size.height}
    </React.Fragment>
  );
};

export default Example9;
