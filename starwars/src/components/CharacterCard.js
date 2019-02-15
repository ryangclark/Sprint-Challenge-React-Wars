import React from 'react';
import './StarWars.css';

const CharacterCard = props => {
    return (
        <div className="character-card">
            <h3>{props.character.name}</h3>
            {/* <p>Homeworld: {props.charHomeworld}</p> */}
            <p><strong>Birth Year:</strong> {props.character.birth_year}</p>
            <p><strong>Mass:</strong> {props.character.mass}</p>
            <p><strong>Hair Color:</strong> {props.character.hair_color}</p>
            <p><strong>Eye Color:</strong> <span style={{color: props.character.eye_color}}>{props.character.eye_color}</span></p>
        </div>
    );
};

export default CharacterCard;