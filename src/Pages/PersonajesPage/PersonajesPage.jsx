import './PersonajesPage.scss'
import axios from "axios";
import React, {  useEffect, useState } from "react";

import Filtro from '../../Components/Filtro-Personajes/Filtro-Personajes';
import GaleriaPersonajes from '../../Components/Galeria-Personajes/Galeria-Personajes';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';



export default function PersonajesPage(){
    const [Personajes, PonerPersonajes] = useState([]);
    const [PersonajesFiltrados, PonerPersonajesFiltrados] =useState([]);
    useEffect(() => {
        
        const getData = async () => {
            const { data } = await axios.get(
                "https://api.got.show/api/show/characters/"
            )
            console.log(data)
            PonerPersonajes(data);
            PonerPersonajesFiltrados(data);
            
        }
        getData();
        
           
    }, [])
        const BuscarPersonajes = (name)=>{
       
            const filtro = Personajes.filter((character)=> character.name.toLowerCase().includes(name.toLowerCase()));
            PonerPersonajesFiltrados(filtro);
            console.log(filtro)
        } 

    return(
        <div className='Personajes-Page'>
            <div className='Header-prueba'>
                <div className="Buscador">
                    <Filtro setBusca={BuscarPersonajes}></Filtro>
                </div>
                <div className='Header-prueba2'>
                    <Link to={`/`}>
                        <div className='VolverInicio'></div>
                    </Link>
                    <Navbar></Navbar>
                </div>
                
            </div>
            <main>
            <GaleriaPersonajes characters={PersonajesFiltrados} />
            </main>
            <Footer></Footer>
        </div>
    )
}