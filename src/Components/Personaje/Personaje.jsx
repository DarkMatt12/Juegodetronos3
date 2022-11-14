import { Link} from "react-router-dom";


import React from 'react'

const Personaje = ({character}) => {
  return (
    
            
            
             <div className='Personaje-Tarjeta'><Link className='Personaje-img' to={`./${character.name}`}>
                <img className='Personaje-img' src={character.image} alt="" /> </Link>
                <h3 className="h1-prueba">{character.name}</h3>
            </div>
             
       
           
            

        
  )
}

export default Personaje