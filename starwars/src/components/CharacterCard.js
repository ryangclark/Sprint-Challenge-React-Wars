import React, { useState, useEffect } from 'react';
import './StarWars.css';

const CharacterCard = props => {
    // Declare a new state variable and its corresponding update function
    const [charHomeworld, setHomeworld] = useState(props.character.homeworld);
    // console.log('local homeworld', charHomeworld);

    useEffect(() => {
        // if charHomeworld is an object, we're good
        if (typeof charHomeworld === 'object') {return;}
        // else, check if homeworld is in App's state
        const homeworldAppState = props.checkHomeworldState(charHomeworld);
        // if homeworld IS in App's state, set that object to local state
        if (typeof homeworldAppState === 'object') {
            setHomeworld(homeworldAppState);
            // TODO: I dunno why this is getting called. 
            // It's retunning `null` when the `if` above should block that
            // console.log('homeworldAppState:', homeworldAppState);
        }
    });
    
    return (
        <div className="character-card">
            <h3>{props.character.name}</h3>
            {/* <p>Homeworld: {props.charHomeworld}</p> */}
            <p><strong>Birth Year:</strong> {props.character.birth_year}</p>
            <p><strong>Mass:</strong> {props.character.mass}</p>
            <p><strong>Hair Color:</strong> {props.character.hair_color}</p>
            <p><strong>Eye Color:</strong> <span style={{color: props.character.eye_color}}>{props.character.eye_color}</span></p>
            {!charHomeworld ? null
                : typeof charHomeworld === 'object' ? console.log('ternary', charHomeworld)
                : <p className="homeworld"><strong>Homeworld:</strong>{charHomeworld.name}</p>
            }
        </div>
    );
};

export default CharacterCard;