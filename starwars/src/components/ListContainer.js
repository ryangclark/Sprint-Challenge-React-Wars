import React from 'react';
import './StarWars.css';

import CharacterCard from './CharacterCard';

const ListContainer = props => {
    return (
        <div className="list-container">
            {props.charList.map((char) =>
                <CharacterCard 
                    character={char}
                    checkHomeworldState={props.checkHomeworldState}
                    homeworlds={props.homeworlds}
                    key={char.created}
                />
            )}
        </div>
    );
}

export default ListContainer;