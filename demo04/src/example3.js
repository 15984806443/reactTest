import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Index = () => {
  useEffect(() => {
    // console.log("老弟你来index页面了");
    return () => {
      console.log("老弟你离开index页面了");
    };
  }, []);
  return <h2>ayu.com</h2>;
};

const List = () => {
  useEffect(() => {
    // console.log("老弟你来list页面了");
    return () => {
      console.log("老弟你离开list页面了");
    };
  }, []);
  return <h2>list</h2>;
};

const Example3 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    //componentDidmount  componentDidUpdate componentWillUnmount
    return () => {
      console.log("===========");
    };
  }, []);
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
      <Router>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/list/">列表</Link>
          </li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list/" component={List} />
      </Router>
    </div>
  );
};

export default Example3;
