import React from 'react';
import './StarWars.css';

const CharacterCard = props => {
    return (
        <div className="character-card">
            <h3>{props.character.name}</h3>
            {/* <p>Homeworld: {props.charHomeworld}</p> */}
            <p>Birth Year: {props.character.birth_year}</p>
        </div>
    );
};

export default CharacterCard;