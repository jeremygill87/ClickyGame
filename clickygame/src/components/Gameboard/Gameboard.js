import React from "react";
import "./Gameboard.css";

const Gamecard = props => (
    <div className="gamecard img-container hover">
        <img alt={props.name} src={props.image} id={props.id}
        onclick={() => props.shuffleCards(props.id)} className="scoreShuffle"/>
    </div>
);

export default Gameboard;