import React from "react";
import { Route, Link } from "react-router-dom";
import Money from "./workplace/Money";
import Getup from "./workplace/Getup";

function Work() {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li>
            <Link to="/workplace/money/">加薪教程</Link>
          </li>
          <li>
            <Link to="/workplace/getup/">早起教程</Link>
          </li>
        </ul>
      </div>
      <div className="videoContent">
        <div>
          <h3>职场技能</h3>
        </div>
        <Route path="/workplace/money/" component={Money} />
        <Route path="/workplace/getup/" component={Getup} />
      </div>
    </div>
  );
}

export default Work;
