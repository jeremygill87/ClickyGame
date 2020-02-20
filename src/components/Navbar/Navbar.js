import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar">
        <div className="col-sm">
            <h1>Click-A-DIck!</h1>
        </div>
        <div className="scoreTable">
            {props.message}
        </div>
        <div className="col-sm">
            Score: <span className="score">{props.currentScore}</span>
            |*| High Score: <span className="highScore">{props.highScore}</span>
        </div>
    </nav>
)

export default Navbar;