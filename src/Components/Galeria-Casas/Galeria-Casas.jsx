import React from 'react';


import Casa from '../Casa/Casa';
import SimpleBarReact from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const GaleriaCasas = ({casas}) => {
   return (
    <SimpleBarReact style={{maxHeight:550}}>
    <div className='Galeria-Casas'>
        {casas.map((casa) => <Casa key={casa.name} casa={casa}/>)}
    </div></SimpleBarReact>
 
    
  
   )
}

export default GaleriaCasas

