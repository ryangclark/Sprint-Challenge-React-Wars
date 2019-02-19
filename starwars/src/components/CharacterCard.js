import React from 'react';
import './StarWars.css';

const CharacterCard = props => {
    let charHomeworld;
    if (props.homeworlds[props.character.homeworld]) {
        charHomeworld = props.homeworlds[props.character.homeworld];
    }
    return (
        <div className="character-card">
            <h3>{props.character.name}</h3>
            <p><strong>Birth Year:</strong> {props.character.birth_year}</p>
            <p><strong>Mass:</strong> {props.character.mass}</p>
            <p><strong>Hair Color:</strong> {props.character.hair_color}</p>
            <p><strong>Eye Color:</strong> <span style={{color: props.character.eye_color}}>{props.character.eye_color}</span></p>
            {!charHomeworld ? null
                : <p className="homeworld"><strong>Homeworld:</strong> {charHomeworld.name}</p>
            }
        </div>
    );
};

export default CharacterCard;