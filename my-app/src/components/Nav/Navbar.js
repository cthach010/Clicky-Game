import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav>
    <ul>
      <li className="brand animated lightSpeedIn">
        <a href="/clicky-game/">{props.title}</a>
      </li>
      <li id="currentScore">Current Score: {props.score}</li>
      <li id="rightorwrong">{props.rightorWrong}</li>
      <li id="topScore">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Navbar;