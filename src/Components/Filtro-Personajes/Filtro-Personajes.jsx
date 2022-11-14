import React from "react";

const Filtro =({setBusca})=>{
    const handleChange = (event)=>{
        const {value}= event.target;
        setBusca(value);
        console.log(value)

    }
    return(
        <div>
            <input className="Buscador-" type="text" name="nombre" id="" onChange={handleChange} placeholder="🔍Buscar.."/>
        </div>
    )
}

export default Filtro