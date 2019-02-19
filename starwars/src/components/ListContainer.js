import React from 'react';
import './StarWars.css';

import CharacterCard from './CharacterCard';

const ListContainer = props => {
    return (
        <div className="list-container">
            {props.charList.map((char, index) =>
                <CharacterCard 
                    character={char}
                    checkHomeworldState={props.checkHomeworldState}
                    key={char.created}
                />
            )}
        </div>
    );
}

export default ListContainer;