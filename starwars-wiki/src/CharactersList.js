import React from 'react';
import Characters from './Characters';
import './CharactersList.css';

const CharactersList = ({characters}) => {

    const charactersComponent = characters.map((character, i) => {
        return(
            <Characters 
            key={i} 
            name={characters[i].name} 
            homeworld={characters[i].homeworld}
            species={characters[i].species}
            birthYear={characters[i].birth_year}
            gender={characters[i].gender}
            height={characters[i].height}
            mass={characters[i].mass}            
            />
        );
    })

    return(
        <div className="container tc">
            {charactersComponent}
        </div>
    );
}

export default CharactersList;