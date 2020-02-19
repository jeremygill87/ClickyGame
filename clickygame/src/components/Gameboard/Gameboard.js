import React from "react";
import "./Gameboard.css";

const Gameboard = props => (
    <div className = "img-container">
        <a onClick = {() => props.selectDick(props.name)}>
            <img className="gamecard" alt={props.name} src={props.image} />
        </a> 
    </div>
);

export default Gameboard;