import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav>
    <ul>
      <li className="brand" clickygame>
      <h1 className="title">KINGDOM HEART CLICK</h1></li>
      <li id="score">score: {props.score}</li>
      <li id="rightorwrong">{props.rightorWrong}</li>
      <li id="highScore">High Score: {props.highScore}</li>
    </ul>
  </nav>
);

export default Navbar;