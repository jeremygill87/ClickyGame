import React from "react";
import "./Score.css";

const Score = props => (
    <div className="currentScore">
        <h2 className="score">Your Score: {props.total}</h2>
        <h2 className="currentStatus">{props.status}</h2>
    </div>
);

export default Score;