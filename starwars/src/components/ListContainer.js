import React from 'react';
import './StarWars.css';

import CharacterCard from './CharacterCard';

const ListContainer = props => {
    return (
        <div className="list-container">
            {props.charList.map((char, index) =>
                <CharacterCard 
                    character={char}
                    // charHomeworld={props.homeworlds[index]}
                    key={char.created}
                />
            )}
        </div>
    );
}

export default ListContainer;