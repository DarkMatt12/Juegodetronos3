import './CasasPage.scss'
import axios from "axios";
import React, {  useEffect, useState } from "react";

import Filtro from '../../Components/Filtro-Personajes/Filtro-Personajes';
import GaleriaCasas from '../../Components/Galeria-Casas/Galeria-Casas';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
export default function CasasPage(){
    const [Casas, PonerCasas] = useState([]);
    const [CasasFiltradas, PonerCasasFiltradas] =useState([]);
    useEffect(() => {
        
        const getData = async () => {
            const { data } = await axios.get(
                "https://api.got.show/api/show/houses"
            )
            console.log(data)
            PonerCasas(data);
            PonerCasasFiltradas(data);
            
        }
        getData();
        
           
    }, [])
        const BuscarCasas = (name)=>{
       
            const filtro = Casas.filter((casa)=> casa.name.toLowerCase().includes(name.toLowerCase()));
            PonerCasasFiltradas(filtro);
            console.log(filtro)
        } 
    


    return(
        <div className='Casas-Page'>
            <div className='Header-prueba'>
                <div className="Buscador">
                    <Filtro setBusca={BuscarCasas}></Filtro>
                </div>
                <div className='Header-prueba2'>
                    <Link className='Personaje-img' to={`/`}>
                        <div className='VolverInicio'></div>
                    </Link>
                <Navbar></Navbar>
                </div>
                
            </div>
            <main>
            
            <GaleriaCasas casas={CasasFiltradas} />
            </main>
            <Footer></Footer>
        </div>
        
    )
}