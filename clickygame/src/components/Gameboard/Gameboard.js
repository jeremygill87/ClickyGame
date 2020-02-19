import React from "react";
import "./Gameboard.css";

const Gameboard = props => (
    <div className="img-container hover">
        <img className="gamecard" alt={props.name} src={props.image} id={props.id}
        onclick={() => props.shuffleCards(props.id)} className="scoreShuffle"/>
    </div>
);

export default Gameboard;