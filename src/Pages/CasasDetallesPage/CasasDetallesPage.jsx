import './CasasDetallesPage.scss'
import axios from "axios";
import {  useContext, useEffect, useState } from "react";
import { Link, useParams} from "react-router-dom";
import { MyContext } from '../../context/MyContext';
import Navbar from '../../Components/Navbar';
export default function CasasDetallesPage(){
    const {t} = useContext(MyContext)
    const [Casa, PonerCasas] = useState([]);
    const [Sedes, PonerSedes] = useState([])
    const [Regiones, PonerRegiones] = useState([]);
    const [Alianzas, PonerAlianzas] = useState([]);
    const [Religiones, PonerReligiones] = useState([]);
    
    const { name } = useParams();
    
    
    useEffect(() => {
        
        const getData = async () => {
            const { data } = await axios.get(
                `https://api.got.show/api/show/houses/${name}`
            );
            console.log(data)
            
            PonerCasas(data[0]);
            PonerSedes(data[0].seat);
            PonerRegiones(data[0].region);
            PonerAlianzas(data[0].allegiance);
            PonerReligiones(data[0].religion);
            
            
            
        }
        getData();
        
    }, [])

    return(
    <div className='Casa'>
          <div className='Header-prueba'>
           <Link className='Personaje-img' to={`/casas`}>
                <div className='VolverAtras'>
                    
                </div></Link>
                <div className='Header-prueba2'>
                    <Link className='Personaje-img' to={`/`}>
                        <div className='VolverInicio'></div>
                    </Link>
                <Navbar></Navbar>
                </div>
            </div>
            <main>
                <div className='Casa-1'>
                    <div className='Casa-img'>
                            <img className='Casa-img-img' src={Casa.logoURL} alt="" />
                            </div>
                    <div className='Casa-name'><h1 className='Casa-name-h1'>{Casa.name}</h1></div>
                </div>
                <div className='Casa-2'>
                    <div className='Casa-lema'>
                        <div className='Casa-lema-titulo'><h1>{t('detail_c1')}</h1></div>
                        <div className='Casa-lema-desc'><p>{Casa.words}</p></div>
                    </div>
                    <div className='Casa-Sede'>
                        <div className='Casa-Sede-titulo'><h1>{t('detail_c2')}</h1></div>
                        <div className='Casa-Sede-desc'>
                        {Sedes.map((sede, index)=>
                            <p className='Casa-Listado' key={index}>
                                {sede}
                            </p>
                            )}
                
                        </div>
                    </div>
                    <div className='Casa-Regiones'>
                        <div className='Casa-Regiones-titulo'><h1>{t('detail_c3')}</h1></div>
                        <div className='Casa-Regiones-desc'>
                        {Regiones.map((region, index)=>
                            <p className='Casa-Listado' key={index}>
                                {region}
                            </p>
                            )}
                        </div>
                    </div>
                    <div className='Casa-padre'>
                        <div className='Casa-padre-titulo'><h1>{t('detail_c4')}</h1></div>
                        <div className='Casa-padre-desc'>
                        {Alianzas.map((alianza, index)=>
                            <p className='Casa-Listado' key={index}>
                                {alianza}
                            </p>
                            )}
                        </div>
                    </div>
                    <div className='Casa-Religiones'>
                        <div className='Casa-Religiones-titulo'><h1>{t('detail_c5')}</h1></div>
                        <div className='Casa-Religiones-desc'>
                        {Religiones.map((religion, index)=>
                            <p className='Casa-Listado' key={index}>
                                {religion}
                            </p>
                            )}
                        </div>
                    </div>
                    <div className='Casa-fundacion'>
                        <div className='Casa-fundacion-titulo'><h1>{t('detail_c6')}</h1></div>
                        <div className='Casa-fundacion-desc'>
                            <p>{Casa.createdAt}</p>
                        </div>
                    </div>
                </div>
            </main>
</div>)
}