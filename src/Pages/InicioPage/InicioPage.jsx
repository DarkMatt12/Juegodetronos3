import './InicioPage.scss';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar';

export default function InicioPage(){

    return(
        <div className='inicio'>
            <div className='Header-prueba'>
               
                <Navbar></Navbar>
            </div>
            <main>
                <p className='inicioNombre'>GAMES OF THRONES</p>
            </main>
            <Footer></Footer>
        </div>
    )
        

}

