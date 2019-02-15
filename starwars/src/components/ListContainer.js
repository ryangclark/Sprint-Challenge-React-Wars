import React from 'react';
import './StarWars.css';

import CharacterCard from './CharacterCard';

const ListContainer = props => {
    return (
        <div className="list-container">
            {props.charList.map(char =>
                <CharacterCard character={char} />
            )}
        </div>
    );
}

export default ListContainer;