import { Link} from "react-router-dom";


import React from 'react'

const Casa = ({casa}) => {
  return (
    
            

    
    
    
     <div hidden={casa.name === "House Amber" ? true : true && 
     casa.name === "House Baratheon" ? true : true && 
     casa.name === "House Blackfyre" ? true : true && 
     casa.name === "House Blackmont" ? true : true &&
     casa.name === "House Bolton" ? true : true && 
     casa.name === "House Botley" ? true : true &&
     casa.name === "House Caron" ? true : true &&
     casa.name === "House Cerwyn" ? true : true &&
     casa.name === "House Cole" ? true : true &&
     casa.name === "House Durrandon" ? true : true &&
     casa.name === "House Frost" ? true : true &&
     casa.name === "House Greenwood" ? true : true &&
     casa.name === "House Hightower" ? true : true &&
     casa.name === "House Lannister" ? true : true &&
     casa.name === "House Lannister of Lannisport" ? true : true &&
     casa.name === "User:Lord Bardo" ? true : true &&
     casa.name === "House Lothston" ? true : true &&
     casa.name === "House Manwoody" ? true : true &&
     casa.name === "House Qoherys" ? true : true &&
     casa.name === "House Stark" ? true : true &&
     casa.name === "House Strong" ? true : true &&
     casa.name === "User:Sebastian2101" ? true : true &&
     casa.name === "House Towers" ? true : true &&
     casa.name === "House Towers (North)" ? true : true &&
     casa.name === "House Tyrell" ? true : true &&
     casa.name === "House Velaryon" ? true : true &&
     casa.logoURL ? false: true  }  className='Casa-Tarjeta'>
     <Link to={`./${casa.name}`}>   
        <img className='Caja-imagen' src={casa.logoURL} alt="" /></Link> 
        <h5 className='Caja-nombre'>{casa.name}</h5>
     </div>
     

             
       
           
            

        
  )
}

export default Casa