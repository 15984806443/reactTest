import React, { useState, useEffect } from "react";

const Example3 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const keydown = e => {
      if (e.keyCode === 13) {
        console.log(username);
        console.log(password);
      }
    };
    window.addEventListener("keydown", keydown);
    return () => {
      window.removeEventListener("keydown", keydown);
    };
  }, [username, password]);
  return (
    <div>
      <input
        type="text"
        onChange={e => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="text"
        onChange={e => {
          setPassword(e.target.value);
        }}
      />
      <div>
        {username}*{password}
      </div>
    </div>
  );
};

export default Example3;
