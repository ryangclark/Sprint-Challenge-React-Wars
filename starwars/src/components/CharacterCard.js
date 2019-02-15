import React from 'react';
import './StarWars.css';

const CharacterCard = props => {
    return (
        <div className="character-card">
            <h3>{props.character.name}</h3>
            {/* <img src={props.character.} */}
            <p>{props.character.url}</p>
        </div>
    );
};

export default CharacterCard;