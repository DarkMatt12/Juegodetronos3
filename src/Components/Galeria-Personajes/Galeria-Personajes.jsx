import React from 'react'
import Personaje from '../Personaje/Personaje'
import SimpleBarReact from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const GaleriaPersonajes = ({characters}) => {
  
  return (
    <SimpleBarReact style={{maxHeight:550}}>
    <div className="Galeria-Personajes">
        {characters.map((character) => <Personaje key={character.name} character={character}/>)}
    </div></SimpleBarReact>
  )
}

export default GaleriaPersonajes