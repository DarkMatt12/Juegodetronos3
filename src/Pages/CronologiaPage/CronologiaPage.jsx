
import './CronologiaPage.scss'
import axios from "axios";
import React, {  useEffect, useState } from "react";
import SimpleBarReact from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function CronologiaPage(){
    const [Personaje, PonerPersonaje] = useState([]);
    const [Orden, PonerOrden ] =useState( true );
    useEffect(() => {
        
        const getData = async () => {
            const { data } = await axios.get(
                "https://api.got.show/api/show/characters/"
            )
            console.log(data)
            PonerPersonaje(data);
            
        }
        getData();
        
        
    }, [])
    useEffect(()=>{
        if(Orden){
            ordenmayormenor(Personaje);
        }else{
            ordenmenormayor(Personaje);
        }
    },[Orden, Personaje])

    
    return(
        <div className='Cronologia-Page'>
            <div className='Header-prueba'>
                <div>
                    
                </div>
                <div className='Header-prueba2'>
                    <Link className='Personaje-img' to={`/`}>
                        <div className='VolverInicio'></div>
                    </Link>
                <Navbar></Navbar>
                </div>
            </div>
            <main>
                <div className='Todo'>
        
                    <div className='Cronologia-Caja-btn'>
                        <button className='Cronologia-btn' onClick={ordenar}><p className='Cronologia-btn-txt'>O</p></button>
                        <div className={Orden? 'Cronologia-Subida' : 'Cronologia-Bajada'}></div>
                    </div>
                    <div className='Caja-Personajes'><SimpleBarReact style={{maxHeight:509}}>
                        {Personaje.map((personaje, index)=>(
                            <div key={index} className={index%2===0? "impar" : "par"}>
                                <p className='Cronologia-edad'>{personaje.age?.age}</p>
                                <h4 className='Cronologia-nombre'>{personaje.name}</h4>
                                <div className='Cronologia-Contenedor-img'>
                                <img className='Cronologia-Galeria-img'src={personaje.image} alt="" />
                                </div>

                                </div>
                        ))}</SimpleBarReact>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
    function ordenar(){
        PonerOrden(!Orden);
        console.log("ordenar prueba")
    }
    function ordenmenormayor(Personaje){
        if(Personaje && Personaje.length > 0){
            Personaje.sort((a,b)=> a.age?.age - b.age?.age)
        }
        return Personaje;
    }
    function ordenmayormenor(Personaje){
        if(Personaje && Personaje.length > 0){
            Personaje.sort((a,b)=> b.age?.age - a.age?.age)
        }
        return Personaje;
    }
    
}